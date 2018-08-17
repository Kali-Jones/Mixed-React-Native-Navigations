import React, { Comment } from 'react';
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
//import IconFontAwesome from 'react-native-vector-icons';
import Welcome from '../screens/Welcome';
import Login from '../screens/LogIn';
import Signup from '../screens/Signup';
import Profile from '../screens/Profile';
import Profile2 from '../screens/Profile2';
import screen1 from '../screens/screen1';
import screen2 from '../screens/screen2';
import screen3 from '../screens/screen3';

const HomeStack = StackNavigator({
  Home: {
    screen: Profile,
    navigationOptions:() => ({
      title: 'Mixed Navigations',

    }),
  },
  Home2:Profile2
});

const ServiceStack = StackNavigator({
  Service: {
    screen: screen2,
    navigationOptions: () => ({
      title: 'SERVICES',

    }),
  },
});
const SearchStack = StackNavigator({
  Search: {
    screen: screen3,
    navigationOptions: () => ({
      title: 'SEARCH',
    }),
  },
});

const Tabs = TabNavigator({
  Home: HomeStack,
  Service: ServiceStack,
  Search: SearchStack,
},{
  tabBarPosition:'bottom',
  tabBarIcon:'true',
});


const Drawer = DrawerNavigator({
  Tabs:{
    screen:Tabs,
  },
});

const WelcomeStack = StackNavigator({
  First:Welcome,
  Login:Login,
  Signup:Signup,
  App:{  
    screen:Drawer,
     navigationOptions: {
        header: null,
      }
    },
},
)
export default WelcomeStack ;
