import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import TextGradientSilver from '../reuse/TextGradientSilver';
import TextRace from './TextRace';

const Racing2D = [
  {
    id: 1,
    no: require('../Image/no1.png'),
    noList: null,
    horse: require('../Image/list-history/history1.png'),
    color: [
      '#ffcb00',
      '#fd6f01',
      '#ffa02b',
      '#ffe47d',
      '#ffa02b',
      '#fd6f01',
      '#ffcb00',
    ],
    name: 'Barnsley',
    stt: '#1',
    colorHorse: '#DA3217',
  },
  {
    id: 2,
    no: require('../Image/no2.png'),
    noList: null,
    horse: require('../Image/list-history/history2.png'),
    color: [
      '#dbdbdb',
      '#636363',
      '#8b8989',
      '#c9c9c9',
      '#8b8989',
      '#636363',
      '#dbdbdb',
    ],
    name: 'Stranraer',
    stt: '#2',
    colorHorse: '#241917',
  },
  {
    id: 3,
    no: require('../Image/no3.png'),
    noList: null,
    horse: require('../Image/list-history/history3.png'),
    color: [
      '#ca8453',
      '#84441f',
      '#d15e1c',
      '#f69258',
      '#d15e1c',
      '#84441f',
      '#ca8453',
    ],
    name: 'Stranraer',
    stt: '#3',
    colorHorse: '#81262B',
  },
  {
    id: 4,
    no: null,
    noList: '4th',
    horse: require('../Image/list-history/history4.png'),
    color: [
      '#525967',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#585F6C',
    ],
    name: 'Stranraer',
    stt: '#4',
    colorHorse: '#60AFDA',
  },
  {
    id: 5,
    no: null,
    noList: '5th',
    horse: require('../Image/list-history/history5.png'),
    color: [
      '#525967',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#585F6C',
    ],
    name: 'Derby',
    stt: '#5',
    colorHorse: '#F0B81B',
  },
  {
    id: 6,
    no: null,
    noList: '6th',
    horse: require('../Image/list-history/history6.png'),
    color: [
      '#525967',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#585F6C',
    ],
    name: 'Aston Villa',
    stt: '#6',
    colorHorse: '#126FB5',
  },
  {
    id: 7,
    no: null,
    noList: '7th',
    horse: require('../Image/list-history/history7.png'),
    color: [
      '#525967',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#585F6C',
    ],
    name: 'Platanias',
    stt: '#7',
    colorHorse: '#F1B9A8',
  },
  {
    id: 8,
    no: null,
    noList: '8th',
    horse: require('../Image/list-history/history8.png'),
    color: [
      '#525967',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#585F6C',
    ],
    name: 'Bury',
    stt: '#8',
    colorHorse: '#631E7B',
  },
  {
    id: 9,
    no: null,
    noList: '9th',
    horse: require('../Image/list-history/history9.png'),
    color: [
      '#525967',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#585F6C',
    ],
    name: 'Bordeaux',
    stt: '#9',
    colorHorse: '#093E8C',
  },
  {
    id: 10,
    no: null,
    noList: '10th',
    horse: require('../Image/list-history/history10.png'),
    color: [
      '#525967',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#585F6C',
    ],
    name: 'Accrington',
    stt: '#10',
    colorHorse: '#198472',
  },
  {
    id: 11,
    no: null,
    noList: '11th',
    horse: require('../Image/list-history/history11.png'),
    color: [
      '#525967',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#585F6C',
    ],
    name: 'Northampton',
    stt: '#11',
    colorHorse: '#2B853D',
  },
  {
    id: 12,
    no: null,
    noList: '12th',
    horse: require('../Image/list-history/history12.png'),
    color: [
      '#525967',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#AAAEB6',
      '#585F6C',
    ],
    name: 'Fleetwood',
    stt: '#12',
    colorHorse: '#202B61',
  },
];

export default function Live2D() {
  return (
    <View style={styles.container}>
      <View style={[styles.containerDivider]}>
        <View style={styles.horseNo}>
          <View style={styles.label}>
            <Text style={styles.OBTClass}>OBT Class1 T 3200</Text>
            <Text style={styles.roomClass}>Tokyo.Class1.TURF.3200m</Text>
          </View>
          {Racing2D.map(e => (
            <View style={styles.containerRace}>
              {e.no == null ? (
                e.noList == null ? null : (
                  <View style={styles.no}>
                    <View
                      style={[
                        styles.noList,
                        e.id < 10
                          ? {width: 18, height: 12}
                          : {width: 22, height: 12},
                      ]}>
                      <LinearTextGradient
                        start={{x: 0.0, y: 0.0}}
                        end={{x: 0.0, y: 1.0}}
                        useAngle={true}
                        angle={270}
                        locations={[0.0, 0.07, 0.34, 0.5, 0.66, 0.93, 1.0]}
                        colors={e.color}
                        style={[
                          styles.roomClass,
                          e.id < 10
                            ? {
                                width: 14,
                                height: 12,
                              }
                            : {
                                width: 18,
                                height: 12,
                              },
                        ]}>
                        <Text>{e.noList}</Text>
                      </LinearTextGradient>
                    </View>
                  </View>
                )
              ) : (
                <View style={styles.no}>
                  <Image source={e.no} />
                </View>
              )}
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                useAngle={true}
                angle={270}
                locations={[0.0, 0.7604]}
                colors={['rgba(20, 20, 20, 0)', '#1B1B1B']}
                style={styles.content}>
                <Image source={e.horse} style={{width: 13, height: 13}} />
                <LinearTextGradient
                  start={{x: 0.0, y: 0.0}}
                  end={{x: 0.0, y: 1.0}}
                  useAngle={true}
                  angle={270}
                  locations={[0.0, 0.07, 0.34, 0.5, 0.66, 0.93, 1.0]}
                  colors={e.color}
                  style={[
                    styles.roomClass,
                    {
                      width: 52,
                      height: 12,
                      marginLeft: 4,
                    },
                  ]}>
                  <Text>{e.name}</Text>
                </LinearTextGradient>
                <Text style={styles.noHorse}>{e.stt}</Text>
              </LinearGradient>
            </View>
          ))}
        </View>
        <View style={styles.dividerHorse}>
          <View style={styles.finish}>
            <Image
              source={require('../Image/finish.png')}
              style={{width: 239, height: 10}}
            />
            <Text style={[styles.noHorse, {color: '#FFFFFF', marginLeft: 8}]}>
              Finish
            </Text>
          </View>

          <View style={styles.containerHorse}>
            {Racing2D.map(e => (
              <View style={styles.horseColumn}>
                <View style={[styles.horse2D, {backgroundColor: e.colorHorse}]}>
                  <Text style={styles.txtHorse}>{e.id}</Text>
                </View>
              </View>
            ))}
            {/* <TextRace/> */}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtHorse: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 18,
    letterSpacing: 0.03,
    color: '#FFFFFF',
    width: 10,
    height: 18,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  horse2D: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    width: 18,
    height: 18,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 20, 30, 0.75)',
    borderRadius: 100,
  },
  horseColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 0,
    width: 18,
    height: 176,
  },
  containerHorse: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 0,
    width: 238,
    height: 176,
    marginTop: 10,
  },
  finish: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 280,
    height: 12,
  },
  dividerHorse: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 280,
    height: 196,
  },
  noHorse: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.02,
    color: '#E9E9E9',
    width: 20,
    height: 12,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: (0, 4, 0, 0),
    width: 94,
    height: 13,
    marginLeft: 4,
  },
  noList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    backgroundColor: 'rgba(0, 20, 30, 0.5)',
    borderRadius: 2,
    borderColor: '#AAAEB6',
    borderWidth: 0.3,
  },
  no: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 22,
    height: 12,
  },
  containerRace: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 120,
    height: 13,
  },
  roomClass: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 8,
    lineHeight: 12,
    letterSpacing: 0.02,
    color: '#FFFFFF',
    width: 106,
    height: 12,
  },
  OBTClass: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.03,
    color: '#FFFFFF',
    width: 119,
    height: 18,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 119,
    height: 28,
    marginBottom: 8,
  },
  horseNo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 0,
    width: 120,
    height: 200,
  },
  containerDivider: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    width: 400,
    height: 200,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 0,
    width: 400,
    height: 200,
  },
});
