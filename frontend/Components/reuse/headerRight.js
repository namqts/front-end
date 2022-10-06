import {border, position} from 'native-base/lib/typescript/theme/styled-system';
import React, {useRef} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useNavigation} from '@react-navigation/native';

function HeaderRight() {
  const refRBSheet = useRef();
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
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
          style={styles.frameRight}>
          <View>
            <Image source={require('../Image/menu.png')} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        height={500}
        customStyles={{
          container: {
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
          },
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#BDBDBD',
            width: 134,
          },
        }}>
        <View style={styles.menu}>
          <View style={styles.containerIcon}>
            <TouchableOpacity onPress={() => [navigation.navigate('MyAccount'),  refRBSheet.current.close()]}>
              <View style={styles.container}>
                <View style={styles.icon}></View>
                <Text>My account</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.container}>
              <View style={styles.icon}></View>
              <Text>News</Text>
            </View>
          </View>
          <View style={styles.containerIcon}>
            <View style={styles.container}>
              <View style={styles.icon}></View>
              <Text>Bet history</Text>
            </View>
            <View style={styles.container}>
              <View style={styles.icon}></View>
              <Text>Withdraw</Text>
            </View>
          </View>
          <View style={styles.containerIcon}>
            <View style={styles.container}>
              <View style={styles.icon}></View>
              <Text>System</Text>
            </View>
            <View style={styles.container}>
              <View style={styles.icon}></View>
              <Text>Support</Text>
            </View>
          </View>
        </View>
      </RBSheet>
    </>
  );
}

export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 150,
    height: 150,
  },
  icon: {
    borderColor: '#212121',
    borderWidth: 1,
    borderRadius: 100,
    width: 100,
    height: 100,
  },
  containerIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 100,
    marginBottom: 60,
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: (8, 0, 40),
    position: 'relative',
    width: 428,
    height: 450,
  },
  frameRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: (6, 16, 6, 6),
    width: 74,
    height: 64,
    shadowColor: 'inset 0px 0px 2px rgba(0, 0, 0, 0.75)',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    marginLeft: 10,
    marginTop: 20,
  },
});
