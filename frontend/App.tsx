import React from 'react';
import {useMoralis} from 'react-moralis';
import {useWalletConnect} from './WalletConnect';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  DefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LogBox} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CryptoAuth from './Components/CryptoAuth';
import RecentTransactions from './Components/RecentTransactions/RecentTransactions';
import Assets from './Components/Assets/Assets';
import Transfer from './Components/RaceDetail/Transfer';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header';
import HeaderAfter from './Components/HeaderAfter';
import HeaderLeft from './Components/reuse/headerLeft';
import HeaderRight from './Components/reuse/headerRight';
import NFTAssets from './Components/NFT/NFTAssets';
import HorseDetail from './Components/RaceDetail/HorseDetail';
import BetConfirm from './Components/RaceDetail/BetConfirm';
import MyAccount from './Components/MyAccount/MyAccount';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCreditCard,
  faCoins,
  faUser,
  faPaperPlane,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';

import Moralis from 'moralis/types';

LogBox.ignoreAllLogs();

// const Activecolor =
function Home(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // shifting={false}
      // activeColor="#315399"
      // inactiveColor="#3e2465"
      // barStyle={{backgroundColor: 'white'}}
    >
      <Stack.Screen
        name="Assets"
        // options={{
        //   headerRight: props => <HeaderRight />,
        //   headerTitle: props => <Header />,

        // }}

        // options={{
        //   tabBarLabel: 'Assets',
        //   tabBarIcon: ({color, focused}) => {
        //     return <FontAwesomeIcon icon={faCoins} color={color} size={20} />;
        //   },
        // }}
        component={Assets}
      />
      <Stack.Screen
        name="HorseDetail"
        // options={{
        //   headerLeft: props => <HeaderLeft />,
        //   headerTitle: props => <HeaderAfter />,
        //   headerRight: props => <HeaderRight />,
        // }}
        // options={{header: props => <Header />}}
        // options={{
        //   tabBarLabel: 'HorseDetail',
        //   tabBarIcon: ({color}) => (
        //     <FontAwesomeIcon icon={faUser} color={color} size={20} />
        //   ),
        // }}
        component={HorseDetail}
      />
      <Stack.Screen
        name="BetConfirm"
        // options={{
        //   headerLeft: props => <HeaderLeft />
        // }}
        // options={{header: props => <Header />}}
        // options={{
        //   tabBarLabel: 'HorseDetail',
        //   tabBarIcon: ({color}) => (
        //     <FontAwesomeIcon icon={faUser} color={color} size={20} />
        //   ),
        // }}
        component={BetConfirm}
      />
      <Stack.Screen
        name="Transactions"
        // options={{
        //   headerLeft: props => <HeaderLeft />,
        //   headerRight: props => <HeaderRight />,
        // }}
        // options={{header: props => <Header />}}
        // options={{
        //   tabBarLabel: 'Transactions',
        //   tabBarIcon: ({color}) => (
        //     <FontAwesomeIcon icon={faCreditCard} color={color} size={20} />
        //   ),
        // }}
        component={RecentTransactions}
      />
      <Stack.Screen
        name="NFTAssets"
        // options={{
        //   headerLeft: props => <HeaderLeft />,
        //   headerRight: props => <HeaderRight />,
        // }}
        // options={{header: props => <Header />}}
        // options={{
        //   tabBarLabel: 'NFTAssets',
        //   tabBarIcon: ({color, focused}) => {
        //     return <FontAwesomeIcon icon={faRocket} color={color} size={20} />;
        //   },
        // }}
        component={NFTAssets}
      />
      <Stack.Screen
        name="Transfer"
        // options={{
        //   headerLeft: props => <HeaderLeft />,
        //   headerTitle: props => <HeaderAfter />,
        //   headerRight: props => <HeaderRight />,
        // }}
        // options={{header: props => <Header />}}
        // options={{
        //   tabBarLabel: 'Transfer',
        //   tabBarIcon: ({color}) => (
        //     <FontAwesomeIcon icon={faPaperPlane} color={color} size={20} />
        //   ),
        // }}
        component={Transfer}
      />

      <Stack.Screen
        name="Profile"
        // options={{
        //   headerLeft: props => <HeaderLeft />,
        //   headerTitle: props => <HeaderAfter />,
        //   headerRight: props => <HeaderRight />,
        // }}
        // options={{header: props => <Header />}}
        // options={{
        //   tabBarLabel: 'Profile',
        //   tabBarIcon: ({color}) => (
        //     <FontAwesomeIcon icon={faUser} color={color} size={20} />
        //   ),
        // }}
        component={Profile}
      />

      <Stack.Screen
        name="MyAccount"
        // options={{
        //   headerLeft: props => <HeaderLeft />,
        //   headerTitle: props => <HeaderAfter />,
        //   headerRight: props => <HeaderRight />,
        // }}
        // options={{header: props => <Header />}}
        // options={{
        //   tabBarLabel: 'Profile',
        //   tabBarIcon: ({color}) => (
        //     <FontAwesomeIcon icon={faUser} color={color} size={20} />
        //   ),
        // }}
        component={MyAccount}
      />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: 'rgb(53, 60, 62)',
    background: 'rgb(85, 91, 97)',
  },
};

function App(): JSX.Element {
  const connector = useWalletConnect();
  const {
    authenticate,
    authError,
    isAuthenticating,
    isAuthenticated,
    logout,
    Moralis,
  } = useMoralis();

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Auth">
        {/* Auth Navigator: Include Login and Signup */}
        {/* <Stack.Screen
          name="Auth"
          component={CryptoAuth}
          options={{ headerShown: false }}
        /> */}
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={Home}
          // Hiding header for Navigation Drawer
          options={{
            headerLeft: props => <HeaderLeft />,
            headerTitle: props => <HeaderAfter />,
            headerRight: props => <HeaderRight />,
          }}
          // options={{headerShown: false}}
          // options={({ route }) => ({
          //   headerTitle: getHeaderTitle(route),
          // })}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
