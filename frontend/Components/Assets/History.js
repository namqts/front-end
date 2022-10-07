import React, {useRef} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import {text} from 'stream/consumers';
import FilterRace from '../reuse/FilterRace';
import Tokyo from '../reuse/tokyo';
import HistoryCard from './HistoryCard';

const data = [
  {
    id: 1,
    dateTime: '2020-01-01 12:10 AM',
    grass: '2400m',
    server: 'MayoRNAseq',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '3.6',
  },
  {
    id: 2,
    dateTime: '2020-03-11 12:10 AM',
    grass: '2400m',
    server: 'CHDWB',
    class: require('../Image/class-Race/class2.png'),
    fieldType: 'Dirt',
    entryFee: 'Free',
    prize: '16.23',
  },
  {
    id: 3,
    dateTime: '2020-06-28 07:31 AM',
    grass: '2400m',
    server: 'MSMM',
    class: require('../Image/class-Race/class1.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '4.28',
  },
  {
    id: 4,
    dateTime: '2020-04-16 12:10 AM',
    grass: '2400m',
    server: 'MayoLOADGWAS',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Dirt',
    entryFee: 'Free',
    prize: '3.8.19',
  },
  {
    id: 5,
    dateTime: '2020-04-17 01:23 PM',
    grass: '2400m',
    server: 'MSBB',
    class: require('../Image/class-Race/class7.png'),
    fieldType: 'Dirt',
    entryFee: 'Free',
    prize: '8.19',
  },
  {
    id: 1,
    dateTime: '2020-01-01 12:10 AM',
    grass: '2400m',
    server: 'MayoRNAseq',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '3.6',
  },
  {
    id: 1,
    dateTime: '2020-01-01 12:10 AM',
    grass: '2400m',
    server: 'MayoRNAseq',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '3.6',
  },
  {
    id: 1,
    dateTime: '2020-01-01 12:10 AM',
    grass: '2400m',
    server: 'MayoRNAseq',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '3.6',
  },
  {
    id: 1,
    dateTime: '2020-01-01 12:10 AM',
    grass: '2400m',
    server: 'MayoRNAseq',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '3.6',
  },
  {
    id: 1,
    dateTime: '2020-01-01 12:10 AM',
    grass: '2400m',
    server: 'MayoRNAseq',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '3.6',
  },
  {
    id: 1,
    dateTime: '2020-01-01 12:10 AM',
    grass: '2400m',
    server: 'MayoRNAseq',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '3.6',
  },
  {
    id: 1,
    dateTime: '2020-01-01 12:10 AM',
    grass: '2400m',
    server: 'MayoRNAseq',
    class: require('../Image/class-Race/class4.png'),
    fieldType: 'Tuft',
    entryFee: 'Free',
    prize: '3.6',
  },
];

export default function History() {
  const refRBSheet = useRef();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerScroll}>
          <HistoryCard/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerScroll: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 428,
    // height: 824,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 16,
    width: 428,
    // height: 824,
    overflow: 'scroll',
  },
});
