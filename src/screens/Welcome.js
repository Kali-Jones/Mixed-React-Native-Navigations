import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { RaisedTextButton } from 'react-native-material-buttons';
import { Container } from 'native-base';


class Welcome extends React.Component {
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
         <Text>Welcome</Text>
          <RaisedTextButton
              color="#0dd3fd"
              title="Log In"
              onPress={() => this.props.navigation.navigate('Login')}
            />
          <RaisedTextButton
              color="#0dd3fd"
              title="Sign Up"
              onPress={() => this.props.navigation.navigate('Signup')}
            />
      </Container>
    
    );
  }
}

export default Welcome;