import React from 'react'
import { View, Platform } from 'react-native'
import Estilo from './estilo'
import LottieView from 'lottie-react-native'
import animacao2 from  './animacao.json'
import erro404 from '../files/717-battery.json'
// import animacao2 from '../files/42357-christmas.json'

export default _ => {
    // const texto = 'Esta pagina está em fase de desenvolvimento'.toUpperCase()
    // const texto2 = 'Clique abaixo para saber mais sobre nós'
    // const cliqueaqui = 'LogOut'.toUpperCase()

    const animacao = Platform.OS === 'ios' ? animacao2 : erro404

    return (
      <View style={Estilo.viewContainer}>
        <LottieView  
          resizeMode="contain"
          // autoSize 
          source={animacao}
          loop
          autoPlay
        />
      </View>
    );
  }