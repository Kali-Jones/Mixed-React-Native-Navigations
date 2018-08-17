import React, { Component } from 'react';
import { View, Text ,Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

//import HomeScreen from './screens/Tabs/HomeScreen';
//import newsScreen from './screens/Tabs/newsScreen';
//import StackNav from './src/Navigation/StackNav'
import WelcomeStack from './src/Navigation/MixedNav';


export default class App extends Component {
  render() {
    return (
     <WelcomeStack />
    );
  }  
}