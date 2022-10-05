import React, { useState } from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Address from './Address';

export default function HeaderAfter() {

  const [data, setData] = useState('tail');
  const [width, setWidth] = useState(120);

  return (
    <View style={styles.header}>
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.0, y: 1.0}}
        useAngle={true}
        angle={180}
        locations={[0.0, 0.1615, 0.6426, 0.6927, 0.9615, 1.0]}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={[
          '#F8F8F8',
          '#B5B4B4',
          '#F1F1F1',
          '#504F4F',
          '#A7A7A7',
          '#D0D0D0',
        ]}
        style={styles.linear}>
        <View style={styles.viewContainer}>
          <View style={styles.address}>
            <Address data={data} width={width}/>
          </View>
        </View>
        <View style={styles.pointSPC}>
          <Image source={require('./Image/Coincoin.png')} />
          <Text
            style={styles.headerText}
            ellipsizeMode={'middle'}
            numberOfLines={1}>
            10,000
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 300,
    height: 52,
    marginTop: 20,
    marginLeft: -10,
  },
  address: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: (4, 8),
    width: 168,
    height: 40,
    backgroundColor: '#0D1E00',
    borderColor: 'rgba(223, 230, 233, 0.25)',
    borderWidth: 2,
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.75)',
    borderRadius: 4
  },
  viewContainer: {
    width: 284,
    height: 52,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 2,
    shadowOpacity: 0.6,
    borderRadius: 8,
    marginLeft: -4,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  linear: {
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    width: 270,
  },
  headerText: {
    width: 146,
    height: 16,
    fontStyle: 'normal',
    fontSize: 14,
    color: '#00CDEC',
    fontWeight: '300',
    display: 'flex',
    alignItems: 'flex-end',
  },
  pointSPC: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    width: 95,
    height: 40,
    marginLeft: -108,
    marginRight: 4,
    backgroundColor: '#0D1E00',
    borderColor: 'rgba(223, 230, 233, 0.25)',
    borderWidth: 2,
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.75)',
    borderRadius: 4,
  },
});
