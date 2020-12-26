import * as React from 'react';
import { TouchableOpacity, Text, View, Dimensions, ImageBackground } from 'react-native';
import { IconButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Estilo from './src/components/estilo'
import Familia3 from './assets/familia3.png'
import Familia2 from './assets/familia2.png'
import FeedScreen from './src/components/feed'
import MapaScreen from './src/components/mapaSreen'

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black' }}>
      <ImageBackground
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/2, flex:1}}
        source={Familia2}
      />
      <ImageBackground
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/2, flex:1}}
        source={Familia3}
        
      />
    </View>
  );
}


function SettingsScreen({ navigation }) {
  const texto = 'Esta pagina está em fase de desenvolvimento'.toUpperCase()
  const texto2 = 'Clique abaixo para saber mais sobre nós'
  const cliqueaqui = 'clique aqui'.toUpperCase()
  return (
    <View style={Estilo.viewContainer}>
      <Text style={[Estilo.textCentral, {textAlign: 'center', fontSize:36, marginBottom: 20}]}>{texto}</Text>
      <Text style={Estilo.textCentral, {textAlign: 'center', fontSize:30, color:'black', padding: 10}}>{texto2}</Text>
      <TouchableOpacity
        style={Estilo.buttonContainer}
        title=""
        onPress={() => navigation.navigate('Minha familía')}
      >
        
        <Text style={Estilo.buttonText}>{cliqueaqui}</Text>
      </TouchableOpacity>
    </View>
  );
}

const FeedStack = createStackNavigator();

function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen 
      name='Feed' 
      component={FeedScreen} 
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

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen 
      name="Sobre" 
      component={SettingsScreen}
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
      <SettingsStack.Screen 
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
      />
    </SettingsStack.Navigator>
  );
}

function MapaStackScreen() {
  return (
    <SettingsStack.Navigator
    >
      <SettingsStack.Screen 
        name="Mapa"
        component={MapaScreen} 
        options={({ route }) => ({ title: route.name, headerStyle: 
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
    </SettingsStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();


export default function App() {
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
        <Tab.Screen name="Feed" component={FeedStackScreen} />
        <Tab.Screen name="Mapa" component={MapaStackScreen}   />
        <Tab.Screen name="Sobre" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
