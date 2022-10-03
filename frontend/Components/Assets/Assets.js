import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import useERC20Balance from "../../hooks/useERC20balance";
import {
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Text,
  Image
} from "react-native";
import NativeBalance from "./NativeBalance";
import ERC20Balance from "./ERC20Balance";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@ui-kitten/components";
import LinearGradient from "react-native-linear-gradient";
import RaceList from "./Race";

export default function Assets() {
  const { Moralis } = useMoralis();
  // const nativeName = useMemo(() => getNativeByChain(options?.chain || chainId), [options, chainId]);
  return (
    <SafeAreaView style={[StyleSheet.absoluteFill, styles.container]}>
      <ScrollView>
        <LinearGradient
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 0.0, y: 1.0 }}
          useAngle={true}
          angle={180}
          locations={[0.0, 0.1615, 0.6426, 0.6927, 0.9615, 1.0]}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={['#F8F8F8', '#B5B4B4', '#F1F1F1', '#504F4F', '#A7A7A7', '#D0D0D0']}>
          <View style={styles.viewContainer}>
            <Image style={styles.live} source={require('../Image/live.png')} />

            {/* <Text style={styles.chainText} category="c2">
            Ethereum
          </Text>
          <NativeBalance chain="0x1" />
          <ERC20Balance></ERC20Balance>
          <Text style={styles.chainText} category="c2">
            Binance Smart Chain
          </Text>
          <NativeBalance chain="0x38" />
          <ERC20Balance chain="0x38"></ERC20Balance>
          <Text style={styles.chainText} category="c2">
            Polygon Chain
          </Text>
          <NativeBalance chain="0x89" />
          <ERC20Balance chain="0x89"></ERC20Balance> */}
          </View>
        </LinearGradient>
        <View style={styles.textRun}>
          <Image source={require('../Image/Noti.png')}/>
        </View>
        <RaceList/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  textRun: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    width: 428,
    height: 55,
    backgroundColor: '#000',
    shadowColor: '#000000',
    shadowRadius: (0, 1, 4)
  },
  live: {
    width: 404,
    height: 210,
    resizeMode: "cover"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#000",

  },
  viewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: (0, 0, 2),
    width: 412,
    height: 218,
    borderRadius: 6,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
  },
});
