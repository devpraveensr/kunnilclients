import React, { Component } from 'react';
import { 
    SafeAreaView,
    View,
    ImageBackground,
    Image,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
    TouchableOpacity
 } from "react-native";
 import { SplashStyles, LoginStyles } from '../styles/app.style';

 class Login extends Component {
    constructor() {
        super();
        this.state = {
            bg: require('../../assets/images/kunnilsplash1.png'),
            logo: require('../../assets/images/kunnillogowhite300.png'),
            styles: {
                splash: SplashStyles,
                login: LoginStyles
            }
        }
    }

    render() {
        const { bg, logo, styles } = this.state
        return(
            <SafeAreaView style={styles.login.loginWrap}>
                <ImageBackground source={bg} style={styles.splash.splashBgImage} >
                    <View style={styles.login.logoWrap}>
                    
                        <Image source={logo} style={styles.splash.splashLogo} />
                        <Text style={styles.login.title}>Kunnil Holidays</Text>
                
                    </View>
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.login.loginWrap} >
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            
                            <View style={styles.login.loginForm}>
                                <TextInput 
                                    placeholder="Username / Email" 
                                    placeholderTextColor="#2582C9" 
                                    style={styles.login.loginTextInput} 
                                    keyboardType="email-address"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    editable
                                />
                                <TextInput 
                                    placeholder="Password" 
                                    placeholderTextColor="#2582C9" 
                                    style={styles.login.loginTextInput} 
                                    keyboardType="email-address"
                                    autoCorrect={false}
                                    returnKeyType="go"
                                    secureTextEntry
                                    editable
                                />
                                <TouchableOpacity style={styles.login.loginButton}>
                                    <Text style={styles.login.loginButtonText}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </SafeAreaView>
        )
    }
 }

 export default Login;
