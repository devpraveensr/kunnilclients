import React, { Component } from 'react';
import { 
    SafeAreaView,
    View,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    Keyboard,
    TouchableOpacity
} from "react-native";

import { GlobalStyles } from '../styles/app.style';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bg: require('../../assets/images/kunnilsplash1.png'),
            logo: require('../../assets/images/kunnillogowhite300.png')
        }
    }

    render() {
        return(
            <></>
        )
    }

}

export default Register