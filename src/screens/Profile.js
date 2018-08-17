import React from 'react';
import { Button, View, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

class Profile extends React.Component {
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
         <Text>Home</Text>
         <RaisedTextButton
              color="#0dd3fd"
              title="Next 2"
              onPress={() => this.props.navigation.navigate('Home2')}
            />
    </View>
    
    );
  }
}

export default Profile;