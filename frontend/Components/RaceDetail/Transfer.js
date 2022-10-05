import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import {Dimensions} from 'react-native';
import KariRace from '../RaceDetail/KariRace';
import Tokyo from '../reuse/tokyo';
import ClassRace from '../reuse/classRace';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const races = [
  {
    id: 1,
    location: [0.0, 1.0],
    color: ['#DCDCDC', '#A8A8A8'],
    colorRace: '#A8A8A8',
    imageG: require('../Image/class-Race/class7.png'),
    yard: require('../Image/Yard.png'),
  },
  {
    id: 2,
    location: [0.0, 1.0],
    color: ['#04C5AE', '#2185BD'],
    colorRace: '#2185BD',
    imageG: require('../Image/class-Race/class7.png'),
    yard: require('../Image/Yard1.png'),
  },
  {
    id: 3,
    location: [0.0, 1.0],
    color: ['#992DFF', '#631EAB'],
    colorRace: '#631EAB',
    imageG: require('../Image/class-Race/class1.png'),
    yard: require('../Image/Yard1.png'),
  },
  {
    id: 4,
    location: [0.0, 1.0],
    color: ['#92CAF9', '#6791B2'],
    colorRace: '#6791B2',
    imageG: require('../Image/class-Race/class5.png'),
    yard: require('../Image/Yard1.png'),
  },
  {
    id: 5,
    location: [0.0, 1.0],
    color: ['#DCDCDC', '#A8A8A8'],
    colorRace: '#A8A8A8',
    imageG: require('../Image/class-Race/class2.png'),
    yard: require('../Image/Yard.png'),
  },
  {
    id: 6,
    location: [0.0, 1.0],
    color: ['#FFE32D', '#AB941E'],
    colorRace: '#AB941E',
    imageG: require('../Image/class-Race/class3.png'),
    yard: require('../Image/Yard.png'),
  },
];

const races1 = [
  {
    id: 7,
    location: [0.0, 1.0],
    color: ['#FF2D2D', '#AB1E1E'],
    colorRace: '#AB1E1E',
    imageG: require('../Image/class-Race/class2.png'),
    yard: require('../Image/Yard.png'),
  },
  {
    id: 8,
    location: [0.0, 1.0],
    color: ['#E27808', '#B15D04'],
    colorRace: '#B15D04',
    imageG: require('../Image/class-Race/class1.png'),
    yard: require('../Image/Yard.png'),
  },
  {
    id: 9,
    location: [0.0, 1.0],
    color: ['#E00283', '#A40060'],
    colorRace: '#A40060',
    imageG: require('../Image/class-Race/class5.png'),
    yard: require('../Image/Yard.png'),
  },
  {
    id: 10,
    location: [0.0, 1.0],
    color: ['#92CAF9', '#6791B2'],
    colorRace: '#6791B2',
    imageG: require('../Image/class-Race/class3.png'),
    yard: require('../Image/Yard1.png'),
  },
  {
    id: 11,
    location: [0.0, 1.0],
    color: ['#04C5AE', '#2185BD'],
    colorRace: '#2185BD',
    imageG: require('../Image/class-Race/class6.png'),
    yard: require('../Image/Yard1.png'),
  },
  {
    id: 12,
    location: [0.0, 1.0],
    color: ['#992DFF', '#631EAB'],
    colorRace: '#631EAB',
    imageG: require('../Image/class-Race/class2.png'),
    yard: require('../Image/Yard1.png'),
  },
];

function Transfer() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {isOpen ? (
          <View style={styles.containerLive}>
            <Image
              source={require('../Image/live-race.png')}
              style={styles.live}
            />
          </View>
        ) : null}
        <Image source={require('../Image/Noti.png')} style={{marginTop: 4}} />
        <LinearGradient
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
          useAngle={true}
          angle={180}
          locations={[0.0, 0.8787, 0.9054, 1.0]}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['#35383E', '#818796', '#13191D', '#555B61']}
          style={styles.raceContainer}>
          {races.map((race, i) => (
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
                  borderColor: '#B5B4B4',
                  borderBottomWidth: 1,
                }}>
                <View
                  style={{
                    width: 0,
                    height: 0,
                    borderStyle: 'solid',
                    borderLeftWidth: 0,
                    borderRightWidth: 16,
                    borderBottomWidth: 23,
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderBottomColor: race.colorRace,
                    display: 'flex',
                    zIndex: 1,
                    marginLeft: 13.6,
                  }}
                />
              </View>
            </LinearGradient>
          ))}

          <View style={styles.races1}>
            {races1.map((race, i) => (
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
                    borderColor: '#B5B4B4',
                    borderBottomWidth: 1,
                  }}>
                  <View
                    style={{
                      width: 0,
                      height: 0,
                      borderStyle: 'solid',
                      borderLeftWidth: 0,
                      borderRightWidth: 16,
                      borderBottomWidth: 24,
                      borderLeftColor: 'transparent',
                      borderRightColor: 'transparent',
                      borderBottomColor: race.colorRace,
                      marginLeft: 7,
                    }}
                  />
                </View>
              </LinearGradient>
            ))}
          </View>
        </LinearGradient>
        <View
          style={{
            width: screenWidth,
            height: 40,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <LinearGradient
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}
            useAngle={true}
            angle={180}
            locations={[0.0, 0.01, 0.4635, 0.5104, 1.0]}
            angleCenter={{x: 0.5, y: 0.5}}
            colors={[
              'rgba(88, 88, 88, 0.5)',
              'rgba(88, 88, 88, 0.5)',
              'rgba(88, 88, 88, 0.5)',
              'rgba(56, 56, 56, 0.5)',
              'rgba(88, 88, 88, 0.5)',
            ]}
            style={styles.takeBet}>
            <ImageBackground
              source={require('../Image/Rec-left.png')}
              style={{
                width: 64,
                marginTop: 4,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}>
              <Image
                source={require('../Image/icon-left.png')}
                style={{margin: 2, marginLeft: 4}}
              />
            </ImageBackground>
            <Text style={styles.txtBet}>Take bets</Text>
            <View
              style={{
                marginBottom: 4,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={require('../Image/Yard1.png')}
                style={{
                  width: 62,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 20,
                  height: 24,
                }}>
                <Text style={[styles.txtBet, {fontSize: 12, lineHeight: 12}]}>
                  2400m
                </Text>
              </ImageBackground>
              <Image
                source={require('../Image/time.png')}
                style={{
                  borderWidth: 0.5,
                  borderColor: '#D0D0D0',
                }}
              />
            </View>
            <ImageBackground
              source={require('../Image/Rec-right.png')}
              style={{
                width: 64,
                alignItems: 'flex-end',
                marginRight: 16,
              }}>
              <Image
                source={require('../Image/icon-right.png')}
                style={{margin: 2, marginLeft: 4}}
              />
            </ImageBackground>
          </LinearGradient>
        </View>
        <View style={styles.title}>
          <View style={styles.CtnName}>
            <View style={styles.ctnTitle}>
              <View style={styles.room}>
                <Tokyo />
              </View>
              <View style={styles.name}>
                <Text style={[styles.text]}>Karitekisuto race</Text>
                <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                  {isOpen ? (
                    <Image
                      source={require('../Image/stop.png')}
                      style={{marginLeft: 20}}
                    />
                  ) : (
                    <Image
                      source={require('../Image/start.png')}
                      style={{marginLeft: 20}}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <ClassRace />
          </View>
        </View>
        <KariRace />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Transfer;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.02,
    color: '#FFFFFF',
    width: 209,
    height: 28,
    marginLeft: 20,
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    padding: 0,
    width: 230,
    height: 28,
  },
  room: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 74,
    height: 24,
    backgroundColor: 'rgba(0, 20, 30, 0.5)',
    borderRadius: 4,
  },
  ctnTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    width: 209,
    height: 56,
  },
  CtnName: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    width: 226,
    height: 144,
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: (8, 0),
    width: 428,
    height: 160,
  },
  txt: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.02,
    color: '#fff',
  },
  txtBet: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.02,
    display: 'flex',
    alignItems: 'flex-start',
    color: '#fff',
  },
  takeBet: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    padding: (4, 80, 0),
    width: 428,
    height: 32,
    left: 0,
    top: -1.5,
    borderColor: 'rgba(19, 0, 0, 0.25)',
    borderWidth: 0.5,
    shadowColor: '#000',
  },
  races1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: -370,
    marginTop: 35,
    borderColor: '#B5B4B4',
    borderBottomWidth: 1,
  },
  race: {
    width: 420,
    height: 95.85,
  },
  txtNumber: {
    fontStyle: 'italic',
    fontSize: 12,
    lineHeight: 26,
    letterSpacing: -0.25,
    fontWeight: 'bold',
    marginLeft: 6,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {height: 1, width: 1},
    textShadowRadius: 4,
  },
  numberRace: {
    width: 62,
    height: 24,
    alignItems: 'flex-start',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    display: 'flex',
    borderColor: '#B5B4B4',
    borderBottomWidth: 1,
  },
  raceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: (12, 0, 16),
    width: '100%',
    height: 95.85,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    marginTop: 20,
    width: '100%',
  },
  containerLive: {
    flex: 1,
    width: 428,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  live: {
    width: 411,
    height: 210,
    resizeMode: 'cover',
    borderRadius: 2,
    borderColor: '#D0D0D0',
    borderWidth: 1,
  },
});
