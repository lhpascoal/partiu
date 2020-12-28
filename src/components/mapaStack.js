import React from 'react'
import MapaScreen from './mapaSreen'
import { IconButton } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack'

export default () => {
    const MapaStack = createStackNavigator();
    return (
      <MapaStack.Navigator
      >
        <MapaStack.Screen 
          name="Map"
          component={MapaScreen} 
          options={({ route }) => ({ title: route.name, 
            headerStyle: 
            {
              backgroundColor:'#6200ee',
            },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontSize: 24,
                marginStart: -15,
              },
              headerLeft: () => (
                <IconButton
                  onPress={() => alert('Essa funcionalidade ainda será implentada')}
                  color="#00cc00"
                  icon="routes"
                  color="white"
                />
              ),
            })}
        />  
      </MapaStack.Navigator>
    );
  }