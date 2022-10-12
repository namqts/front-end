import {faAddressBook} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {Box, Icon, NativeBaseProvider, Slider} from 'native-base';
import React, {useRef} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import {text} from 'stream/consumers';
import FilterRace from '../reuse/FilterRace';
import Tokyo from '../reuse/tokyo';

const data = [
  {
    id: 1,
    dateTime: '2020-01-01 12:10 AM',
    grass: '2400m',
    server: 'MayoRNAseq',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '3.6',
  },
  {
    id: 2,
    dateTime: '2020-03-11 12:10 AM',
    grass: '2400m',
    server: 'CHDWB',
    class: require('../Image/class-Race/class2.png'),
    fieldType: 'Dirt',
    entryFee: 'Free',
    prize: '16.23',
  },
  {
    id: 3,
    dateTime: '2020-06-28 07:31 AM',
    grass: '2400m',
    server: 'MSMM',
    class: require('../Image/class-Race/class1.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '4.28',
  },
  {
    id: 4,
    dateTime: '2020-04-16 12:10 AM',
    grass: '2400m',
    server: 'MayoLOADGWAS',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Dirt',
    entryFee: 'Free',
    prize: '3.8.19',
  },
  {
    id: 5,
    dateTime: '2020-04-17 01:23 PM',
    grass: '2400m',
    server: 'MSBB',
    class: require('../Image/class-Race/class7.png'),
    fieldType: 'Dirt',
    entryFee: 'Free',
    prize: '8.19',
  },
  {
    id: 1,
    dateTime: '2020-01-01 12:10 AM',
    grass: '2400m',
    server: 'MayoRNAseq',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '3.6',
  },
  {
    id: 1,
    dateTime: '2020-01-01 12:10 AM',
    grass: '2400m',
    server: 'MayoRNAseq',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '3.6',
  },
  {
    id: 1,
    dateTime: '2020-01-01 12:10 AM',
    grass: '2400m',
    server: 'MayoRNAseq',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '3.6',
  },
  {
    id: 1,
    dateTime: '2020-01-01 12:10 AM',
    grass: '2400m',
    server: 'MayoRNAseq',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '3.6',
  },
  {
    id: 1,
    dateTime: '2020-01-01 12:10 AM',
    grass: '2400m',
    server: 'MayoRNAseq',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '3.6',
  },
  {
    id: 1,
    dateTime: '2020-01-01 12:10 AM',
    grass: '2400m',
    server: 'MayoRNAseq',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '3.6',
  },
  {
    id: 1,
    dateTime: '2020-01-01 12:10 AM',
    grass: '2400m',
    server: 'MayoRNAseq',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '3.6',
  },
];

export default function HistoryCard() {
  const refRBSheet = useRef();
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.label}>
        <Text style={styles.title}>Results</Text>
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <Image source={require('../Image/filterPay.png')} />
        </TouchableOpacity>
      </View>
      {data.map(e => (
        <TouchableOpacity
          onPress={() => navigation.navigate('HistoryHorse', {data: e})}>
          <LinearGradient
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}
            useAngle={true}
            angle={180}
            locations={[0.0, 0.1615, 0.3385, 0.474, 0.8542, 1.0]}
            colors={[
              '#FCFCFC',
              '#D0D0D0',
              '#F8F8F8',
              '#A4A4A4',
              '#5F5F5F',
              '#B3B3B3',
            ]}
            style={styles.border}>
            <View style={styles.containerBorder}>
              <View style={styles.containerCard}>
                <View style={styles.layoutTop}>
                  <Text style={styles.dateTime}>{e.dateTime}</Text>
                  <View style={styles.grass}>
                    <Text style={[styles.dateTime, {color: '#FFFFFF'}]}>
                      Grass {''} {e.grass}
                    </Text>
                  </View>
                </View>
                <View style={styles.raceName}>
                  <View style={[styles.grass, {width: 57, height: 24}]}>
                    <Tokyo />
                  </View>
                  <Text
                    style={[
                      styles.dateTime,
                      {color: '#FFFFFF', marginLeft: 8},
                    ]}>
                    {e.server}
                  </Text>
                </View>
                <View style={styles.layoutBottom}>
                  <Image source={e.class} />
                  <View style={styles.layoutButtomLeft}>
                    <View style={styles.field}>
                      <Text style={styles.titleBottom}>Field type:</Text>
                      <Text
                        style={[
                          styles.titleBottom,
                          {fontWeight: '700', color: '#F2F2F2'},
                        ]}>
                        {e.fieldType}
                      </Text>
                    </View>
                    <View style={styles.field}>
                      <Text style={styles.titleBottom}>Entry fee:</Text>
                      <Text
                        style={[
                          styles.titleBottom,
                          {fontWeight: '700', color: '#00CDEC'},
                        ]}>
                        {e.entryFee}
                      </Text>
                    </View>
                    <View style={styles.field}>
                      <Text style={styles.titleBottom}>Prize:</Text>
                      <View style={styles.prize}>
                        <Text
                          style={[
                            styles.titleBottom,
                            {fontWeight: '700', color: '#FF9900'},
                          ]}>
                          {e.prize}
                        </Text>
                        <Image source={require('../Image/Coincoin.png')} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      ))}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        height={610}
        customStyles={{
          container: {
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            backgroundColor: 'rgba(0, 20, 31, 0.98)',
          },
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          draggableIcon: {
            backgroundColor: 'rgba(223, 230, 233, 0.25)',
            width: 134,
          },
        }}>
        <NativeBaseProvider>
          <View style={styles.menu}>
            <View style={styles.layout}>
              <FilterRace />
              <Box mx={5} style={{width: 348, height: 24}}>
                <Slider minValue={20} maxValue={70} size="lg" colorScheme="orange">
                  <Slider.Track bg="orange.100">
                    <Slider.FilledTrack bg="#0AB0BB" />
                  </Slider.Track>
                  <Slider.Thumb borderRadius={99} width={0}>
                    <Image
                      source={require('../Image/volume.png')}
                      style={{marginTop: 30}}
                    />
                  </Slider.Thumb>
                </Slider>
              </Box>

              <TouchableOpacity
                onPress={() => refRBSheet.current.close()}
                style={{marginTop: 41}}>
                <Image
                  source={require('../Image/btnAccept.png')}
                  style={{width: 394, height: 43, marginLeft: -4}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </NativeBaseProvider>
      </RBSheet>
    </>
  );
}

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 396,
    height: 336,
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: (0, 16),
    width: 428,
    height: 415,
  },
  prize: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 52,
    height: 16,
  },
  titleBottom: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.03,
    color: '#C5C5C5',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 63,
    height: 36,
  },
  layoutButtomLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    width: 269,
    height: 36,
    marginLeft: 22,
  },
  layoutBottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: (0, 8),
    width: 379,
    height: 36,
    marginTop: 16,
  },
  raceName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    padding: (0, 8),
    width: 379,
    height: 25,
    marginTop: 10,
  },
  grass: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: (0, 4),
    width: 106,
    height: 24,
    backgroundColor: 'rgba(0, 20, 30, 0.5)',
    borderRadius: 4,
  },
  dateTime: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#C5C5C5',
  },
  layoutTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: (0, 8),
    width: 377,
    height: 24,
  },
  containerCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: (8, 0),
    width: 376,
    height: 115,
    backgroundColor: 'rgba(0, 20, 30, 0.5)',
    borderRadius: 7,
  },
  containerBorder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 376,
    height: 116,
    backgroundColor: 'rgb(85, 91, 97)',
    borderRadius: 7,
  },
  border: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 1,
    width: 378,
    height: 117,
    borderRadius: 8,
    shadowColor: 'rgba(255, 255, 255, 0.08)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    elevation: 5,
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: '#FFF',
  },
  label: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    width: 370,
    height: 40,
    marginTop: 12,
    marginBottom: 12,
  },
});
