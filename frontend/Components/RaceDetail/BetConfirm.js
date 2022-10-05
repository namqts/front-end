import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

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
    qua: 30,
  },
  {
    id: 3,
    image: require('../Image/List-horse/horseRed.png'),
    name: 'B. Beats',
    odds: '4.30',
    background: 'rgba(0, 21, 30, 0.5)',
    qua: 22,
  },
];

function BetConfirm() {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.uid}>
          <View style={{width: 34, height: 16}}>
            <Text style={styles.txtTitle}>UID :</Text>
          </View>
          <View style={{width: 76, height: 24, marginLeft: 8}}>
            <Text style={styles.txtDes}>betting001</Text>
          </View>
        </View>
        <View style={styles.credit}>
          <View style={{width: 110, height: 16}}>
            <Text style={styles.txtTitle}>Current credit :</Text>
          </View>
          <View
            style={{
              width: 90,
              height: 24,
              marginLeft: 8,
              flexDirection: 'row',
            }}>
            <Image source={require('../Image/Coincoin.png')} />
            <Text style={styles.txtDes}> 10,000.138</Text>
          </View>
        </View>
      </View>
      <View style={{height: 30}}></View>
      <ScrollView>
        <View style={styles.containerInfo}>
          <View style={styles.containerInfoRace}>
            <View style={styles.labelRace}>
              <Text style={styles.txtRace}>1Race</Text>
            </View>
            <View style={styles.layoutRace}>
              <View style={styles.layoutTansho}>
                <Text style={styles.txtTitle}>Tansho :</Text>
              </View>
              <View style={styles.tableTansho}>
                <View style={styles.ContainerTable}>
                  <View style={styles.header1}>
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
                      <View style={styles.no}>
                        <Text style={styles.txtTable}>No.</Text>
                      </View>
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
                      <View style={styles.name}>
                        <Text style={styles.txtTable}>Horse name</Text>
                      </View>
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
                      <View style={styles.career}>
                        <Text style={styles.txtTable}>Odds</Text>
                      </View>
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
                      <View style={styles.act}>
                        <Text style={styles.txtTable}>Qua.</Text>
                      </View>
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default BetConfirm;

const styles = StyleSheet.create({
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
    width: 114,
    height: 45,
    justifyContent: 'center',
    borderTopRightRadius: 7,
    backgroundColor: 'rgba(0, 20, 30, 0.75)',
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
    backgroundColor: 'rgba(0, 20, 30, 0.75)',
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
    backgroundColor: 'rgba(0, 20, 30, 0.75)',
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
    backgroundColor: 'rgba(0, 20, 30, 0.75)',
  },
  header1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    width: 392,
    height: 48,
  },
  ContainerTable: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 392,
    height: 204,
    borderRadius: 10,
  },
  no: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: (12, 8),
    width: 44,
    height: 48,
    backgroundColor: 'rgba(0, 20, 30, 0.75)',
    borderTopLeftRadius: 7,
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 0,
    width: 396,
    height: 48,
  },
  tableTansho: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 396,
    height: 204,
    marginTop: -150
  },
  layoutTansho: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 396,
    height: 228,
    borderRadius: 9,
  },
  layoutRace: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: (8, 16, 16),
    width: 428,
    height: 496,
    backgroundColor: 'rgba(223, 230, 233, 0.25)',
  },
  txtRace: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
  },
  labelRace: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 16,
    paddingTop: 8,
    width: 428,
    height: 38,
    backgroundColor: 'rgba(0, 20, 30, 0.5)',
  },
  containerInfoRace: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 428,
    height: 534,
  },
  containerInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 428,
    height: 1214,
  },
  credit: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 0,
    width: 210,
    height: 24,
    marginRight: 16,
  },
  txtDes: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    color: '#00CDEC',
  },
  txtTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    color: '#C5C5C5',
  },
  uid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 118,
    height: 24,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: (0, 16),
    width: 428,
    height: 24,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    position: 'absolute',
    width: 428,
    height: 926,
  },
});
