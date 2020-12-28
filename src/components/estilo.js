import { StyleSheet, Dimensions } from 'react-native'

 
const styles = StyleSheet.create({
        viewContainer: {
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'white'
        },
        textCentral: {
            fontSize: 50, 
            color: '#3700b3', 
            textShadowRadius: 25, 
            fontFamily: 'sans-serif'
        },
        buttonContainer: {
            borderRadius: 25, 
            backgroundColor: '#f5f5f5', 
            height: 30, 
            margin: 15,
            backgroundColor: '#3700b3'
        },
        buttonText: {
            fontSize: 20, 
            margin: 10, 
            justifyContent: 'center', 
            marginVertical: 1,
            color: "#fff"
        },
        viewRow: {
            flex: 1,
            backgroundColor: '#e0f7fa'
        },
        imageStyle: {
            backgroundColor: 'black', 
            borderRadius: 30,  
            marginTop: 10, 
            width: Dimensions.get('screen').width-20, 
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center'

        },
        imageBackgroud: {
            width: Dimensions.get('screen').width-20, 
            height: Dimensions.get('screen').width/2,
        },
        textInput: {
            height: 36,
            padding: 10,
            marginTop: 20,
            marginLeft: 10,
            marginRight: 50,
            fontSize: 18,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#6200ee',
            backgroundColor: 'white'
        },
        viewTextInput: {
            backgroundColor: 'transparent',
            position: 'absolute', 
            top: 0,
            left: 0,
            right: 0
        },
        mapView:{
            width: Dimensions.get('window').width, 
            height: Dimensions.get('window').height
        } 
    })

export default styles;