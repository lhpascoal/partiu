import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FeedStack from '../components/feedStack'
import MapaStack from '../components/mapaStack'
import SobreStack from '../components/sobreStack'
import LojaStack from '../components/loginStack'

export default props =>{
   
    const Tab = createBottomTabNavigator(); 

    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName

                switch (route.name) {
                    case 'Feed':
                        iconName = focused
                            ? 'home-outline'
                            : 'home-outline'
                        break
                    case 'Mapa':
                        iconName = focused
                            ? 'map-outline'
                            : 'map-outline'
                        break
                    case 'Loja':
                        iconName = focused
                            ? 'skull-outline'
                            : 'skull-outline'
                        break
                    case 'Sobre':
                        iconName = focused
                            ? 'heart-outline'
                            : 'heart-outline'
                        break
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'black',
            showLabel: true,
            labelStyle: { fontSize: 10 },
            style: {
                backgroundColor: '#b2ebf2'
            }  
            }} initialRouteName="Feed" >

            <Tab.Screen name="Feed" component={FeedStack} />
            <Tab.Screen name="Mapa" component={MapaStack}   />
            <Tab.Screen name="Loja" component={LojaStack}   />
            <Tab.Screen name="Sobre" component={SobreStack} />
        </Tab.Navigator>
)}