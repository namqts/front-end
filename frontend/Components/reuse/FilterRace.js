import React, {useRef} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import FilterPay from '../MyAccount/FilterPay';

export default function FilterRace() {
  const refRBSheet = useRef();
  return (
    <FilterPay />
  );
}

const styles = StyleSheet.create({
    
});
