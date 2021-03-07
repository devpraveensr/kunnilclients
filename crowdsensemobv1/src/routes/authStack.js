import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';

import Splash from '../screens/splash';
import Login from '../screens/login';


const AuthenticateStack = createStackNavigator();
class AuthStack extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <NavigationContainer>
                <AuthenticateStack.Navigator initialRouteName="Splash">
                    <AuthenticateStack.Screen 
                        name="Splash" 
                        component={Splash} 
                        options={{
                            headerShown:false
                        }} 
                    />
                    <AuthenticateStack.Screen 
                        name="Login" 
                        component={Login} 
                        options={{
                            headerShown:false, 
                            gestureEnabled: true
                        }} 
                    />
                </AuthenticateStack.Navigator>
            </NavigationContainer>
        ) 
    }
}

export default AuthStack