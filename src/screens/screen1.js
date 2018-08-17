import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';


class Screen1 extends React.Component {
  static navigationOptions = {
  };
  render() {
    return (
    <View style={{
            flex: 1,
            backgroundColor: 'lightgrey',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
         <Text>SCREEN 1</Text>
    </View>
    
    );
  }
}

export default Screen1;