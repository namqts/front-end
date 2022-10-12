import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const noti = [
  {id: 1, title: 'What is community transmission? And how can it be prevented', time: '2020-02-29', read: false},
  {id: 2, title: "Australia's house prices hold up against the rest of the world", time: '2020-03-11', read: true},
  {id: 3, title: "Ex-intelligence official fined for retaining 'significantly sensitive' classified documents", time: '2020-02-26', read: true},
  {id: 4, title: 'What is community transmission? And how can it be prevented', time: '2020-02-29', read: false},
  {id: 5, title: "Australia's house prices hold up against the rest of the world", time: '2020-03-11', read: true},
  {id: 6, title: "Ex-intelligence official fined for retaining 'significantly sensitive' classified documents", time: '2020-02-26', read: true},
  {id: 7, title: "Australia's house prices hold up against the rest of the world", time: '2020-03-11', read: true},
  {id: 8, title: "Ex-intelligence official fined for retaining 'significantly sensitive' classified documents", time: '2020-02-26', read: true},
];

export default function News() {
  const [notifs, setNotifs] = useState();

  const setRead = (eid) => {
    setNotifs(notifs);
  }

  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        {noti.map(e => (
          <TouchableOpacity onPress={() => navigation.navigate('BettingNew', {data: e})}>
            <View style={styles.notiCard}>
              <View style={styles.containerTxt}>
                <Text style={styles.title}>
                  {e.title}
                </Text>
                <Text style={styles.time}>2020-02-29</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  time: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#FFFFFF',
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#00CDEC',
  },
  containerTxt: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 32,
    paddingRight: 32,
    width: 428,
    height: 72,
  },
  notiCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: (12, 0, 0),
    width: 428,
    height: 96,
    backgroundColor: '#04234B',
    marginTop: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    width: 428,
    // height: 821,
    marginTop: 19,
  },
});
