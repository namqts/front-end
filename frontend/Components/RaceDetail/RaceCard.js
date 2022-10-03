import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';
import {Center, NativeBaseProvider, PresenceTransition} from 'native-base';

const horseList = [
  {
    id: 1,
    image: require('../Image/List-horse/horseWhite.png'),
    name: 'A. Baker',
    careerFirst: '17',
    careerLast: '-8/6/1',
    owner: 'B. Beats',
    background: 'rgba(0, 21, 30, 0.5)',
    detail: [
      {
        blood: 'Roberto',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%'
      },
    ],
  },
  {
    id: 2,
    image: require('../Image/List-horse/horseBlack.png'),
    name: 'J. Allen',
    careerFirst: '46',
    careerLast: '-3/2/2',
    owner: 'D. Bardsley',
    background: 'rgba(0, 21, 30, 0.75)',
    detail: [
      {
        blood: 'Roberto',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%'
      },
    ],
  },
  {
    id: 3,
    image: require('../Image/List-horse/horseRed.png'),
    name: 'B. Beats',
    careerFirst: '12',
    careerLast: '-5/5/8',
    owner: 'B. Beats',
    background: 'rgba(0, 21, 30, 0.5)',
    detail: [
      {
        blood: 'Roberto',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%'
      },
    ],
  },
  {
    id: 4,
    image: require('../Image/List-horse/horseLightBlue.png'),
    name: 'A. Amos',
    careerFirst: '9',
    careerLast: '-2/2/3',
    owner: 'J. Armfield',
    background: 'rgba(0, 21, 30, 0.75)',
    detail: [
      {
        blood: 'Roberto',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%'
      },
    ],
  },
  {
    id: 5,
    image: require('../Image/List-horse/horseYellow.png'),
    name: 'P. Beasley',
    careerFirst: '26',
    careerLast: '-3/2/1',
    owner: 'J. Bayliss',
    background: 'rgba(0, 21, 30, 0.5)',
    detail: [
      {
        blood: 'Roberto',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%'
      },
    ],
  },
  {
    id: 6,
    image: require('../Image/List-horse/horseGold.png'),
    name: 'R. Barkley',
    careerFirst: '7',
    careerLast: '-4/2/8',
    owner: 'A. Aldridge',
    background: 'rgba(0, 21, 30, 0.75)',
    detail: [
      {
        blood: 'Roberto',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%'
      },
    ],
  },
  {
    id: 7,
    image: require('../Image/List-horse/horseGreen.png'),
    name: 'N. Barmby',
    careerFirst: '33',
    careerLast: '-3/4/3',
    owner: 'C. Bastin',
    background: 'rgba(0, 21, 30, 0.5)',
    detail: [
      {
        blood: 'Roberto',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%'
      },
    ],
  },
  {
    id: 8,
    image: require('../Image/List-horse/horseGreenLight.png'),
    name: 'H. Barnet',
    careerFirst: '32',
    careerLast: '-6/2/2',
    owner: 'G. Bailey',
    background: 'rgba(0, 21, 30, 0.75)',
    detail: [
      {
        blood: 'Roberto',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%'
      },
    ],
  },
  {
    id: 9,
    image: require('../Image/List-horse/horseOrange.png'),
    name: 'T. Allen',
    careerFirst: '12',
    careerLast: '-1/2/1',
    owner: 'R. Baynham',
    background: 'rgba(0, 21, 30, 0.5)',
    detail: [
      {
        blood: 'Roberto',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%'
      },
    ],
  },
  {
    id: 10,
    image: require('../Image/List-horse/horseOrangeLight.png'),
    name: 'A. Ball',
    careerFirst: '6',
    careerLast: '-3/8/1',
    owner: 'G. Ashmore',
    background: 'rgba(0, 21, 30, 0.75)',
    detail: [
      {
        blood: 'Roberto',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%'
      },
    ],
  },
  {
    id: 11,
    image: require('../Image/List-horse/horseViolet.png'),
    name: 'B. Austin',
    careerFirst: '8',
    careerLast: '-3/7/1',
    owner: 'B. Austin',
    background: 'rgba(0, 21, 30, 0.5)',
    detail: [
      {
        blood: 'Roberto',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%'
      },
    ],
  },
  {
    id: 12,
    image: require('../Image/List-horse/horseVioletLight.png'),
    name: 'J. Ashcroft',
    careerFirst: '17',
    careerLast: '-8/2/6',
    owner: 'S. Bastard',
    background: 'rgba(0, 21, 30, 0.75)',
    detail: [
      {
        blood: 'Roberto',
        gender: 'Male',
        type: 'Wind',
        color: 'Yellow green',
        characteris: 'Excited',
        running_type: 'Front Runner',
        win_rates: '17.65% - 35.29%'
      },
    ],
  },
];

function RaceCard() {
  const [isOpen, setIsOpen] = useState(false);
  const setIsOpenId = isOpen => {
    setIsOpen(isOpen);
  };

  return (
    <NativeBaseProvider>
      <View
        style={[
          styles.ContainerTable,
          setIsOpenId ? {height: 1134} : {height: 534},
        ]}>
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
                <Text style={styles.txtTable}>Career</Text>
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
              style={styles.borderOwner}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.0, y: 1.0}}
                useAngle={true}
                angle={180}
                locations={[0.0, 0.6279, 0.6868, 1.0]}
                colors={['#717171', '#424242', '#343434', '#343434']}
                style={styles.owner}>
                <Text style={styles.txtTable}>Owner</Text>
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
                <Text style={styles.txtTable}>Act</Text>
              </LinearGradient>
            </LinearGradient>
          </View>

          <View>
            {horseList.map((item, i) => (
              <View>
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
                      width: 116,
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
                      width: 70,
                      height: 40,
                      backgroundColor: item.background,
                      borderColor: '#A4A4A4',
                      borderWidth: 0.5,
                    }}>
                    <Text style={styles.txt}>
                      <Text style={{color: '#FFCB12'}}>{item.careerFirst}</Text>
                    </Text>
                    <Text style={styles.txtSort}>{item.careerLast}</Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 7,
                      width: 115,
                      height: 40,
                      backgroundColor: item.background,
                      borderColor: '#A4A4A4',
                      borderWidth: 0.5,
                    }}>
                    <Text style={styles.txt}>{item.owner}</Text>
                  </View>
                  <TouchableOpacity onPress={() => setIsOpenId(item.id)}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 7,
                        width: 42,
                        height: 40,
                        backgroundColor: item.background,
                        borderColor: '#A4A4A4',
                        borderWidth: 0.5,
                      }}>
                      {isOpen === item.id ? (
                        <FontAwesomeIcon
                          icon={faCaretUp}
                          color="#DCDCDC"
                          size={22}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faCaretDown}
                          color="#DCDCDC"
                          size={22}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
                {isOpen == item.id
                  ? item.detail.map((e, i) => (
                      <LinearGradient
                        key={i}
                        start={{x: 0.0, y: 0.0}}
                        end={{x: 0.0, y: 1.0}}
                        useAngle={true}
                        angle={180}
                        locations={[0.0, 0.5078, 1.0]}
                        colors={['#4F5562', '#3B4353', '#1A1D24']}
                        style={styles.horseDetail}>
                        <View style={styles.HorseTop}>
                          <View style={styles.TxtHorseTop}>
                            <View style={styles.txtTop}>
                              <Text style={styles.txtTitle}>Blood line :</Text>
                              <Text style={styles.txtDescription}>
                                {e.blood}
                              </Text>
                              <Text style={[styles.txtTitle, {marginTop: 10}]}>Gender :</Text>
                              <Text style={styles.txtDescription}>
                                {e.gender}
                              </Text>
                              <Text style={[styles.txtTitle, {marginTop: 10}]}>Type :</Text>
                              <Text style={styles.txtDescription}>
                                {e.type}
                              </Text>
                              <Text style={[styles.txtTitle, {marginTop: 10}]}>Color :</Text>
                              <Text style={styles.txtDescription}>
                                {e.color}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.HorseTopLeft}></View>
                        </View>
                      </LinearGradient>
                    ))
                  : null}
              </View>
            ))}
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

export default RaceCard;

const styles = StyleSheet.create({
  txtDescription: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#00CDEC',
  },
  txtTitle: {
    display: 'flex',
    alignItems: 'flex-end',
    fontStyle: 'normal',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    color: '#C5C5C5',
  },
  txtTop: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 89,
    height: 40,
  },
  HorseTopLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 237,
    height: 158,
    margin: 10,
  },
  TxtHorseTop: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 121,
    height: 184,
  },
  HorseTop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    width: 374,
    height: 184,
  },
  horseDetail: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 8,
    width: 386,
    height: 610,
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
    width: 41,
    height: 45,
    justifyContent: 'center',
    borderTopRightRadius: 7,
  },
  borderAct: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 44,
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
    width: 115,
    height: 45,
    justifyContent: 'center',
  },
  borderName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 116,
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
    height: 1132,
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
    height: 1134,
    borderColor: '#FFAE00',
    borderWidth: 1,
    borderRadius: 10,
  },
});
