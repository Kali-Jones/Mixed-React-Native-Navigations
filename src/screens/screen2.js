import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Container } from 'native-base';

class Screen2 extends React.Component {
  static navigationOptions = {
  };
  render() {
    return (
    <Container style={{
            flex: 1,
            backgroundColor: 'lightgrey',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
         <Text>SCREEN 2</Text>
    </Container>
    
    );
  }
}

export default Screen2;