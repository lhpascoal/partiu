import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Estilo from './estilo'
import { useFonts } from 'expo-font';

const fontMedieval = { 'MedievalSharp' : require('../../assets/MedievalSharp-Regular.ttf') }

export default ({ navigation }) => {
    const texto = 'Esta pagina está em fase de desenvolvimento'.toUpperCase()
    // const texto2 = 'Clique abaixo para saber mais sobre nós'
    // const cliqueaqui = 'LogOut'.toUpperCase()

    return (
      <View style={Estilo.viewContainer}>
        <Text style={[Estilo.textCentral, {textAlign: 'center', fontSize:36, marginBottom: 20}]}>{texto}</Text>
        {/* <Text style={Estilo.textCentral, {textAlign: 'center', fontSize:30, color:'black', padding: 10}}>{texto2}</Text> */}
        {/* <TouchableOpacity
          style={Estilo.buttonContainer}
          onPress={() => navigation.push('Login')}
        >
          
          <Text style={Estilo.buttonText}>{cliqueaqui}</Text>
        </TouchableOpacity> */}
      </View>
    );
  }