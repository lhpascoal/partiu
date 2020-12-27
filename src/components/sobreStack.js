import React from 'react'
import { IconButton } from 'react-native-paper';
import SobreScreen from './sobreScreen'
// import DetailsScreen from './detailsScreen'
import { createStackNavigator } from '@react-navigation/stack'

export default props => {
    const SobreStack = createStackNavigator();
        return (
            <SobreStack.Navigator>
            <SobreStack.Screen 
            name="Settings" 
            component={SobreScreen}
            options={({ route }) => ({ title: route.name, headerStyle: 
                {
                backgroundColor:'#6200ee'
                }, 
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontSize: 24,
                    marginStart: -15,
                },
                headerLeft: () => (
                    <IconButton
                    onPress={() => alert('Essa funcionalidade ainda será implentada')}
                    icon='tools'
                    color="white"
                    />
                ),
                })}
            />

            {/* <SobreStack.Screen 
            name="Minha familía" 
            component={DetailsScreen} 
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
            /> */}
            </SobreStack.Navigator>
        );
}
