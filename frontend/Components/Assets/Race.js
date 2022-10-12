import {ListItem} from '@ui-kitten/components';
import {Size} from '@ui-kitten/components/devsupport';
import React, {Component, PureComponent, useRef, useState} from 'react';
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
import RaceList from './RaceList';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Filter from './Filter';
import History from './History';
import HistoryCard from './HistoryCard';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

export default function Race() {
  const refRBSheet = useRef();

  const navigation = useNavigation();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.0, y: 1.0}}
        useAngle={true}
        angle={180}
        locations={[0.004, 0.01, 0.3559, 0.6927, 0.9615, 1.0]}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={[
          '#555555',
          '#969696',
          '#F1F1F1',
          '#504F4F',
          '#A7A7A7',
          '#D0D0D0',
        ]}
        style={styles.container}>
        <LinearGradient
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
          useAngle={true}
          angle={180}
          locations={[0.0, 0.1615, 0.3385, 0.474, 0.9115, 1.0]}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={[
            '#F8F8F8',
            '#D0D0D0',
            '#F8F8F8',
            '#A4A4A4',
            '#5F5F5F',
            '#959595',
          ]}
          style={styles.Viewcontainer}>
          <LinearGradient
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}
            useAngle={true}
            angle={180}
            locations={[0.0, 1.0]}
            angleCenter={{x: 0.5, y: 0.5}}
            colors={['#262626', '#D0D0D0']}
            style={styles.ViewcontainerRace}>
            <View style={styles.rowContent}>
              <Image
                source={require('../Image/label-card.png')}
                style={{marginLeft: 3}}
              />
              {!isOpen ? (
                <LinearGradient
                  start={{x: 0.0, y: 0.0}}
                  end={{x: 0.0, y: 1.0}}
                  useAngle={true}
                  angle={180}
                  locations={[0.0, 0.758, 0.7847, 1.0]}
                  angleCenter={{x: 0.5, y: 0.5}}
                  colors={['#373F4F', '#8690A4', '#13161D', '#5D667A']}
                  style={styles.containerButton}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('History')}>
                    <Image source={require('../Image/history.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                    <Image source={require('../Image/filter.png')} />
                  </TouchableOpacity>
                </LinearGradient>
              ) : null}
            </View>
            {!isOpen ? (
              <RaceList />
            ) : (
              <View style={styles.containerHistory}>
                <View style={styles.containerNote}>
                  <FontAwesomeIcon
                    icon={faExclamationCircle}
                    color="#8E8E8E"
                    size={32}
                  />
                  <Text style={styles.txtNote}>
                    The race list has not been updated, you can see the previous
                    races
                  </Text>
                </View>
                <HistoryCard />
              </View>
            )}
          </LinearGradient>
        </LinearGradient>
      </LinearGradient>
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
        <View style={styles.menu}>
          <View style={styles.layout}>
            <Filter />
            <TouchableOpacity onPress={() => refRBSheet.current.close()}>
              <Image
                source={require('../Image/btnAccept.png')}
                style={{width: 394, height: 43, marginLeft: -4, marginTop: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </>
  );
}

const styles = StyleSheet.create({
  txtNote: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
    width: 300,
    height: 32,
    color: '#8E8E8E',
    marginTop: 11,
  },
  containerNote: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
    width: 378,
    height: 72,
  },
  containerHistory: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 0,
    margin: 2,
  },
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
  containerButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 189,
    height: 49,
    marginLeft: 50,
    padding: (7, 5, 4),
    borderRadius: (0, 0, 4, 4),
  },
  containerRace: {
    margin: 8,
    width: 357,
    height: 86,
    flexDirection: 'column',
    display: 'flex',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 0.5,
    borderColor: 'rgba(19, 0, 0, 0.25)',
  },
  rowContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 0,
    width: 380,
    height: 56,
  },
  txtCome: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#383838',
  },
  history: {
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
    width: 110,
    height: 34,
    marginLeft: 134,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 2,
    paddingLeft: 8,
    borderRadius: (0, 0, 4, 4),
  },
  raceList: {
    width: 120,
    height: 46,
    borderRadius: (0, 0, 4, 4),
    paddingLeft: 8,
    paddingBottom: 0,
    paddingRight: 8,
    paddingTop: 8,
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
    left: 8,
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 16,
    paddingLeft: 6,
    paddingRight: 4,
    width: 412,
    height: 1860,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: 'rgba(255, 255, 255, 0.5)',
    shadowOpacity: 2,
    shadowOffset: {height: 0, width: 2},
  },
  Viewcontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 5,
    width: 399,
    height: 1860,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 0.5,
    elevation: 8,
    shadowOffset: {height: -2, width: 2},
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
    borderTopWidth: 0.1,
    borderBottomWidth: 0.1,
  },
  ViewcontainerRace: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 4,
    paddingRight: 4,
    width: 389,
    height: 1840,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 8,
  },
  Content: {
    display: 'flex',
    alignItems: 'center',
    width: 104,
    height: 20,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 24,
    color: '#3348D0',
  },
});
