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
import History from './Components/Assets/History';
import HistoryHorse from './Components/Assets/HistoryHorse';
import News from './Components/News/news'
import BettingNew from './Components/News/BettingNew'
import WithDraw from './Components/withdraw/withdraw'

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

const data = [
  {
    id: 1,
    name: 'Assets',
    component: Assets,
  },
  {
    id: 2,
    name: 'HorseDetail',
    component: HorseDetail,
  },
  {
    id: 3,
    name: 'Transfer',
    component: Transfer,
  },
  {
    id: 4,
    name: 'MyAccount',
    component: MyAccount,
  },
  {
    id: 5,
    name: 'BetConfirm',
    component: BetConfirm,
  },
  {
    id: 6,
    name: 'History',
    component: History,
  },
  {
    id: 7,
    name: 'HistoryHorse',
    component: HistoryHorse,
  },
  {
    id: 8,
    name: 'News',
    component: News,
  },
  {
    id: 9,
    name: 'BettingNew',
    component: BettingNew,
  },
  {
    id: 10,
    name: 'WithDraw',
    component: WithDraw,
  },
];

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
      {data.map((e, i) => (
        <Stack.Screen
          key={i}
          name={e.name}
          // options={
          //   e.name !== 'Assets'
          //     ? {
          //         headerLeft: props => <HeaderLeft />,
          //         headerTitle: props => <HeaderAfter />,
          //         headerRight: props => <HeaderRight />,
          //       }
          //     : {
          //         headerTitle: props => <Header />,
          //         headerRight: props => <HeaderRight />,
          //       }
          // }
          // options={{
          //   tabBarLabel: 'Assets',
          //   tabBarIcon: ({color, focused}) => {
          //     return <FontAwesomeIcon icon={faCoins} color={color} size={20} />;
          //   },
          // }}
          component={e.component}
        />
      ))}
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
          options={{headerShown: false}}
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
