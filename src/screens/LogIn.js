import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { RaisedTextButton } from 'react-native-material-buttons';

class LogIn extends React.Component {
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
         <Text>LOG IN </Text>
         <RaisedTextButton
              color="#0dd3fd"
              title="Submit"
              onPress={() => this.props.navigation.navigate('App')}
            />
    </View>
    
    );
  }
}

export default LogIn;