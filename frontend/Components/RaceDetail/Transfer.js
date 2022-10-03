import React, {useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import {Dimensions} from 'react-native';
import KariRace from '../RaceDetail/KariRace'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const races = [
  {
    id: 1,
    location: [0.0, 1.0],
    color: ['#DCDCDC', '#A8A8A8'],
    colorRace: '#A8A8A8',
    imageG: require('../Image/g1.png'),
    yard: require('../Image/Yard.png'),
  },
  {
    id: 2,
    location: [0.0, 1.0],
    color: ['#04C5AE', '#2185BD'],
    colorRace: '#2185BD',
    imageG: require('../Image/g2.png'),
    yard: require('../Image/Yard1.png'),
  },
  {
    id: 3,
    location: [0.0, 1.0],
    color: ['#992DFF', '#631EAB'],
    colorRace: '#631EAB',
    imageG: require('../Image/g3.png'),
    yard: require('../Image/Yard1.png'),
  },
  {
    id: 4,
    location: [0.0, 1.0],
    color: ['#92CAF9', '#6791B2'],
    colorRace: '#6791B2',
    imageG: require('../Image/g2.png'),
    yard: require('../Image/Yard1.png'),
  },
  {
    id: 5,
    location: [0.0, 1.0],
    color: ['#DCDCDC', '#A8A8A8'],
    colorRace: '#A8A8A8',
    imageG: require('../Image/g1.png'),
    yard: require('../Image/Yard.png'),
  },
  {
    id: 6,
    location: [0.0, 1.0],
    color: ['#FFE32D', '#AB941E'],
    colorRace: '#AB941E',
    imageG: require('../Image/g3.png'),
    yard: require('../Image/Yard.png'),
  },
];

const races1 = [
  {
    id: 7,
    location: [0.0, 1.0],
    color: ['#FF2D2D', '#AB1E1E'],
    colorRace: '#AB1E1E',
    imageG: require('../Image/g2.png'),
    yard: require('../Image/Yard.png'),
  },
  {
    id: 8,
    location: [0.0, 1.0],
    color: ['#E27808', '#B15D04'],
    colorRace: '#B15D04',
    imageG: require('../Image/g2.png'),
    yard: require('../Image/Yard.png'),
  },
  {
    id: 9,
    location: [0.0, 1.0],
    color: ['#E00283', '#A40060'],
    colorRace: '#A40060',
    imageG: require('../Image/g1.png'),
    yard: require('../Image/Yard.png'),
  },
  {
    id: 10,
    location: [0.0, 1.0],
    color: ['#92CAF9', '#6791B2'],
    colorRace: '#6791B2',
    imageG: require('../Image/g3.png'),
    yard: require('../Image/Yard1.png'),
  },
  {
    id: 11,
    location: [0.0, 1.0],
    color: ['#04C5AE', '#2185BD'],
    colorRace: '#2185BD',
    imageG: require('../Image/g3.png'),
    yard: require('../Image/Yard1.png'),
  },
  {
    id: 12,
    location: [0.0, 1.0],
    color: ['#992DFF', '#631EAB'],
    colorRace: '#631EAB',
    imageG: require('../Image/g1.png'),
    yard: require('../Image/Yard1.png'),
  },
];

function Transfer() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../Image/bg-betting.png')}
        resizeMode="cover"
        style={styles.image}>
        <ScrollView>
          <View style={styles.containerLive}>
            <Image
              source={require('../Image/live-race.png')}
              style={styles.live}
            />
          </View>
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
              height: 130,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
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
                style={{flex: 1, width: 64, alignItems: 'flex-start'}}>
                <Image
                  source={require('../Image/icon-left.png')}
                  style={{margin: 2, marginLeft: 4}}
                />
              </ImageBackground>
              <LinearTextGradient
                locations={[0.0, 0.2917, 0.4635, 0.5417, 0.7656, 1.0]}
                colors={[
                  '#FFAE00',
                  '#FED943',
                  '#FFF39F',
                  '#FFF39F',
                  '#F5D23E',
                  '#FFAE00',
                ]}
                angle={360}
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                style={styles.txtBet}>
                <Text>Take bets</Text>
              </LinearTextGradient>
              <View
                style={{
                  marginBottom: 4,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={require('../Image/Yard1.png')} />
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
                  flex: 1,
                  width: 64,
                  alignItems: 'center',
                  marginLeft: 4,
                }}>
                <Image
                  source={require('../Image/icon-right.png')}
                  style={{margin: 2, marginLeft: 4}}
                />
              </ImageBackground>
            </LinearGradient>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
              <Text style={styles.txtNumber}>12/12</Text>
              <Image
                source={require('../Image/horse.png')}
                style={{
                  marginLeft: 3,
                }}
              />
            </View>
            <View style={{flexDirection: 'row',}}>
              <View style={{width: 270, marginLeft: 30, height: 50, alignItems: 'center'}}>
                <Text style={styles.txt}>Karitekisuto race</Text>
              </View>
              <Image
                source={require('../Image/stop.png')}
                style={{
                  borderColor: '#DD9A09',
                  borderWidth: 1,
                  borderRadius: 100,
                  marginTop: -20
                }}
              />
            </View>
          </View>
          <KariRace/>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Transfer;

const styles = StyleSheet.create({
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
    width: 104,
    height: 27,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 27,
    display: 'flex',
    alignItems: 'flex-start',
    marginRight: 24,
  },
  takeBet: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    width: 428,
    height: 32,
    left: 0,
    top: 0.45,
    borderColor: 'rgba(19, 0, 0, 0.25)',
    borderWidth: 0.5,
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
    height: '100%',
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
