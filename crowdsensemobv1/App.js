/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import AuthStack from './src/routes/authStack'
import Store from './store';
import { Provider } from 'react-redux';

const appStore = Store;
class App extends Component {

  constructor(props) {
    super(props)
  }

  
  render() {
    return (
      <>
        <Provider store = {appStore}>
          <AuthStack />
        </Provider>
      </>
    );
  }
};



export default App;

