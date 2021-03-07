import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { hasToken } from '../actions/authenticate'
import { 
    SafeAreaView,
    View,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    Keyboard
} from "react-native";

import { GlobalStyles, LoginStyles, SplashStyles } from '../styles/app.style';
import Svg, { Image, Rect } from 'react-native-svg';
import Animated, { Easing } from 'react-native-reanimated';

import AsyncSessionStorage from '../components/shared/asyncStorage'


const { Value } = Animated
class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: require('../../assets/images/logo.png'),
            title: require('../../assets/images/logoTitle.png'),
            autoLogin: props.autologin
        }
        console.log(AsyncSessionStorage)
        AsyncSessionStorage.retrieveItem('userData').then((error, data) => {
            console.log(error, data)
            props.hasToken(data);
        })
        // setTimeout(() => {
        //     props.navigation.replace('Login')
        // }, 3000);
    }

    static getDerivedStateFromProps(nextProps) {
       
        return {autoLogin: nextProps.autologin}
        
    }

    componentDidUpdate() {
        if(!this.state.autoLogin) {
            this.props.navigation.replace('Login');
        }
    }

    render() {
        const { logo } = this.state
        return(
            <View style={{...GlobalStyles.appWrapper}}>
                <Animated.View style={{...StyleSheet.absoluteFill}}>
                    <Svg height={GlobalStyles.screenheight.height} width={GlobalStyles.screenwidth.width}>
                        <Rect x="0" y="0" width={GlobalStyles.screenwidth.width} height={GlobalStyles.screenheight.height} fill="#1b212a"></Rect>
                    </Svg>
                </Animated.View>
                <Animated.View style={{...LoginStyles.loginLogoWrap}}>
                    <Svg height={SplashStyles.splashLogo.height} width={SplashStyles.splashLogo.width} >
                        <Image href={logo} height={SplashStyles.splashLogo.height}  width={SplashStyles.splashLogo.width} preserveAspectRatio="xMidyMid slice" />
                    </Svg>
                </Animated.View>
            </View>
        )
    }
}

const mapStateToApp = (state) => {
    return {
        autologin: state.settings.userData.autologin
    }
}
  
const mapDispatchToProps = {
    hasToken
};

export default connect(mapStateToApp, mapDispatchToProps)(Splash)