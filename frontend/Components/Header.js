import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Address from './Address';

export default function Header() {
  return (
    <View style={styles.header}>
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0.0, y: 1.0 }}
        useAngle={true}
        angle={180}
        locations={[0.0, 0.1615, 0.6426, 0.6927, 0.9615, 1.0]}
        angleCenter={{ x: 0.5, y: 0.5 }}
        colors={['#F8F8F8', '#B5B4B4', '#F1F1F1', '#504F4F', '#A7A7A7', '#D0D0D0']}
        style={styles.linear}>
        <View style={styles.viewContainer}>
          <Address />
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
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0.0, y: 1.0 }}
        useAngle={true}
        angle={180}
        locations={[0.0, 0.1615, 0.6426, 0.6927, 0.9615, 1.0]}
        angleCenter={{ x: 0.5, y: 0.5 }}
        colors={['#F8F8F8', '#B5B4B4', '#F1F1F1', '#504F4F', '#A7A7A7', '#D0D0D0']}
        style={styles.frameRight}>
        <View >
          <Image source={require('./Image/menu.png')}/>
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
    marginTop: 30
  },
  viewContainer: {
    width: 346,
    height: 52,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 2,
    shadowOpacity: 0.6,
    borderRadius: 8,
    marginLeft: -4,
    marginBottom: 2,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  },
  linear: {
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    marginLeft: -15,
  },
  headerText: {
    width: 146,
    height: 16,
    fontStyle: 'normal',
    fontSize: 14,
    color: '#00CDEC',
    fontWeight: '300',
    display: 'flex',
    alignItems: 'flex-end'
  },
  pointSPC: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    width: 92,
    height: 40,
    marginLeft: -108,
    marginTop: 2,
    marginRight: 4,
    backgroundColor: '#0D1E00',
    borderColor: 'rgba(223, 230, 233, 0.25)',
    borderWidth: 2,
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.75)',
    borderRadius: 4
  },
  frameRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: (6, 16, 6, 6),
    width: 74,
    height: 64,
    shadowColor: 'inset 0px 0px 2px rgba(0, 0, 0, 0.75)',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    marginLeft: 10
  }
});