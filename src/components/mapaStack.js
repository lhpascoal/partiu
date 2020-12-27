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
          name="Mapa"
          component={MapaScreen} 
          options={({ route }) => ({ title: 'Mapa', headerStyle: 
            {
              backgroundColor:'#b2ebf2'
            }, 
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
                alignSelf: 'center',
                marginEnd: 55,
              },
              headerLeft: () => (
                <IconButton
                  onPress={() => alert('Essa funcionalidade ainda será implentada')}
                  color="#00cc00"
                  icon="flower"
                  color="white"
                />
              ),
            })}
        />  
      </MapaStack.Navigator>
    );
  }