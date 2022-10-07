import React from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';

export default function HistoryHorse() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerScroll}>
          <View style={styles.layoutTop}>
            <Text style={styles.label}>Finished race</Text>
            <Image source={require('../Image/view-record.png')}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20, lineHeight: 24,
        color: '#FFFFFF'
    },
  layoutTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: (0, 16),
    width: 412,
    height: 42,
    marginTop: 30,
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
