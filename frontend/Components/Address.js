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

export default function Address(props) {
  const {walletAddress, chainId} = useMoralisDapp();
  const [tipVisible, setTipVisible] = useState(false);

  const copyToClipboard = () => {
    Clipboard.setString(walletAddress);
    setTipVisible(true);
  };

  const renderAddress = () => (
    <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => copyToClipboard()}>
        <Blockie address={walletAddress} size={100}/>

        <Text
          style={[styles.headerText, { width: props.width}]}
          ellipsizeMode={props.data}
          numberOfLines={1}>
          {walletAddress}
        </Text>

        {/* <FontAwesomeIcon icon={faCopy} size={15} color="darkgreen" /> */}
      </TouchableOpacity>
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
