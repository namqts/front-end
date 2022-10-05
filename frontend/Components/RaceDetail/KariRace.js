import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import RaceCard from './RaceCard';
import Tansho from './Tansho';
import Umaren from './Umaren';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const listTab = [
  {
    status: 'Race Card',
    color: '#2c7dc3'
  },
  {
    status: 'Tansho',
    color: '#FE3D70'
  },
  {
    status: 'Umaren',
    color: '#570299'
  },
];

const data = [
  {
    id: 1,
  },
];

function KariRace() {
  const [status, setStatus] = useState('Race Card');
  const [datalist, setDatalist] = useState(data);

  const setStatusFilter = status => {
    if (status !== 'Race Card') {
      setDatalist(data);
    } else {
      setDatalist(data);
    }
    setStatus(status);
  };

  const renderItem = ({item, index}) => {
    return status == 'Race Card' ? (
      <RaceCard />
    ) : status == 'Tansho' ? (
      <Tansho />
    ) : (
      <Umaren/>
    );
  };

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
            {listTab.map(e => (
              <TouchableOpacity
                style={[styles.raceCard, status === e.status && styles.tansho && {backgroundColor: e.color}]}
                onPress={() => setStatusFilter(e.status)}>
                <Text style={styles.TxtTitle}>{e.status}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </LinearGradient>
      </LinearGradient>
      <FlatList
        data={datalist}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
        style={{marginTop: -10}}
      />
    </View>
  );
}

export default KariRace;

const styles = StyleSheet.create({
  tansho: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: (4, 21),
    width: 124,
    height: 32,
    borderRadius: 4,
    marginTop: -8,
    marginRight: 2,
    marginLeft: 2,
  },
  TxtTitle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    letterSpacing: 0.02,
    color: '#fff',
  },
  raceCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: (4, 21),
    backgroundColor: 'rgba(223, 230, 233, 0.25)',
    width: 124,
    height: 32,
    borderRadius: 4,
    marginTop: -8,
    marginRight: 2,
    marginLeft: 2,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    width: 386,
    height: 58,
    overflow: 'scroll',
    backgroundColor: '#04234B',
    borderRadius: 6,
  },
  border: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    width: 389,
    height: 62,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#585F6C',
  },
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    width: 392,
    height: 64,
    borderRadius: 8,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: (0, 12),
    width: 650,
    // height: 926,
    marginTop: -40,
  },
});
