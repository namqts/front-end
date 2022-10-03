import React, { useState, createRef, useRef, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Linking,
  Animated,
  Dimensions,
  ImageBackground,
} from "react-native";
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  ActivityIndicator,
} from "react-native-paper";

import BouncyCheckbox from "react-native-bouncy-checkbox";

import {
  useMoralis,
  useMoralisWeb3Api,
  useMoralisWeb3ApiCall,
} from "react-moralis";
import { useWalletConnect } from "../WalletConnect";
import LottieView from "lottie-react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Animation from "../splashLottie.json";
import LinearGradient from "react-native-linear-gradient";

// import Loader from './Components/Loader';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginScreen = ({ navigation }) => {
  const connector = useWalletConnect();
  const {
    authenticate,
    authError,
    isAuthenticating,
    isAuthenticated,
    logout,
    Moralis,
  } = useMoralis();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const passwordInputRef = createRef();

  const handleCryptoLogin = () => {
    authenticate({ connector })
      .then(() => {
        if (authError) {
          // setErrortext(authError.message);
          // setVisible(true);
          navigation.replace("DrawerNavigationRoutes");
        } else {
          if (isAuthenticated) {
            navigation.replace("DrawerNavigationRoutes");
          }
        }
      })
      .catch(() => { });
  };

  useEffect(() => {
    isAuthenticated && navigation.replace("DrawerNavigationRoutes");
  }, [isAuthenticated]);

  const [isSelected, setSelection] = useState(false);

  return (
    <Provider>
      <View>
        <ScrollView>
          <ImageBackground
            style={styles.img}
            resizeMode="stretch"
            source={require("./Image/bg-betting.png")}
          >
            <View style={styles.mainBody}>
              <KeyboardAvoidingView enabled>
                <View style={styles.btn}>
                  <LinearGradient
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 0.0, y: 1.0 }}
                    useAngle={true}
                    angle={360}
                    locations={[0.0, 0.4479, 0.4792, 1.0]}
                    angleCenter={{ x: 0.5, y: 0.5 }}
                    colors={['#EDC53A', '#B26F29', '#FFF873', '#DD9A09']}
                    style={{ borderRadius: 100, marginRight: 10 }}>
                    <Image source={require('./Image/language.png')} resizeMode="cover" style={{ width: 40, height: 40 }} />
                  </LinearGradient>
                  <LinearGradient
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 0.0, y: 1.0 }}
                    useAngle={true}
                    angle={360}
                    locations={[0.0, 0.4479, 0.4792, 1.0]}
                    angleCenter={{ x: 0.5, y: 0.5 }}
                    colors={['#EDC53A', '#B26F29', '#FFF873', '#DD9A09']}
                    style={{ borderRadius: 100 }}>
                    <Image source={require('./Image/contact.png')} resizeMode="cover" style={{ width: 40, height: 40 }} />
                  </LinearGradient>
                </View>
                <Image
                  source={require("./Image/Logo.png")}
                  style={{
                    maxWidth: "100%",
                    resizeMode: "contain",
                    marginBottom: 150,

                  }}
                />

                <View>
                  {authError && (
                    <Portal>
                      <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Authentication error:</Dialog.Title>
                        <Dialog.Content>
                          <Paragraph>
                            {authError ? authError.message : ""}
                          </Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                          <Button onPress={hideDialog}>Done</Button>
                        </Dialog.Actions>
                      </Dialog>
                    </Portal>
                  )}
                  {isAuthenticating && (
                    <ActivityIndicator animating={true} color={"white"} />
                  )}
                </View>

                <View style={styles.connect}>
                  <Image source={require('./Image/icon-meta.png')} />
                  <Text style={{ color: '#00CDEC', marginLeft: 6 }}>
                    Metamask
                  </Text>
                  <LinearGradient
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 0.0, y: 1.0 }}
                    useAngle={true}
                    angle={90}
                    locations={[0.0, 0.1, 0.5, 0.9, 1.0]}
                    angleCenter={{ x: 0.5, y: 0.5 }}
                    colors={['#0066cc', '#0099ff', '#00ffff', '#0099ff', '#0066cc']}
                    style={styles.walletConnect}>
                    <Text style={{
                      fontSize: 18,
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: 22,
                      color: '#FFF39F'
                    }}>
                      Connect Wallet
                    </Text>
                  </LinearGradient>
                </View>

                <View style={styles.startBetting}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={handleCryptoLogin}>
                    <LinearGradient
                      start={{ x: 0.0, y: 0.0 }}
                      end={{ x: 0.0, y: 1.0 }}
                      useAngle={true}
                      angle={360}
                      locations={[0.0, 0.4479, 0.4792, 1.0]}
                      angleCenter={{ x: 0.5, y: 0.5 }}
                      colors={['#F5DE55', '#EAC23B', '#FFF873', '#DD9A09']}
                      style={styles.buttonStyle}>

                      <Text style={styles.buttonTextStyle}>Start betting</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>

                <View style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 20
                }}>
                  <BouncyCheckbox
                    size={25}
                    fillColor='#916C2D'
                    iconStyle={{ borderColor: "#916C2D" }}
                    innerIconStyle={{ borderWidth: 1 }}
                    boxType={"circle"}
                    isChecked={isSelected}
                    onPress={setSelection}
                  />
                  <Text
                    style={styles.registerTextStyle}
                  >
                    Lorem ipsum dolor sit ametdolor
                  </Text>
                  <Text style={{ color: '#00CDEC', marginLeft: 3 }}>
                    ipsum dolor amet
                  </Text>
                </View>
              </KeyboardAvoidingView>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    </Provider>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  walletConnect: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: 8,
    width: 150,
    height: 38,
    borderColor: '#ffcc00',
    borderWidth: 1,
    borderRadius: 7,
    marginLeft: 128
  },
  connect: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 8,
    width: 394,
    height: 46,
    backgroundColor: 'rgba(13, 30, 0, 0.5)',
    borderRadius: 9,
    marginBottom: 10
  },
  startBetting: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 8,
    width: 394,
    height: 46,
  },
  checkbox: {
    alignSelf: "center",
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 0,
    width: 396,
    height: 46,
    marginBottom: 80
  },
  img: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    padding: 8
  },
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    borderRadius: 7,
    borderColor: '#916C2D',
    borderWidth: 1,
    width: 394,
    height: 43,
    paddingLeft: 8,
    paddingRight: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonTextStyle: {
    fontStyle: "normal",
    lineHeight: 27,
    fontSize: 22,
    fontWeight: "bold",
    color: '#FFF39F',
    textShadowColor: '#FFAE00',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  registerTextStyle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 14,
    alignSelf: "center",
    padding: 0,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});
