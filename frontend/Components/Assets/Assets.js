import React, {useState} from 'react';
import {useMoralis} from 'react-moralis';
import useERC20Balance from '../../hooks/useERC20balance';
import {
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import NativeBalance from './NativeBalance';
import ERC20Balance from './ERC20Balance';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUniversity} from '@fortawesome/free-solid-svg-icons';
import {Card} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';
import RaceList from './Race';
import GradientSilver from '../reuse/GradientSilver';
import Live2D from '../Live/Live2D';

export default function Assets() {
  const {Moralis} = useMoralis();
  // const nativeName = useMemo(() => getNativeByChain(options?.chain || chainId), [options, chainId]);
  const [isOpen, setIsOpen] = useState(true);
  const [bg2D, setBg2D] = useState(true);

  return (
    <SafeAreaView style={[StyleSheet.absoluteFill, styles.container]}>
      <StatusBar translucent backgroundColor="rgb(53, 60, 62)" />
      <ScrollView>
        {/* <LinearGradient
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 0.0, y: 1.0 }}
          useAngle={true}
          angle={180}
          locations={[0.0, 0.1615, 0.6426, 0.6927, 0.9615, 1.0]}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={['#F8F8F8', '#B5B4B4', '#F1F1F1', '#504F4F', '#A7A7A7', '#D0D0D0']}>
          <View style={styles.viewContainer}>
            <Image style={styles.live} source={require('../Image/live.png')} />

            <Text style={styles.chainText} category="c2">
            Ethereum
          </Text>
          <NativeBalance chain="0x1" />
          <ERC20Balance></ERC20Balance>
          <Text style={styles.chainText} category="c2">
            Binance Smart Chain
          </Text>
          <NativeBalance chain="0x38" />
          <ERC20Balance chain="0x38"></ERC20Balance>
          <Text style={styles.chainText} category="c2">
            Polygon Chain
          </Text>
          <NativeBalance chain="0x89" />
          <ERC20Balance chain="0x89"></ERC20Balance>
          </View>
        </LinearGradient> */}
        <GradientSilver style={styles.border}>
          <View style={styles.viewContainer}>
            {isOpen ? (
              <ImageBackground
                style={styles.live}
                source={require('../Image/live.png')}
              />
            ) : (
              <ImageBackground
                source={bg2D ? require('../Image/grass.png') : require('../Image/soil.png')}
                style={styles.container2D}>
                <TouchableOpacity onPress={() => setBg2D(!bg2D)}>
                  <Live2D />
                </TouchableOpacity>
              </ImageBackground>
            )}
            <View style={styles.containerButton}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                useAngle={true}
                angle={180}
                locations={[0.0, 1.0]}
                colors={['#FF2D2D', '#AB1E1E']}
                style={[
                  styles.buttonLive,
                  isOpen ? {width: 31, height: 18} : {width: 22, height: 18},
                ]}>
                {isOpen ? (
                  <Text style={[styles.txtlive, {width: 23, height: 14}]}>
                    LIVE
                  </Text>
                ) : (
                  <Text
                    style={[
                      styles.txtlive,
                      {width: 18, height: 14, marginLeft: -2},
                    ]}>
                    2D
                  </Text>
                )}
              </LinearGradient>
              <View style={styles.containerButtonLive}>
                <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                  <View style={[styles.button2D, {marginBottom: 8}]}>
                    {isOpen ? (
                      <Text style={styles.txt2D}>2D</Text>
                    ) : (
                      <Text style={styles.txt2DLive}>Live</Text>
                    )}
                  </View>
                </TouchableOpacity>
                <View style={styles.button2D}>
                  <Image
                    source={require('../Image/screenMorr.png')}
                    style={{width: 20, height: 20}}
                    tintColor="#FFFFFF"
                  />
                </View>
              </View>
            </View>
          </View>
        </GradientSilver>
        <View style={styles.textRun}>
          <Image source={require('../Image/Noti.png')} />
        </View>
        <RaceList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container2D: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 8,
    width: 409,
    height: 216,
    borderRadius: 5,
    overflow: 'hidden',
  },
  txt2DLive: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#FFFFFF',
    width: 29,
    height: 24,
    textAlign: 'center',
  },
  txt2D: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#FFFFFF',
    width: 20,
    height: 24,
    textAlign: 'center',
  },
  button2D: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    width: 40,
    height: 40,
    backgroundColor: 'rgba(223, 230, 233, 0.25)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(223, 230, 233, 0.25)',
    borderRadius: 100,
  },
  containerButtonLive: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 40,
    height: 88,
  },
  txtlive: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 14,
    textAlign: 'center',
    letterSpacing: 0.02,
    color: '#FFFFFF',
  },
  buttonLive: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 4,
    paddingTop: 2,
    borderRadius: 3,
  },
  containerButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 0,
    width: 40,
    height: 202,
    zIndex: 1,
    marginTop: -208,
    marginLeft: 360,
  },
  textRun: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 428,
    height: 55,
    backgroundColor: '#000',
    shadowColor: '#000000',
    shadowRadius: (0, 1, 4),
  },
  live: {
    width: 409,
    height: 217,
    marginTop: -1,
    resizeMode: 'stretch',
    overflow: 'hidden',
    borderRadius: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },

  viewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 410,
    height: 216,
    borderRadius: 5,
  },

  border: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 1,
    width: 412,
    height: 218,
    borderRadius: 6,
  },
});
