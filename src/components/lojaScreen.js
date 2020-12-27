import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

export default () => {
    return (
    <View style={Estilo.viewContainer}>
        <Text style={Estilo.textCentral}>Oi</Text>
    </View>
);
}