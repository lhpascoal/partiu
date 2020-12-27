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
            backgroundColor: 'black'
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
        }
        
    })

export default styles;