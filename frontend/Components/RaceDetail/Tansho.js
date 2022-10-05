import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import ChipBet from '../reuse/ChipBet';
import {useNavigation} from '@react-navigation/native';

const horseList = [
  {
    id: 1,
    image: require('../Image/List-horse/horseWhite.png'),
    name: 'A. Baker',
    odds: '6.35',
    background: 'rgba(0, 21, 30, 0.5)',
    qua: 132,
  },
  {
    id: 2,
    image: require('../Image/List-horse/horseBlack.png'),
    name: 'J. Allen',
    odds: '2.55',
    background: 'rgba(0, 21, 30, 0.75)',
    qua: 0,
  },
  {
    id: 3,
    image: require('../Image/List-horse/horseRed.png'),
    name: 'B. Beats',
    odds: '4.30',
    background: 'rgba(0, 21, 30, 0.5)',
    qua: 22,
  },
  {
    id: 4,
    image: require('../Image/List-horse/horseLightBlue.png'),
    name: 'A. Amos',
    odds: '8.15',
    background: 'rgba(0, 21, 30, 0.75)',
    qua: 311,
  },
  {
    id: 5,
    image: require('../Image/List-horse/horseYellow.png'),
    name: 'P. Beasley',
    odds: '4.10',
    background: 'rgba(0, 21, 30, 0.5)',
    qua: 0,
  },
  {
    id: 6,
    image: require('../Image/List-horse/horseGold.png'),
    name: 'R. Barkley',
    odds: '6.20',
    background: 'rgba(0, 21, 30, 0.75)',
    qua: 0,
  },
  {
    id: 7,
    image: require('../Image/List-horse/horseGreen.png'),
    name: 'N. Barmby',
    odds: '7.45',
    background: 'rgba(0, 21, 30, 0.5)',
    qua: 0,
  },
  {
    id: 8,
    image: require('../Image/List-horse/horseGreenLight.png'),
    name: 'H. Barnet',
    odds: '3.90',
    background: 'rgba(0, 21, 30, 0.75)',
    qua: 0,
  },
  {
    id: 9,
    image: require('../Image/List-horse/horseOrange.png'),
    name: 'T. Allen',
    odds: '1.45',
    background: 'rgba(0, 21, 30, 0.5)',
    qua: 0,
  },
  {
    id: 10,
    image: require('../Image/List-horse/horseOrangeLight.png'),
    name: 'A. Ball',
    odds: '3.20',
    background: 'rgba(0, 21, 30, 0.75)',
    qua: 0,
  },
  {
    id: 11,
    image: require('../Image/List-horse/horseViolet.png'),
    name: 'B. Austin',
    odds: '4.95',
    background: 'rgba(0, 21, 30, 0.5)',
    qua: 0,
  },
  {
    id: 12,
    image: require('../Image/List-horse/horseVioletLight.png'),
    name: 'J. Ashcroft',
    odds: '6.80',
    background: 'rgba(0, 21, 30, 0.75)',
    qua: 0,
  },
];

const chip = [
  {
    id: 1,
    image: require('../Image/chip1.png'),
    color: '#3CB0FF',
  },
  {
    id: 2,
    image: require('../Image/chip3.png'),
    color: '#189803',
  },
  {
    id: 3,
    image: require('../Image/chip2.png'),
    color: '#FFAE00',
  },
  {
    id: 4,
    image: require('../Image/chip4.png'),
    color: '#BF04C3',
  },
];

function Tansho() {
  const [id, setId] = useState(4);

  const setIdFilter = id => {
    setId(id);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.0, y: 1.0}}
        useAngle={true}
        angle={360}
        locations={[0.0, 0.4479, 0.4792, 1.0]}
        colors={['#F5DE55', '#EAC23B', '#FFF873', '#DD9A09']}
        style={styles.tabs}>
        <LinearGradient
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
          useAngle={true}
          angle={90}
          locations={[0.0, 0.22, 0.51, 0.78, 1.0]}
          colors={['#245494', '#2c7dc3', '#10b3e8', '#2c7dc3', '#245494']}
          style={styles.border}>
          <View style={styles.content}>
            <View style={styles.containerChip}>
              {chip.map(e => (
                <TouchableOpacity
                  style={[styles.borderChip]}
                  onPress={() => setIdFilter(e.id)}>
                  <Image
                    source={e.image}
                    style={[
                      {width: 48, height: 48},
                      id === e.id && {
                        backgroundColor: e.color,
                        width: 60,
                        height: 60,
                        borderRadius: 135,
                      },
                    ]}
                  />
                  <View
                    style={[
                      {
                        width: 48,
                        height: 48,
                        borderRadius: 135,
                        backgroundColor: 'rgba(0, 20, 30, 0.5)',
                        marginTop: -48,
                      },
                      id === e.id && {
                        backgroundColor: null,
                        width: 60,
                        height: 60,
                        borderRadius: 135,
                        marginTop: -64,
                      },
                    ]}></View>
                </TouchableOpacity>
              ))}
              <View style={styles.btnBorder}>
                <Image source={require('../Image/clear.png')} />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('BetConfirm', {data: horseList})}>
                <View style={styles.btnBorder}>
                  <Image
                    source={require('../Image/bet.png')}
                    style={{marginLeft: -8}}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </LinearGradient>
      <View style={styles.ContainerTable}>
        <View style={styles.Placeholder}>
          <View style={styles.header}>
            <LinearGradient
              start={{x: 0.0, y: 0.0}}
              end={{x: 0.0, y: 1.0}}
              useAngle={true}
              angle={180}
              locations={[0.0, 0.1615, 0.3385, 0.474, 0.8542, 1.0]}
              colors={[
                '#F8F8F8',
                '#D0D0D0',
                '#F8F8F8',
                '#A4A4A4',
                '#5F5F5F',
                '#B3B3B3',
              ]}
              style={styles.borderNo}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                useAngle={true}
                angle={180}
                locations={[0.0, 0.6279, 0.6868, 1.0]}
                colors={['#717171', '#424242', '#343434', '#343434']}
                style={styles.no}>
                <Text style={styles.txtTable}>No.</Text>
              </LinearGradient>
            </LinearGradient>
            <LinearGradient
              start={{x: 0.0, y: 0.0}}
              end={{x: 0.0, y: 1.0}}
              useAngle={true}
              angle={180}
              locations={[0.0, 0.1615, 0.3385, 0.474, 0.8542, 1.0]}
              colors={[
                '#F8F8F8',
                '#D0D0D0',
                '#F8F8F8',
                '#A4A4A4',
                '#5F5F5F',
                '#B3B3B3',
              ]}
              style={styles.borderName}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                useAngle={true}
                angle={180}
                locations={[0.0, 0.6279, 0.6868, 1.0]}
                colors={['#717171', '#424242', '#343434', '#343434']}
                style={styles.name}>
                <Text style={styles.txtTable}>Horse name</Text>
              </LinearGradient>
            </LinearGradient>
            <LinearGradient
              start={{x: 0.0, y: 0.0}}
              end={{x: 0.0, y: 1.0}}
              useAngle={true}
              angle={180}
              locations={[0.0, 0.1615, 0.3385, 0.474, 0.8542, 1.0]}
              colors={[
                '#F8F8F8',
                '#D0D0D0',
                '#F8F8F8',
                '#A4A4A4',
                '#5F5F5F',
                '#B3B3B3',
              ]}
              style={styles.borderCareer}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                useAngle={true}
                angle={180}
                locations={[0.0, 0.6279, 0.6868, 1.0]}
                colors={['#717171', '#424242', '#343434', '#343434']}
                style={styles.career}>
                <Text style={styles.txtTable}>Odds</Text>
              </LinearGradient>
            </LinearGradient>
            <LinearGradient
              start={{x: 0.0, y: 0.0}}
              end={{x: 0.0, y: 1.0}}
              useAngle={true}
              angle={180}
              locations={[0.0, 0.1615, 0.3385, 0.474, 0.8542, 1.0]}
              colors={[
                '#F8F8F8',
                '#D0D0D0',
                '#F8F8F8',
                '#A4A4A4',
                '#5F5F5F',
                '#B3B3B3',
              ]}
              style={styles.borderAct}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                useAngle={true}
                angle={180}
                locations={[0.0, 0.6279, 0.6868, 1.0]}
                colors={['#717171', '#424242', '#343434', '#343434']}
                style={styles.act}>
                <Text style={styles.txtTable}>Qua.</Text>
              </LinearGradient>
            </LinearGradient>
          </View>

          <View>
            {horseList.map((item, i) => (
              <View style={styles.rowList} key={i}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 7,
                    width: 44,
                    height: 40,
                    backgroundColor: item.background,
                    borderColor: '#A4A4A4',
                    borderWidth: 0.5,
                  }}>
                  <Image source={item.image} />
                  <Text style={styles.txtNumber}>{item.id}</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 7,
                    width: 156,
                    height: 40,
                    backgroundColor: item.background,
                    borderColor: '#A4A4A4',
                    borderWidth: 0.5,
                  }}>
                  <Text style={styles.txt}>{item.name}</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 7,
                    width: 71,
                    height: 40,
                    backgroundColor: item.background,
                    borderColor: '#A4A4A4',
                    borderWidth: 0.5,
                  }}>
                  <Text style={styles.txt}>
                    <Text style={{color: '#FFCB12'}}>{item.odds}</Text>
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 7,
                    width: 116,
                    height: 40,
                    backgroundColor: item.background,
                    borderColor: '#A4A4A4',
                    borderWidth: 0.5,
                  }}>
                  <Text
                    style={{
                      width: 70,
                      height: 24,
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: 14,
                      lineHeight: 24,
                      letterSpacing: 0.02,
                      color: item.qua == 0 ? '#fff' : '#00CDEC',
                    }}>
                    {item.qua}
                  </Text>
                  {item.qua == 0 ? null : (
                    <Image source={require('../Image/del.png')} />
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

export default Tansho;

const styles = StyleSheet.create({
  btnBorder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
    width: 69,
    height: 34,
    marginLeft: 4,
    // borderWidth: (0, 1, 1, 1),
    // borderStyle: 'solid',
    // borderColor: '#3F2912',
    borderRadius: 8,
  },
  borderChip: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  containerChip: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    paddingLeft: 4,
    width: 382,
    height: 50,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    width: 386,
    height: 96,
    overflow: 'scroll',
    backgroundColor: '#04234B',
  },
  border: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    width: 389,
    height: 98,
    borderWidth: 1,
    borderColor: '#585F6C',
  },
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    marginTop: -4,
    width: 392,
    height: 100,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 650,
    height: 1642,
  },
  txtSort: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.03,
    color: '#fff',
    marginTop: 1,
  },
  txt: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#fff',
  },
  txtNumber: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'right',
    color: '#fff',
    marginTop: -12,
    marginLeft: -20,
  },
  rowList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 0,
    marginLeft: -1,
    width: 386,
    height: 40,
  },
  act: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 115,
    height: 45,
    justifyContent: 'center',
    borderTopRightRadius: 7,
  },
  borderAct: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 117,
    height: 48,
    borderTopRightRadius: 7,
  },
  owner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 113,
    height: 45,
    justifyContent: 'center',
  },
  borderOwner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 114,
    height: 48,
  },
  career: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 70,
    height: 45,
    justifyContent: 'center',
  },
  borderCareer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 71,
    height: 48,
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 155,
    height: 45,
    justifyContent: 'center',
  },
  borderName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 156,
    height: 48,
  },
  txtTable: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#fff',
  },
  borderNo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 44,
    height: 48,
    borderTopLeftRadius: 7,
  },
  no: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: (12, 8),
    width: 43,
    height: 45,
    borderTopLeftRadius: 8,
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    width: 386,
    height: 48,
    marginTop: -3,
  },
  Placeholder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 1.5,
    width: 390,
    height: 530,
    borderColor: '#383838',
    borderWidth: 1,
    borderRadius: 9,
  },
  ContainerTable: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 1,
    width: 392,
    height: 532,
    borderColor: '#FFAE00',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: -10,
  },
});
