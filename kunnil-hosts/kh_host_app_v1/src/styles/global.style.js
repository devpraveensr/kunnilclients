import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default GlobalStyles = StyleSheet.create({
    screenheight: {
        height: height
    },
    height2: {
        height: height / 2
    },
    height3: {
        height: height / 3
    },
    height4: {
        height: height / 4
    },
    screenwidth : {
        width: width
    },
    fs15: {
        fontSize: 15
    },
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
    roundButton: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'Nunito-ExtraBold',
        fontSize: 20,
        color: 'white'
    },
    textInput: {
        backgroundColor: 'white',
        height: 40,
        borderRadius: 25,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
        borderColor: 'rgba(0,0,0,0.2)'
    }
})