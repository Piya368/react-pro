import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  StatusBar
  } from 'react-native';

  import Login from './src/pages/Login';

export default class App extends Components<{}> {
  render(){
  return (
    <View style={styles.container}>
    <StatusBar
    <backgroundColor="#1c313a"
    barStyle="light-content"
    />
    <Login/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
