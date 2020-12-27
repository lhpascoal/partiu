import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navegacao/tabNavigator'
import loginScreen from './src/components/loginScreen';

export default function App() {

    return (
      <NavigationContainer>
        <TabNavigator/>
        </NavigationContainer>
    );
}