import React from 'react'
import { IconButton } from 'react-native-paper';
import LojaScreen from './lojaScreen'
import { createStackNavigator } from '@react-navigation/stack'

export default () => {
  const FeedStack = createStackNavigator();  
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen 
      name='Loja' 
      component={LojaScreen} 
      options={(route) => ({ title: route.name, headerStyle: 
        {
          backgroundColor:'#b2ebf2'
        }, 
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            alignSelf: 'center',
            marginEnd: 45,
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
    </FeedStack.Navigator>
  );
}