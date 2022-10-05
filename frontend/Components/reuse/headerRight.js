import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

function HeaderRight() {

  return (
    <TouchableOpacity >
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
          <Image source={require('../Image/menu.png')}/>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default HeaderRight;

const styles = StyleSheet.create({
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
    marginTop: 20
  }
});
