import React, {useRef} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import FilterPay from '../MyAccount/FilterPay';

export default function FilterRace() {
  const refRBSheet = useRef();
  return (
    <View style={styles.menu}>
        <View style={styles.layout}>
          <FilterPay />
          <TouchableOpacity onPress={() => refRBSheet.current.close()}>
            <Image
              source={require('../Image/btnAccept.png')}
              style={{width: 394, height: 43, marginLeft: -4, marginTop: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
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
});
