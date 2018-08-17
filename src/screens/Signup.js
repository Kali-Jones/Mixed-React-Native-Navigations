import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { RaisedTextButton } from 'react-native-material-buttons';

class SignUp extends React.Component {
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
         <Text>Sign Up</Text>
          <RaisedTextButton
              color="#0dd3fd"
              title="Join"
              onPress={() => this.props.navigation.navigate('Login')}
            />
    </View>
    
    );
  }
}

export default SignUp;