import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FeedStack from '../components/feedStack'
import MapaStack from '../components/mapaStack'
import SobreStack from '../components/sobreStack'
import LojaStack from '../components/lojaStack'


export default props =>{
   
    const Tab = createBottomTabNavigator();
    const Screen = createStackNavigator(); 

    return(

        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName
                let teste
                switch (route.name) {
                    case 'Feed':
                        iconName = focused
                            ? 'home'
                            : 'home-outline'
                        break
                    case 'Map':
                        iconName = focused
                            ? 'map'
                            : 'map-outline'
                        break
                    case 'Store':
                        iconName = focused
                            ? 'cart'
                            : 'cart-outline'
                        break
                    case 'Settings':
                        iconName = focused
                            ? 'settings'
                            : 'settings-outline'
                        break
                }
                return <Ionicons name={iconName} size={size} color={color} />;

            },
            })}
            tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            keyboardHidesTabBar: true,
            showLabel: true,
            labelStyle: { fontSize: 10 },
            style: {
                backgroundColor: '#6200ee'
            }  
            }} initialRouteName="Feed" >

                <Tab.Screen name="Feed" component={FeedStack} />
                <Tab.Screen name="Map" component={MapaStack}   />
                <Tab.Screen name="Store" component={LojaStack}   />
                <Tab.Screen name="Settings" component={SobreStack} />
        </Tab.Navigator>



)}