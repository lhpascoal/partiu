import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FeedStack from './src/components/feedStack'
import MapaStack from './src/components/mapaStack'
import SobreStack from './src/components/sobreStack'

export default function App() {
  const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
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
            }} initialRouteName="Feed"
            >
          <Tab.Screen name="Feed" component={FeedStack} />
          <Tab.Screen name="Mapa" component={MapaStack}   />
          <Tab.Screen name="Sobre" component={SobreStack} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}
