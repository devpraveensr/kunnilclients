import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
    appWrapper: {
        flex: 1,
        backgroundColor: 'white'
    },
    button: {
        height: 60,
        marginHorizontal: 30,
        marginVertical: 10,
        borderRadius: 35,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Nunito-ExtraBold',
        fontSize: 20,
        color: 'white'
    }
})

export const SplashStyles = StyleSheet.create({

    splashBgImage : {
        width: '100%',
        height: '100%'
    },
    splashLogo: {
        width: 100,
        height: 100
    },
    splashLogoWrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    splashTitle: {
        fontFamily: 'ShipporiMincho-ExtraBold',
        fontSize: 25,
        letterSpacing: 3,
        color: 'white',
        marginTop: 10
    }
})

export const LoginStyles = StyleSheet.create({
    title: {
        fontFamily: "PTSans-Bold",
        fontSize: 32,
        color: "#ffffff"
    },
    loginWrap: {
        flex: 1,
        
    },
    logoWrap: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    loginForm: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 20
        // marginTop: "10%"
        // width: "100%",
        // height: 300,
        // backgroundColor: "#ffffff"
    },
    loginTextInput: {
        width : "80%",
        backgroundColor: "#ffffff",
        borderRadius: 5,
        borderLeftWidth: 5,
        borderLeftColor: "#2582C9",
        fontFamily: "PTSans-Italic",
        fontSize: 15,
        paddingHorizontal: 15,
        paddingVertical: 7,
        marginTop: 10
    },
    loginButton: {
        width: "80%",
        marginTop: 10,
        backgroundColor: "#2582C9",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    loginButtonText: {
        fontFamily: "PTSans-Bold",
        fontSize: 15,
        paddingVertical: 10,
        color: "#ffffff"
    }
})