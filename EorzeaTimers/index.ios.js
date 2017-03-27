/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import App from './App';

import NotificationsIOS from 'react-native-notifications';


export default class EorzeaTimers extends Component {
  onButtonPress() {
    console.log('button pressed');
    debugger;
    let localNotification = NotificationsIOS.localNotification({
        	alertBody: "Local notificiation!",
        	alertTitle: "Local Notification Title",
        	alertAction: "Click here to open",
        	soundName: "chime.aiff",
        	category: "SOME_CATEGORY",
        	userInfo: { }
        });
  }
  render() {
    return (
      <App>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <Button onPress={this.onButtonPress} title="Push Me!" />
        </View>
      </App>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('EorzeaTimers', () => EorzeaTimers);
