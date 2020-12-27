import React from 'react'
import LoginScreen from './loginScreen'
import { createStackNavigator } from '@react-navigation/stack'

export default props => {
    const LoginStack = createStackNavigator();
        return (
          
            <LoginStack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={({ route }) => ({ title: route.name, headerStyle: 
                {
                backgroundColor:'#b2ebf2'
                }, 
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 24,
                    alignSelf: 'center',
                    marginEnd: 55
                },
                })}
            />
 
        );
}
