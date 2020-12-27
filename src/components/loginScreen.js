import Estilo from './estilo'
import React from 'react'
import {View, Text} from 'react-native'

export default props => {
    return(
        <View style={Estilo.viewContainer}>
            <Text style={Estilo.textCentral}> Oi </Text>
        </View>
    )
}