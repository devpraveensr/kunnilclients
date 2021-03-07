/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import AuthStack from './src/routes/authStack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props)
  }

  
  render() {
    return (
        <AuthStack />
    );
  }
};



export default App;
