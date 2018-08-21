import React, { Component } from 'react';

import {
  Text,
  View,
  Button,
  Image,
  StyleSheet
} from 'react-native';

export default class MyNotificationsScreen extends Component {
    
    static navigationOptions = ({ navigation }) => ({
      title: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/notiicon.png')}
          style={[styles.icon]}
        />
      ),
    });
  
    render() {
      return (
        <View>
          <Text>This is NOTIFICATION Screen</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Home')}
            title="Go to home"
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  })