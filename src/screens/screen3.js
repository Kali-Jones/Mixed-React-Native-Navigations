import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';


class Screen3 extends React.Component {
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
         <Text>SCREEN 3</Text>
    </View>
    
    );
  }
}

export default Screen3;