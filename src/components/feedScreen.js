import React from 'react'
import {TouchableOpacity ,ScrollView, ImageBackground} from 'react-native'
import Estilo from './estilo'
import Pachecao from '../../assets/pachecao.digital.png'

export default ({navigation}) => {
    return (
    <ScrollView>
        <TouchableOpacity 
        name={'MAPA'}
        style={Estilo.imageStyle}
        onPress={() => navigation.navigate('Mapa')}
    >
        <ImageBackground
            style={Estilo.imageBackgroud}
            imageStyle={{borderRadius: 30, justifyContent: 'center', alignSelf: 'center', shadowRadius: 30}}
            source={Pachecao}
        ></ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity 
        name={'MAPA'}
        style={Estilo.imageStyle}
        onPress={() => navigation.navigate('Mapa')}
    >
        <ImageBackground
            style={Estilo.imageBackgroud}
            imageStyle={{borderRadius: 30, justifyContent: 'center', alignSelf: 'center', shadowRadius: 30}}
            source={Pachecao}
        ></ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity 
        name={'MAPA'}
        style={Estilo.imageStyle}
        onPress={() => navigation.navigate('Mapa')}
    >
        <ImageBackground
            style={Estilo.imageBackgroud}
            imageStyle={{borderRadius: 30, justifyContent: 'center', alignSelf: 'center', shadowRadius: 30}}
            source={Pachecao}
        ></ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity 
        name={'MAPA'}
        style={Estilo.imageStyle}
        onPress={() => navigation.navigate('Mapa')}
    >
        <ImageBackground
            style={Estilo.imageBackgroud}
            imageStyle={{borderRadius: 30, justifyContent: 'center', alignSelf: 'center', shadowRadius: 30}}
            source={Pachecao}
        ></ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity 
        name={'MAPA'}
        style={Estilo.imageStyle}
        onPress={() => navigation.navigate('Mapa')}
    >
        <ImageBackground
            style={Estilo.imageBackgroud}
            imageStyle={{borderRadius: 30, justifyContent: 'center', alignSelf: 'center', shadowRadius: 30}}
            source={Pachecao}
        ></ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity 
        name={'MAPA'}
        style={Estilo.imageStyle}
        onPress={() => navigation.navigate('Mapa')}
    >
        <ImageBackground
            style={Estilo.imageBackgroud}
            imageStyle={{borderRadius: 30, justifyContent: 'center', alignSelf: 'center', shadowRadius: 30}}
            source={Pachecao}
        ></ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity 
        name={'MAPA'}
        style={Estilo.imageStyle}
        onPress={() => navigation.navigate('Mapa')}
    >
        <ImageBackground
            style={Estilo.imageBackgroud}
            imageStyle={{borderRadius: 30, justifyContent: 'center', alignSelf: 'center', shadowRadius: 30}}
            source={Pachecao}
        ></ImageBackground>
        </TouchableOpacity>
    </ScrollView>
);
}