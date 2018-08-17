import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

class Profile2 extends React.Component {
  static navigationOptions = {};
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightgrey',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Home stack Page 2</Text>
        <RaisedTextButton
          color="#0dd3fd"
          title="Back"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default Profile2;
