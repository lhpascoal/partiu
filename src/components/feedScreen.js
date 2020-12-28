import React from 'react'
import {TouchableOpacity ,ScrollView, ImageBackground, Text} from 'react-native'
import Estilo from './estilo'
import Pachecao from '../../assets/pachecao.digital.png'
import Olimpo from '../../assets/olimpo_catra.png'
import Quintapode from '../../assets/quintapode.png'
import Viashow from '../../assets/viashow_natal.png'
import Arena from '../../assets/arena.png'
import Loverio from '../../assets/loverio.png'
import Educacao from '../../assets/educacao.png'

export const feedScreen = ({navigation}) => {
    return (
    <ScrollView style={{backgroundColor: 'white'}}>
        <TouchableOpacity 
        name={'MAPA'}
        style={Estilo.imageStyle}
        onPress={() => navigation.navigate('Map')}
    >
        <ImageBackground
            style={Estilo.imageBackgroud}
            imageStyle={{borderRadius: 30, justifyContent: 'center', alignSelf: 'center', shadowRadius: 30}}
            source={Olimpo}
        ></ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity 
        name={'MAPA'}
        style={Estilo.imageStyle}
        onPress={() => navigation.navigate('Map')}
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
        onPress={() => navigation.navigate('Map')}
    >
        <ImageBackground
            style={Estilo.imageBackgroud}
            imageStyle={{borderRadius: 30, justifyContent: 'center', alignSelf: 'center', shadowRadius: 30}}
            source={Arena}
        ></ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity 
        name={'MAPA'}
        style={Estilo.imageStyle}
        onPress={() => navigation.navigate('Map')}
    >
        <ImageBackground
            style={Estilo.imageBackgroud}
            imageStyle={{borderRadius: 30, justifyContent: 'center', alignSelf: 'center', shadowRadius: 30}}
            source={Quintapode}
        ></ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity 
        name={'MAPA'}
        style={Estilo.imageStyle}
        onPress={() => navigation.navigate('Map')}
    >
        <ImageBackground
            style={Estilo.imageBackgroud}
            imageStyle={{borderRadius: 30, justifyContent: 'center', alignSelf: 'center', shadowRadius: 30}}
            source={Viashow}
        ></ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity 
        name={'MAPA'}
        style={Estilo.imageStyle}
        onPress={() => navigation.navigate('Map')}
    >
        <ImageBackground
            style={Estilo.imageBackgroud}
            imageStyle={{borderRadius: 30, justifyContent: 'center', alignSelf: 'center', shadowRadius: 30    }}
            source={Loverio}
        ></ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity 
        name={'MAPA'}
        style={Estilo.imageStyle}
        onPress={() => navigation.navigate('Map')}
    >
        <ImageBackground
            style={Estilo.imageBackgroud}
            imageStyle={{borderRadius: 30, justifyContent: 'center', alignSelf: 'center', shadowRadius: 30}}
            source={Educacao}
        ></ImageBackground>
        </TouchableOpacity>
    </ScrollView>
);
}