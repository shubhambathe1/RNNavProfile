/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

// Navigators
import { DrawerNavigator } from 'react-navigation';

import MyHomeScreen from './src/MyHomeScreen';
import MyNotificationScreen from './src/MyNotificationScreen';

export default class NavProfileApp extends Component {
  render() {
    return (
      <Drawer />
    );
  }
}

export const Drawer = DrawerNavigator({
  Home: { screen: MyHomeScreen },
  Notifications: { screen: MyNotificationScreen }
}, {
    initialRouteName: 'Home',
})