import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

const chip = [
  {
    id: 1,
    image: require('../Image/chip1.png'),
    color: '#3CB0FF',
  },
  {
    id: 2,
    image: require('../Image/chip3.png'),
    color: '#189803',
  },
  {
    id: 3,
    image: require('../Image/chip2.png'),
    color: '#FFAE00',
  },
  {
    id: 4,
    image: require('../Image/chip4.png'),
    color: '#BF04C3',
  },
];

function ChipBet() {
  const [id, setId] = useState(4);

  const setIdFilter = id => {
    setId(id);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.0, y: 1.0}}
        useAngle={true}
        angle={360}
        locations={[0.0, 0.4479, 0.4792, 1.0]}
        colors={['#F5DE55', '#EAC23B', '#FFF873', '#DD9A09']}
        style={styles.tabs}>
        <LinearGradient
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
          useAngle={true}
          angle={90}
          locations={[0.0, 0.22, 0.51, 0.78, 1.0]}
          colors={['#245494', '#2c7dc3', '#10b3e8', '#2c7dc3', '#245494']}
          style={styles.border}>
          <View style={styles.content}>
            <View style={styles.containerChip}>
              {chip.map(e => (
                <TouchableOpacity
                  style={[styles.borderChip]}
                  onPress={() => setIdFilter(e.id)}>
                  <Image
                    source={e.image}
                    style={[
                      {width: 48, height: 48},
                      id === e.id && {
                        backgroundColor: e.color,
                        width: 60,
                        height: 60,
                        borderRadius: 135,
                      },
                    ]}
                  />
                  <View
                    style={[
                      {
                        width: 48,
                        height: 48,
                        borderRadius: 135,
                        backgroundColor: 'rgba(0, 20, 30, 0.5)',
                        marginTop: -48,
                      },
                      id === e.id && {
                        backgroundColor: null,
                        width: 60,
                        height: 60,
                        borderRadius: 135,
                        marginTop: -64,
                      },
                    ]}></View>
                </TouchableOpacity>
              ))}
              <View style={styles.btnBorder}>
                <Image source={require('../Image/clear.png')} />
              </View>
              <View style={styles.btnBorder}>
                <Image
                  source={require('../Image/bet.png')}
                  style={{marginLeft: -8}}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
}

export default ChipBet;

const styles = StyleSheet.create({
  btnBorder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
    width: 69,
    height: 34,
    marginLeft: 4,
    borderRadius: 8,
  },
  borderChip: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  containerChip: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    paddingLeft: 4,
    width: 382,
    height: 50,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    width: 386,
    height: 96,
    overflow: 'scroll',
    backgroundColor: '#04234B',
  },
  border: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    width: 389,
    height: 98,
    borderWidth: 1,
    borderColor: '#585F6C',
  },
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    marginTop: -4,
    width: 392,
    height: 100,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 650,
    height: 1642,
  },
});
