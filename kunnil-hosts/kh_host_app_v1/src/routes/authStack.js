import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';

import Login from '../screens/login';
import Register from '../screens/register';


const AuthenticateStack = createStackNavigator();
class AuthStack extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <NavigationContainer>
                <AuthenticateStack.Navigator initialRouteName="Login">
                    <AuthenticateStack.Screen 
                        name="Login" 
                        component={Login} 
                        options={{
                            headerShown:false, 
                            gestureEnabled: true
                        }} 
                    />
                    <AuthenticateStack.Screen 
                        name="Register" 
                        component={Register} 
                        options={{
                            title:'Kunnil Holidays'
                        }} 
                    />
                </AuthenticateStack.Navigator>
            </NavigationContainer>
        ) 
    }
}

export default AuthStack