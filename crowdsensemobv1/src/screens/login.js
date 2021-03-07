import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { loginUser } from '../actions/authenticate'
import { 
    SafeAreaView,
    View,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    Keyboard
 } from "react-native";

 import Svg, { Image, Circle, ClipPath, Rect } from 'react-native-svg';
 import Animated, { Easing } from 'react-native-reanimated';
 import { TapGestureHandler, State } from 'react-native-gesture-handler';

 import { GlobalStyles, LoginStyles } from '../styles/app.style';

 const { Value, event, block, cond, eq, set, Clock, startClock, stopClock, debug, timing, clockRunning, interpolate, Extrapolate, concat } = Animated;

 class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: require('../../assets/images/logo.png'),
            title: require('../../assets/images/logoTitle.png'),
            data: {
                username: '',
                password: ''
            }
        }
        this.emailInput = '';
        this.passInput = '';
        this.signInOpacity = new Value(1);
        this.signInCloseOpacity = new Value(1)
        this.onStateChange = event([{
            nativeEvent: ({ state }) => block([
                cond( eq(state, State.END), set(this.signInOpacity, this.runTiming(new Clock(), 1, 0)) )
            ])
        }])
        this.oncloseLogin = event([{
            nativeEvent: ({ state }) => block([
                cond( eq(state, State.END), set(this.signInOpacity, this.runTiming(new Clock(), 0, 1)) )
            ])
        }])
        this.signInY = interpolate(this.signInOpacity, {
            inputRange: [0, 1],
            outputRange: [100, 0],
            extrapolate: Extrapolate.CLAMP
        })
        this.BgY = interpolate(this.signInOpacity, {
            inputRange: [0, 1],
            outputRange: [-GlobalStyles.height3.height -55 , 0],
            extrapolate: Extrapolate.CLAMP
        })
        this.loginViewZIndex = interpolate(this.signInOpacity, {
            inputRange: [0, 1],
            outputRange: [1 , -1],
            extrapolate: Extrapolate.CLAMP
        })
        this.loginViewOpacity = interpolate(this.signInOpacity, {
            inputRange: [0, 1],
            outputRange: [1 , 0],
            extrapolate: Extrapolate.CLAMP
        })
        this.loginViewY = interpolate(this.signInOpacity, {
            inputRange: [0, 1],
            outputRange: [0 , 100],
            extrapolate: Extrapolate.CLAMP
        })
        this.rotatesignInClose = interpolate(this.signInOpacity, {
            inputRange: [0, 1],
            outputRange: [180 , 360],
            extrapolate: Extrapolate.CLAMP
        })
    }

    runTiming = (clock, value, dest) => {
        const state = {
          finished: new Value(0),
          position: new Value(0),
          time: new Value(0),
          frameTime: new Value(0)
        };
      
        const config = {
          duration: 1000,
          toValue: new Value(0),
          easing: Easing.inOut(Easing.ease)
        };
      
        return block([
          cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, dest),
            startClock(clock)
          ]),
          timing(clock, state, config),
          cond(state.finished, debug('stop clock', stopClock(clock))),
          state.position
        ]);
    }

    componentDidMount() {
        this.KeyboardShowListener = Keyboard.addListener('keyboardDidShow', (e) => { 
            this.signInCloseOpacity.setValue(0)
        } )

        this.KeyboardHideListener = Keyboard.addListener('keyboardDidHide', (e) => { 
            this.signInCloseOpacity.setValue(1)
        } )
    }

    componentWillUnmount() {
        this.KeyboardShowListener.remove();
        this.KeyboardHideListener.remove();
    }

    onFieldTextChange = (fieldType, fieldValue) => {
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                [`${fieldType}`] : fieldValue
            }
        })
    }

    submitLogin = () => {
        const { data } = this.state
        console.log(data)
    }

    render() {
        const { logo, title, data } = this.state
        return(
            <View style={{...GlobalStyles.appWrapper, justifyContent: 'flex-end'}}>
                <Animated.View style={{...StyleSheet.absoluteFill, transform: [{translateY: this.BgY}]}}>
                    <Svg height={GlobalStyles.screenheight.height + 50} width={GlobalStyles.screenwidth.width} >
                        <ClipPath id="clip">
                            <Circle r={GlobalStyles.screenheight.height + 50} cx={GlobalStyles.screenwidth.width /2} />
                        </ClipPath>
                        {/* <Image href={bg} height={GlobalStyles.screenheight.height + 50}  width={GlobalStyles.screenwidth.width} preserveAspectRatio="xMidyMid slice" clipPath="url(#clip)" /> */}
                        <Rect x="0" y="0" width={GlobalStyles.screenwidth.width} height={GlobalStyles.screenheight.height + 50} fill="#1B212A" clipPath="url(#clip)"></Rect>
                    </Svg>
                </Animated.View> 
                <View style={{...LoginStyles.loginLogoWrap,  marginTop: 50}}>
                    <Svg height={LoginStyles.loginLogo.height} width={LoginStyles.loginLogo.width} >
                        <Image href={logo} height={LoginStyles.loginLogo.height}  width={LoginStyles.loginLogo.width} preserveAspectRatio="xMidyMid slice" />
                    </Svg>
                    <Svg height={40} width={GlobalStyles.screenwidth.width /1.8} >
                        <Image href={title} height={40}  width={GlobalStyles.screenwidth.width /1.8} preserveAspectRatio="xMidyMid slice" />
                    </Svg>
                    
                </View>
                
                <View style={{...GlobalStyles.height3}}>
                    <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                        <Animated.View style={{...GlobalStyles.button, marginTop: 50, opacity: this.signInOpacity, transform: [{translateY: this.signInY}]}}>
                            <Text style={{...GlobalStyles.buttonText}}>Sign In</Text>
                        </Animated.View>
                    </TapGestureHandler>
                    
                    
                    <Animated.View style={{...StyleSheet.absoluteFill,...GlobalStyles.height3, top: null, justifyContent: 'center', zIndex: this.loginViewZIndex, opacity: this.loginViewOpacity, transform: [{translateY: this.loginViewY}]}}>
                        <TapGestureHandler onHandlerStateChange={this.oncloseLogin}>
                            <Animated.View style={{...GlobalStyles.roundButton,...LoginStyles.signinCloseButton, opacity: this.signInCloseOpacity}}>
                                <Animated.Text style={{...GlobalStyles.fs15,...LoginStyles.signinCloseButtonText, transform: [{rotate : concat(this.rotatesignInClose,'deg')}]}}>X</Animated.Text>
                            </Animated.View>
                        </TapGestureHandler>
                        <TextInput 
                            style={{...GlobalStyles.textInput, marginTop: 50}} 
                            placeholder="Email" 
                            placeholderTextColor="black" 
                            keyboardType='email-address' 
                            textContentType='emailAddress' 
                            returnKeyType="next" 
                            onSubmitEditing={() => {this.passInput.focus()}} 
                            blurOnSubmit={false}
                            ref={(input) => {this.emailInput = input}}
                            onChangeText={(username) => this.onFieldTextChange('username', username)}
                            value={data.username}
                        />
                        <TextInput 
                            style={{...GlobalStyles.textInput}} 
                            placeholder="Password" 
                            placeholderTextColor="black" 
                            keyboardType='default' 
                            secureTextEntry={true} 
                            textContentType='password' 
                            returnKeyType="done" 
                            ref={(input) => {this.passInput = input}}   
                            onChangeText={(password) => this.onFieldTextChange('password', password)}
                            value={data.password}
                            onSubmitEditing={this.submitLogin}
                        />
                        <Animated.View style={{...GlobalStyles.button, ...LoginStyles.signinButton}}>
                            <Text style={{...GlobalStyles.buttonText, ...LoginStyles.signinButtonText}}>Sign In</Text>
                        </Animated.View>
                        
                    </Animated.View>
                </View>
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
    loginUser
};

 export default connect(mapStateToApp, mapDispatchToProps)(Login);
