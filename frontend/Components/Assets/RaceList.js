import {ListItem} from '@ui-kitten/components';
import {Size} from '@ui-kitten/components/devsupport';
import React, {Component, PureComponent, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import {useNavigation} from '@react-navigation/native';
import Tokyo from '../reuse/tokyo';
import ClassRace from '../reuse/classRace';

const races = [
  {
    id: 1,
    location: [0.0, 1.0],
    color: ['#DCDCDC', '#A8A8A8'],
    colorRace: '#A8A8A8',
    imageG: require('../Image/class-Race/class1.png'),
    yard: require('../Image/Yard.png'),
    m: '1200m',
  },
  {
    id: 2,
    location: [0.0, 1.0],
    color: ['#04C5AE', '#2185BD'],
    colorRace: '#2185BD',
    imageG: require('../Image/class-Race/class4.png'),
    yard: require('../Image/Yard1.png'),
    m: '2400m',
  },
  {
    id: 3,
    location: [0.0, 1.0],
    color: ['#992DFF', '#631EAB'],
    colorRace: '#631EAB',
    imageG: require('../Image/class-Race/class2.png'),
    yard: require('../Image/Yard1.png'),
    m: '2400m',
  },
  {
    id: 4,
    location: [0.0, 1.0],
    color: ['#92CAF9', '#6791B2'],
    colorRace: '#6791B2',
    imageG: require('../Image/class-Race/class1.png'),
    yard: require('../Image/Yard1.png'),
    m: '2400m',
  },
  {
    id: 5,
    location: [0.0, 1.0],
    color: ['#DCDCDC', '#A8A8A8'],
    colorRace: '#A8A8A8',
    imageG: require('../Image/class-Race/class7.png'),
    yard: require('../Image/Yard.png'),
    m: '1200m',
  },
  {
    id: 6,
    location: [0.0, 1.0],
    color: ['#FFE32D', '#AB941E'],
    colorRace: '#AB941E',
    imageG: require('../Image/class-Race/class5.png'),
    yard: require('../Image/Yard.png'),
    m: '1200m',
  },
  {
    id: 7,
    location: [0.0, 1.0],
    color: ['#FF2D2D', '#AB1E1E'],
    colorRace: '#AB1E1E',
    imageG: require('../Image/class-Race/class6.png'),
    yard: require('../Image/Yard.png'),
    m: '1200m',
  },
  {
    id: 8,
    location: [0.0, 1.0],
    color: ['#E27808', '#B15D04'],
    colorRace: '#B15D04',
    imageG: require('../Image/class-Race/class2.png'),
    yard: require('../Image/Yard.png'),
    m: '1200m',
  },
  {
    id: 9,
    location: [0.0, 1.0],
    color: ['#E00283', '#A40060'],
    colorRace: '#A40060',
    imageG: require('../Image/class-Race/class3.png'),
    yard: require('../Image/Yard.png'),
    m: '1200m',
  },
  {
    id: 10,
    location: [0.0, 1.0],
    color: ['#92CAF9', '#6791B2'],
    colorRace: '#6791B2',
    imageG: require('../Image/class-Race/class2.png'),
    yard: require('../Image/Yard1.png'),
    m: '2400m',
  },
  {
    id: 11,
    location: [0.0, 1.0],
    color: ['#04C5AE', '#2185BD'],
    colorRace: '#2185BD',
    imageG: require('../Image/class-Race/class7.png'),
    yard: require('../Image/Yard1.png'),
    m: '2400m',
  },
  {
    id: 12,
    location: [0.0, 1.0],
    color: ['#992DFF', '#631EAB'],
    colorRace: '#631EAB',
    imageG: require('../Image/class-Race/class3.png'),
    yard: require('../Image/Yard1.png'),
    m: '2400m',
  },
];

export default function RaceList() {
  const navigation = useNavigation();

  return (
    <View style={{marginTop: 6}}>
      {races.map((race, i) => (
        <LinearGradient
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
          useAngle={true}
          angle={180}
          key={i}
          locations={[0.0, 0.001, 0.4635, 0.5104, 1.0]}
          colors={[
            'rgba(88, 88, 88, 0.5)',
            'rgba(88, 88, 88, 0.5)',
            'rgba(88, 88, 88, 0.5)',
            'rgba(56, 56, 56, 0.5)',
            'rgba(88, 88, 88, 0.5)',
          ]}
          style={styles.containerRace}>
          <LinearGradient
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}
            useAngle={true}
            angle={90}
            locations={race.location}
            colors={race.color}
            style={styles.numberRace}>
            <Text style={styles.txtNumber}>{race.id} RACE</Text>
            <View
              style={{
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderLeftWidth: 0,
                borderRightWidth: 20,
                borderBottomWidth: 26,
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: race.colorRace,
                display: 'flex',
                marginLeft: 10,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                display: 'flex',
                width: 80,
                marginLeft: 10,
              }}>
              <Text style={styles.text}>Take bets</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                display: 'flex',
                width: 189,
              }}>
              <ImageBackground source={race.yard} style={styles.yard}>
                <Text style={[styles.text, {fontSize: 12, lineHeight: 12}]}>
                  {race.m}
                </Text>
              </ImageBackground>
              <View style={styles.time}>
                <ImageBackground
                  source={require('../Image/time.png')}
                  style={styles.time}>
                  <Text></Text>
                </ImageBackground>
              </View>
            </View>
          </LinearGradient>
          <LinearGradient
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}
            useAngle={true}
            angle={180}
            locations={[0.0, 0.1615, 0.3385, 0.474, 0.8542, 1.0]}
            colors={['#FCFCFC', '#D0D0D0', '#F8F8F8', '#A4A4A4', '#5F5F5F', '#B3B3B3']}
            style={styles.containerBorder}>
            <LinearGradient
              start={{x: 0.0, y: 0.0}}
              end={{x: 0.0, y: 1.0}}
              useAngle={true}
              angle={180}
              locations={[0.0, 0.8787, 0.9054, 1.0]}
              colors={['#353C3E', '#959796', '#13191D', '#555B61']}
              style={styles.containerHorse}>
              <View style={styles.name}>
                <View style={styles.raceName}>
                  <View style={styles.raceCorse}>
                    <Tokyo />
                  </View>
                  <Text style={[styles.text, {marginLeft: 8}]}>
                    Karitekisuto race
                  </Text>
                </View>
                <ClassRace />
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
                <View style={styles.btn}>
                  <Image source={require('../Image/button.png')} />
                </View>
              </TouchableOpacity>
              {/* <Image source={race.imageG} />
            <Text style={styles.raceTxt}>Karitekisuto race</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                useAngle={true}
                angle={360}
                locations={[0.0, 0.4479, 0.4792, 1.0]}
                colors={['#EDC53A', '#B26F29', '#FFF873', '#DD9A09']}
                style={styles.betting}>
                <LinearTextGradient
                  style={styles.txtBetting}
                  locations={[-0.0937, 0.0259, 0.2196, 0.7323, 0.8576, 1]}
                  colors={[
                    '#FFAE00',
                    '#FED943',
                    '#FFF39F',
                    '#FFF39F',
                    '#F5D23E',
                    '#FFAE00',
                  ]}
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}>
                  <Text>Detail {'&'} betting</Text>
                </LinearTextGradient>
              </LinearGradient>
            </TouchableOpacity> */}
            </LinearGradient>
          </LinearGradient>
        </LinearGradient>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 78,
    height: 50,
    marginBottom: 12,
  },
  raceCorse: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 0,
    width: 49,
    height: 24,
    borderRadius: 4,
  },
  raceName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: (0, 8),
    width: 200,
    height: 24,
  },
  name: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 0,
    width: 258,
    height: 92,
    marginBottom: 10,
  },
  txtBetting: {
    width: 60,
    height: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 14,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    elevation: 4,
    textAlign: 'center',
  },
  betting: {
    alignItems: 'center',
    padding: (4, 0),
    width: 82,
    height: 36,
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex',
    borderColor: '#825D24',
    borderWidth: 0.5,
    borderRadius: 7,
    marginLeft: 20,
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
  },
  raceTxt: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    width: 178,
    height: 24,
    color: '#FFFFFF',
    alignItems: 'center',
    textAlign: 'center',
  },
  containerHorse: {
    width: 376,
    height: 120,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 4,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  containerBorder: {
    width: 378,
    height: 122,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  time: {
    width: 71,
    height: 22,
    padding: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  yard: {
    width: 62,
    height: 24,
    marginLeft: 13.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#FFFFFF',
  },
  txtNumber: {
    fontStyle: 'italic',
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: -0.25,
    fontWeight: 'bold',
    marginLeft: 6,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {height: 1, width: 1},
    textShadowRadius: 4,
    width: 60,
  },
  numberRace: {
    width: 80,
    height: 26,
    alignItems: 'flex-start',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    display: 'flex',
  },
  containerRace: {
    marginTop: 2,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 40,
    width: 376,
    height: 120,
    flexDirection: 'column',
    display: 'flex',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 0.5,
    borderColor: 'rgba(19, 0, 0, 0.25)',
  },
});
