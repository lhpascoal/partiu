import React from 'react'
import { IconButton } from 'react-native-paper';
import {feedScreen} from './feedScreen'
import { createStackNavigator } from '@react-navigation/stack'

export default () => {
  const FeedStack = createStackNavigator();  
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen 
      name='Feed' 
      component={feedScreen} 
      options={(route) => ({ title: route.name, headerStyle: 
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
              icon="camera"
              color="white"
            />
          ),
        })}
       />
    </FeedStack.Navigator>
  );
}