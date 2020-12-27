import React from 'react'
import { IconButton } from 'react-native-paper';
import LojaScreen from './lojaScreen'
import { createStackNavigator } from '@react-navigation/stack'

export default ({navigation}) => {
  const FeedStack = createStackNavigator();  
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen 
      name='Store' 
      component={LojaScreen} 
      options={(route) => ({ title: route.name, headerStyle: 
        {
          backgroundColor:'#6200ee'
        }, 
          headerTintColor: '#fff',
          headerTitleStyle: {
            marginStart: -15,
            fontSize: 24,  
          },
          headerLeft: () => (
            <IconButton
              onPress={() => alert('Essa funcionalidade ainda será implentada')}
              color="#00cc00"
              icon="store"
              color="white"
            />
          ),
        })}
       />
    </FeedStack.Navigator>
  );
}