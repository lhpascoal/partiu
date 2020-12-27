import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FeedStack from '../components/feedStack'
import MapaStack from '../components/mapaStack'
import SobreStack from '../components/sobreStack'
import LojaStack from '../components/lojaStack'
import { ScreenContainer } from 'react-native-screens';

export default props =>{
   
    const Tab = createBottomTabNavigator();
    const Screen = createStackNavigator(); 

    return(

        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName

                switch (route.name) {
                    case 'Feed':
                        iconName = focused
                            ? 'home'
                            : 'home-outline'
                        break
                    case 'Mapa':
                        iconName = focused
                            ? 'map'
                            : 'map-outline'
                        break
                    case 'Loja':
                        iconName = focused
                            ? 'cart'
                            : 'cart-outline'
                        break
                    case 'Sobre':
                        iconName = focused
                            ? 'heart'
                            : 'heart-outline'
                        break
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            showLabel: true,
            labelStyle: { fontSize: 10 },
            style: {
                backgroundColor: '#6200ee'
            }  
            }} initialRouteName="Feed" >

                <Tab.Screen name="Feed" component={FeedStack} />
                <Tab.Screen name="Mapa" component={MapaStack}   />
                <Tab.Screen name="Loja" component={LojaStack}   />
                <Tab.Screen name="Sobre" component={SobreStack} />
        </Tab.Navigator>



)}