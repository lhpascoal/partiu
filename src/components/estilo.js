import { StyleSheet } from 'react-native'

 
const styles = StyleSheet.create({
        viewContainer: {
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: '#e0f7fa'
        },
        textCentral: {
            fontSize: 50, 
            color: '#000', 
            textShadowRadius: 25, 
            fontFamily: 'sans-serif'
        },
        buttonContainer: {
            borderRadius: 25, 
            backgroundColor: '#f5f5f5', 
            height: 30, margin: 15,
            backgroundColor: 'black'
        },
        buttonText: {
            fontSize: 20, 
            margin: 10, 
            justifyContent: 'center', 
            marginVertical: 1,
            color: "#fff"
        }
    })

export default styles;