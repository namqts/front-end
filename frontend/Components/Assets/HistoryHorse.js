import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {Divider} from 'react-native-paper';
import {LinearTextGradient} from 'react-native-text-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';
import Tokyo from '../reuse/tokyo';

const listHorse = [
  {
    id: 1,
    stt: '#8',
    logo: require('../Image/list-history/history1.png'),
    name: 'Eleanor Pena',
    time: '02:39:597',
    rank: require('../Image/list-rank/rank1st.png'),
    gender: require('../Image/women.png'),
    bloodline: 'Jacob Jones',
    exp: 3,
    prize: '3.6',
    owner: '0xda8e8787844xjs799b',
    detail: [
      {
        id: 1,
        blood: 'Eleanor Pena',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%',
        speed: 'A',
        processSpeed: 0.2,
        muscle: 'S',
        processMuscle: 0.8,
        stamina: 'AAA',
        processStamina: 0.6,
        accuracy: 'AA',
        processAccuracy: 0.4,
        spirit: 'SS',
        processSpirit: 1,
        IQ: 'A',
        processIQ: 0.2
      },
    ]
  },
  {
    id: 2,
    stt: '#6',
    logo: require('../Image/list-history/history2.png'),
    name: 'Arlene McCoy',
    time: '02:40:125',
    rank: require('../Image/list-rank/rank2st.png'),
    gender: require('../Image/man.png'),
    bloodline: 'Jerome Bell',
    exp: 2,
    prize: '2.2',
    owner: '0xda8e8787844xjs799b',
    detail: [
      {
        id: 1,
        blood: 'Arlene McCoy',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%',
        speed: 'A',
        processSpeed: 0.2,
        muscle: 'S',
        processMuscle: 0.8,
        stamina: 'AAA',
        processStamina: 0.6,
        accuracy: 'AA',
        processAccuracy: 0.4,
        spirit: 'SS',
        processSpirit: 1,
        IQ: 'A',
        processIQ: 0.2
      },
    ]
  },
  {
    id: 3,
    stt: '#5',
    logo: require('../Image/list-history/history3.png'),
    name: 'Kathryn Murphy',
    time: '02:42:689',
    rank: require('../Image/list-rank/rank3st.png'),
    gender: require('../Image/women.png'),
    bloodline: 'Eleanor Pena',
    exp: 1,
    prize: '1.6',
    owner: '0xda8e8787844xjs799b',
    detail: [
      {
        id: 3,
        blood: 'Kathryn Murphy',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%',
        speed: 'A',
        processSpeed: 0.2,
        muscle: 'SS',
        processMuscle: 1,
        stamina: 'AA',
        processStamina: 0.4,
        accuracy: 'AA',
        processAccuracy: 0.4,
        spirit: 'SS',
        processSpirit: 1,
        IQ: 'A',
        processIQ: 0.2
      },
    ],
  },
  {
    id: 4,
    stt: '#9',
    logo: require('../Image/list-history/history4.png'),
    name: 'Courtney Henry',
    time: '02:43:485',
    rank: require('../Image/list-rank/rank4th.png'),
    gender: require('../Image/man.png'),
    bloodline: 'Robert Fox',
    exp: 0,
    prize: '0',
    owner: '0xda8e8787844xjs799b',
    detail: [
      {
        id: 4,
        blood: 'Courtney Henry',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%',
        speed: 'A',
        processSpeed: 0.2,
        muscle: 'S',
        processMuscle: 0.8,
        stamina: 'AAA',
        processStamina: 0.6,
        accuracy: 'AA',
        processAccuracy: 0.4,
        spirit: 'SS',
        processSpirit: 1,
        IQ: 'S',
        processIQ: 0.8
      },
    ],
  },
  {
    id: 5,
    stt: '#11',
    logo: require('../Image/list-history/history5.png'),
    name: 'Jerome Bell',
    time: '02:46:185',
    rank: require('../Image/list-rank/rank5th.png'),
    gender: require('../Image/man.png'),
    bloodline: 'Kristin Watson',
    exp: 0,
    prize: '0',
    owner: '0xda8e8787844xjs799b',
    detail: [
      {
        id: 4,
        blood: 'Jerome Bell',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%',
        speed: 'A',
        processSpeed: 0.2,
        muscle: 'S',
        processMuscle: 0.8,
        stamina: 'AAA',
        processStamina: 0.6,
        accuracy: 'AA',
        processAccuracy: 0.4,
        spirit: 'SS',
        processSpirit: 1,
        IQ: 'S',
        processIQ: 0.8
      },
    ],
  },
  {
    id: 6,
    stt: '#12',
    logo: require('../Image/list-history/history6.png'),
    name: 'Ronald Richards',
    time: '02:46:189',
    rank: require('../Image/list-rank/rank6th.png'),
    gender: require('../Image/women.png'),
    bloodline: 'Devon Lane',
    exp: 0,
    prize: '0',
    owner: '0xda8e8787844xjs799b',
    detail: [
      {
        id: 4,
        blood: 'Jerome Bell',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%',
        speed: 'A',
        processSpeed: 0.2,
        muscle: 'S',
        processMuscle: 0.8,
        stamina: 'AAA',
        processStamina: 0.6,
        accuracy: 'AA',
        processAccuracy: 0.4,
        spirit: 'SS',
        processSpirit: 1,
        IQ: 'S',
        processIQ: 0.8
      },
    ],
  },
  {
    id: 7,
    stt: '#3',
    logo: require('../Image/list-history/history7.png'),
    name: 'Bessie Cooper',
    time: '02:47:585',
    rank: require('../Image/list-rank/rank7th.png'),
    gender: require('../Image/women.png'),
    bloodline: 'Jane Cooper',
    exp: 0,
    prize: '0',
    owner: '0xda8e8787844xjs799b',
    detail: [
      {
        id: 4,
        blood: 'Jerome Bell',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%',
        speed: 'A',
        processSpeed: 0.2,
        muscle: 'S',
        processMuscle: 0.8,
        stamina: 'AAA',
        processStamina: 0.6,
        accuracy: 'AA',
        processAccuracy: 0.4,
        spirit: 'SS',
        processSpirit: 1,
        IQ: 'S',
        processIQ: 0.8
      },
    ],
  },
  {
    id: 8,
    stt: '#2',
    logo: require('../Image/list-history/history8.png'),
    name: 'Marvin McKinney',
    time: '02:48:148',
    rank: require('../Image/list-rank/rank8th.png'),
    gender: require('../Image/man.png'),
    bloodline: 'Guy Hawkins',
    exp: 0,
    prize: '0',
    owner: '0xda8e8787844xjs799b',
    detail: [
      {
        id: 4,
        blood: 'Jerome Bell',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%',
        speed: 'A',
        processSpeed: 0.2,
        muscle: 'S',
        processMuscle: 0.8,
        stamina: 'AAA',
        processStamina: 0.6,
        accuracy: 'AA',
        processAccuracy: 0.4,
        spirit: 'SS',
        processSpirit: 1,
        IQ: 'S',
        processIQ: 0.8
      },
    ],
  },
  {
    id: 9,
    stt: '#2',
    logo: require('../Image/list-history/history9.png'),
    name: 'Marvin McKinney',
    time: '02:48:148',
    rank: require('../Image/list-rank/rank9th.png'),
    gender: require('../Image/man.png'),
    bloodline: 'Guy Hawkins',
    exp: 0,
    prize: '0',
    owner: '0xda8e8787844xjs799b',
    detail: [
      {
        id: 4,
        blood: 'Jerome Bell',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%',
        speed: 'A',
        processSpeed: 0.2,
        muscle: 'S',
        processMuscle: 0.8,
        stamina: 'AAA',
        processStamina: 0.6,
        accuracy: 'AA',
        processAccuracy: 0.4,
        spirit: 'SS',
        processSpirit: 1,
        IQ: 'S',
        processIQ: 0.8
      },
    ],
  },
  {
    id: 10,
    stt: '#2',
    logo: require('../Image/list-history/history10.png'),
    name: 'Marvin McKinney',
    time: '02:48:148',
    rank: require('../Image/list-rank/rank10th.png'),
    gender: require('../Image/man.png'),
    bloodline: 'Guy Hawkins',
    exp: 0,
    prize: '0',
    owner: '0xda8e8787844xjs799b',
    detail: [
      {
        id: 4,
        blood: 'Jerome Bell',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%',
        speed: 'A',
        processSpeed: 0.2,
        muscle: 'S',
        processMuscle: 0.8,
        stamina: 'AAA',
        processStamina: 0.6,
        accuracy: 'AA',
        processAccuracy: 0.4,
        spirit: 'SS',
        processSpirit: 1,
        IQ: 'S',
        processIQ: 0.8
      },
    ],
  },
  {
    id: 11,
    stt: '#2',
    logo: require('../Image/list-history/history11.png'),
    name: 'Marvin McKinney',
    time: '02:48:148',
    rank: require('../Image/list-rank/rank11th.png'),
    gender: require('../Image/man.png'),
    bloodline: 'Guy Hawkins',
    exp: 0,
    prize: '0',
    owner: '0xda8e8787844xjs799b',
    detail: [
      {
        id: 4,
        blood: 'Jerome Bell',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%',
        speed: 'A',
        processSpeed: 0.2,
        muscle: 'S',
        processMuscle: 0.8,
        stamina: 'AAA',
        processStamina: 0.6,
        accuracy: 'AA',
        processAccuracy: 0.4,
        spirit: 'SS',
        processSpirit: 1,
        IQ: 'S',
        processIQ: 0.8
      },
    ],
  },
  {
    id: 12,
    stt: '#2',
    logo: require('../Image/list-history/history12.png'),
    name: 'Marvin McKinney',
    time: '02:48:148',
    rank: require('../Image/list-rank/rank12th.png'),
    gender: require('../Image/man.png'),
    bloodline: 'Guy Hawkins',
    exp: 0,
    prize: '0',
    owner: '0xda8e8787844xjs799b',
    detail: [
      {
        id: 4,
        blood: 'Jerome Bell',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%',
        speed: 'A',
        processSpeed: 0.2,
        muscle: 'S',
        processMuscle: 0.8,
        stamina: 'AAA',
        processStamina: 0.6,
        accuracy: 'AA',
        processAccuracy: 0.4,
        spirit: 'SS',
        processSpirit: 1,
        IQ: 'S',
        processIQ: 0.8
      },
    ],
  },
];

export default function HistoryHorse(props) {
  const [isOpen, setIsOpen] = useState(false);
  const route = useRoute();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        {!isOpen ? (
          <View
            style={[styles.containerRecord, !isOpen ? {marginTop: 30} : null]}>
            <View style={styles.record}>
              <Image
                source={require('../Image/record.png')}
                style={{width: 412, height: 240}}
              />
            </View>
            <View style={styles.resultCard}>
              <View style={styles.layoutTopRecord}>
                <Text style={styles.dateTime}>
                  {route.params.data.dateTime}
                </Text>
                <View style={styles.grass}>
                  <Text style={[styles.dateTime, {color: '#FFFFFF'}]}>
                    Grass {''} {route.params.data.grass}
                  </Text>
                </View>
              </View>
              <View style={styles.raceName}>
                <View style={[styles.grass, {width: 57, height: 24}]}>
                  <Tokyo />
                </View>
                <Text
                  style={[styles.dateTime, {color: '#FFFFFF', marginLeft: 8}]}>
                  {route.params.data.server}
                </Text>
              </View>
              <View style={styles.layoutBottom}>
                <Image source={route.params.data.class} />
                <View style={styles.layoutButtomLeft}>
                  <View style={styles.field}>
                    <Text style={styles.titleBottom}>Field type:</Text>
                    <Text
                      style={[
                        styles.titleBottom,
                        {fontWeight: '700', color: '#F2F2F2'},
                      ]}>
                      {route.params.data.fieldType}
                    </Text>
                  </View>
                  <View style={styles.fieldFee}>
                    <Text style={styles.titleBottom}>Entry fee:</Text>
                    <Text
                      style={[
                        styles.titleBottom,
                        {fontWeight: '700', color: '#00CDEC'},
                      ]}>
                      {route.params.data.entryFee}
                    </Text>
                  </View>
                  <View style={styles.fieldPrize}>
                    <Text style={styles.titleBottom}>Prize:</Text>
                    <View style={styles.prizeRecord}>
                      <Text
                        style={[
                          styles.titleBottom,
                          {fontWeight: '700', color: '#FF9900'},
                        ]}>
                        {route.params.data.prize}
                      </Text>
                      <Image source={require('../Image/Coincoin.png')} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ) : null}
        <View style={styles.containerScroll}>
          <View
            style={[
              styles.layoutTop,
              isOpen ? {marginTop: 30} : {marginTop: 16},
            ]}>
            <Text style={styles.label}>Finished race</Text>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <View style={styles.shadow}>
                  <Image
                    source={require('../Image/view-record.png')}
                    style={{width: 121, height: 38}}
                  />
                </View>
              ) : (
                <View style={styles.shadow}>
                  <Image
                    source={require('../Image/closeRecord.png')}
                    style={{width: 121, height: 38}}
                  />
                </View>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.tableHorse}>
            {listHorse.map(item => (
              item.detail.map(e => (
              <TouchableOpacity onPress={() => navigation.navigate('HorseDetail', {data: e})}>
                <View style={styles.cardHorse}>
                  <View style={styles.cardTop}>
                    <View style={styles.stt}>
                      <Text style={styles.txt}>{item.stt}</Text>
                    </View>
                    <View style={styles.InfoHorse}>
                      <Image source={item.logo} />
                      <Text
                        style={[styles.txt, {color: '#FFFFFF', marginLeft: 8}]}>
                        {item.name}
                      </Text>
                    </View>
                    <View style={styles.topLeft}>
                      <Text style={styles.txt}>{item.time}</Text>
                      <View style={styles.rank}>
                        <Image source={item.rank} />
                      </View>
                    </View>
                  </View>
                  <View style={styles.bottomHorse}>
                    <View style={styles.bloodline}>
                      <Text style={styles.txtTitle}>Bloodline:</Text>
                      <View style={styles.gender}>
                        <Image source={item.gender} />
                        <Text
                          style={[
                            styles.txt,
                            {
                              fontWeight: '700',
                              color: '#FFFFFF',
                              marginLeft: 2,
                              width: 88,
                              height: 24,
                            },
                          ]}
                          ellipsizeMode={'tail'}
                          numberOfLines={1}>
                          {item.bloodline}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.exp}>
                      <Text style={styles.txtTitle}>EXP:</Text>
                      <View style={styles.gender}>
                        <Text
                          style={[
                            styles.txt,
                            {
                              fontWeight: '700',
                              color: '#FFFFFF',
                              marginLeft: 2,
                            },
                          ]}>
                          {item.exp}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.prize}>
                      <Text style={styles.txtTitle}>Prize:</Text>
                      <View style={styles.gender}>
                        <Text
                          style={[
                            styles.txt,
                            {fontWeight: '700', color: '#FF9900'},
                          ]}>
                          {item.prize}
                        </Text>
                        <Image source={require('../Image/Coincoin.png')} />
                      </View>
                    </View>
                    <View style={styles.owner}>
                      <Text style={styles.txtTitle}>Owner:</Text>
                      <View style={styles.gender}>
                        <Text
                          style={[
                            styles.txt,
                            {
                              fontWeight: '700',
                              color: '#FFFFFF',
                              marginLeft: 2,
                            },
                          ]}
                          ellipsizeMode={'middle'}
                          numberOfLines={1}>
                          {item.owner}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: 396,
                    height: 0.8,
                    backgroundColor: 'rgba(223, 230, 233, 0.25)',
                  }}></View>
              </TouchableOpacity>
              ))
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  layoutTopRecord: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: (0, 8),
    width: 412,
    height: 24,
  },
  prizeRecord: {
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
  fieldPrize: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 38,
    height: 36,
  },
  fieldFee: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 58,
    height: 36,
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
    width: 300,
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
  resultCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: (16, 0),
    width: 428,
    height: 133,
    backgroundColor: 'rgba(0, 20, 30, 0.5)',
  },
  record: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 428,
    height: 240,
    backgroundColor: '#262626',
  },
  containerRecord: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    width: 428,
    height: 373.75,
  },
  gender: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 100,
    height: 24,
  },
  txtTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.03,
    color: '#C5C5C5',
  },
  owner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 104,
    height: 42,
  },
  prize: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 0,
    width: 41,
    height: 42,
  },
  exp: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 29,
    height: 42,
  },
  bloodline: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 120,
    height: 42,
  },
  bottomHorse: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: 0,
    width: 380,
    height: 42,
  },
  txtRank: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 27,
    textAlign: 'right',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.5,
    marginLeft: 2,
  },
  rank: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 0,
    width: 65,
    height: 27,
  },
  topLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: 0,
    width: 74,
    height: 51,
  },
  InfoHorse: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 265,
    height: 34,
    borderRadius: 8,
    marginLeft: 8,
  },
  txt: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#E9E9E9',
  },
  stt: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: (0, 4),
    width: 31,
    height: 24,
    backgroundColor: 'rgba(0, 20, 30, 0.5)',
    borderRadius: 4,
  },
  cardTop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 380,
    height: 51,
  },
  cardHorse: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: (4, 8, 8),
    width: 396,
    height: 113,
    backgroundColor: '#3A342F',
  },
  tableHorse: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: (0, 16, 8),
    width: 428,
    marginTop: 10,
  },
  shadow: {
    width: 123,
    height: 40,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    elevation: 5,
    padding: 2,
    borderRadius: 10,
  },
  label: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  layoutTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: (0, 16),
    width: 412,
    height: 42,
  },
  containerScroll: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 428,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: (16, 0, 0),
    width: 428,
  },
});
