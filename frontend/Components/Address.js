import React, {useState, createRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Clipboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useMoralisDapp} from '../providers/MoralisDappProvider/MoralisDappProvider';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';
import {Tooltip} from '@ui-kitten/components';
import Blockie from './Blockie';

export default function Address() {
  const {walletAddress, chainId} = useMoralisDapp();
  const [tipVisible, setTipVisible] = useState(false);

  const copyToClipboard = () => {
    Clipboard.setString(walletAddress);
    setTipVisible(true);
  };

  const renderAddress = () => (
    <View style={styles.viewContainer}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => copyToClipboard()}>
        <Blockie address={walletAddress} size={100}/>

        <Text
          style={styles.headerText}
          ellipsizeMode={'middle'}
          numberOfLines={1}>
          {walletAddress}
        </Text>

        {/* <FontAwesomeIcon icon={faCopy} size={15} color="darkgreen" /> */}
      </TouchableOpacity>
    </View>
  );

  return (
    <Tooltip
      anchor={renderAddress}
      visible={tipVisible}
      onBackdropPress={() => setTipVisible(false)}>
      Copied Address 😻
    </Tooltip>
  );
}
const styles = StyleSheet.create({
  viewContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: (4, 8),
    width: 224,
    height: 40,
    backgroundColor: '#0D1E00',
    borderColor: 'rgba(223, 230, 233, 0.25)',
    borderWidth: 2,
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.75)',
    borderRadius: 4
  },
  imageContainer: {
    height: 52,
    width: 52,
    position: 'relative',
    left: -15,
    right: 0,
    top: 0,
    bottom: 0,
  },
  headerText: {
    width: 170,
    height: 16,
    fontStyle: 'normal',
    fontSize: 14,
    color: '#00CDEC',
    fontWeight: '300',
    display: 'flex',
    alignItems: 'flex-start',
    marginLeft: 55,
    marginTop: -24
  },
});
