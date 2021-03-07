/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Splash from './src/screens/splash';
import Login from './src/screens/login';

const Stack = createStackNavigator();
class App extends Component {

  constructor(props) {
    super(props)
  }

  
  render() {
    return (
      <>
        <Splash />
        {/* <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          </Stack.Navigator>
        </NavigationContainer> */}

      </>
    );
  }
};



export default App;
