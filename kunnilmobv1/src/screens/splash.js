import React, { Component } from 'react';
import { 
    SafeAreaView,
    View,
    ImageBackground,
    Image,
    StyleSheet,
    Text,
    Dimensions
 } from "react-native";
 import Animated from 'react-native-reanimated';
 import { TapGestureHandler, State } from 'react-native-gesture-handler';

 import { GlobalStyles, SplashStyles } from '../styles/app.style';

 const { Value, event, block, cond, eq, set } = Animated;
 class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bg: require('../../assets/images/kunnilsplash1.png'),
            logo: require('../../assets/images/kunnillogowhite300.png')
        }
        // this.splashTimeOut = setTimeout(() => {
        //     props.navigation.replace('Login');
        // }, 3000);
        this.signInOpacity = new Value(-1);
        this.tapOnSignIn = event([{
            nativeEvent: ({ state }) => block([
                cond( eq(state, State.END), set(this.signInOpacity, 0) )
            ])
        }])
    }

    

    render() {
        const { bg, logo } = this.state
        const { width, height } = Dimensions.get('window');
        return(
            <View style={{...GlobalStyles.appWrapper, justifyContent: 'flex-end'}}>
                <View style={{...StyleSheet.absoluteFill}}>
                    <Image source={bg} style={SplashStyles.splashBgImage} />
                </View> 
                <View style={SplashStyles.splashLogoWrap}>
                    <Image source={logo} style={SplashStyles.splashLogo} />
                    <Text style={SplashStyles.splashTitle}>Kunnil Holidays</Text>
                </View>
                
                <View style={{ height: height / 3 }}>
                    <TapGestureHandler onHandlerStateChange={this.tapOnSignIn}>
                        <Animated.View style={{...GlobalStyles.button, opacity: this.signInOpacity}}>
                            <Text style={{...GlobalStyles.buttonText}}>Sign In</Text>
                        </Animated.View>
                    </TapGestureHandler>
                    <View style={{...GlobalStyles.button}}>
                        <Text style={{...GlobalStyles.buttonText}}>Register</Text>
                    </View>
                </View>
            </View>
            // <ImageBackground source={bg} style={styles.splashBgImage} >
            //     <SafeAreaView style={styles.splashLogoWrap}>
            //         <Image source={logo} style={styles.splashLogo} />
            //     </SafeAreaView> 
            // </ImageBackground>
        )
    }
 }

 export default Splash;
