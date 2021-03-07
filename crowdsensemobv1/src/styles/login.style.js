import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export default LoginStyles = StyleSheet.create({

    loginBgImage : {
        width: '100%',
        height: '100%'
    },
    loginLogo: {
        width: 100,
        height: 100
    },
    loginLogoWrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginTitle: {
        fontFamily: 'ShipporiMincho-ExtraBold',
        fontSize: 25,
        letterSpacing: 3,
        color: '#50C0FF',
        marginTop: 10
    },
    signinButton: {
        height: 50,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
        backgroundColor: 'white',
        marginHorizontal: 20,
        // borderColor: 'blue',
        // borderWidth: 0.5
    },
    signinButtonText: {
        color: 'black',
        fontSize: 15
    },
    signinCloseButton: {
        backgroundColor : 'white',
        position: 'absolute',
        top: 0,
        left: width / 2 -20,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3
    },
    signinCloseButtonText: {
        fontFamily: 'Nunito-ExtraBold',
    }
})