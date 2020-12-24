import * as React from 'react';
import { TouchableOpacity, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Marker } from 'react-native-maps';
import Estilo from './src/components/estilo'


function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black' }}>
      <Text style={{fontSize: 50, color: '#fff'}}>COMI SEU CU</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={Estilo.viewContainer}>
      <Text style={Estilo.textCentral}>PARTIU</Text>
    </View>
  );
}

function MapaScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
      <MapView 
        initialRegion={{
          latitude: -22.848861895879576,
          longitude: -43.32558296691632,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height,}} >
          <Marker
            coordinate={{
              latitude: -22.848861895879576,
              longitude: -43.32558296691632,}}
            title={'Casa do papai'}
            description={'Vem me dar'} 
          />
        </MapView>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  const texto = 'Espaço destinado para comer cu de curioso'.toUpperCase()
  const cliqueaqui = 'Clique aqui para saber mais'.toUpperCase()
  return (
    <View style={Estilo.viewContainer}>
      <Text style={[Estilo.textCentral, {textAlign: 'center', fontSize:36}]}>{texto}</Text>
      <TouchableOpacity
        style={Estilo.buttonContainer}
        title="Go to AI DANADO"
        onPress={() => navigation.navigate('AI DANADO')}
      >
        <Text style={Estilo.buttonText}>{cliqueaqui}</Text>
      </TouchableOpacity>
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
      name='Home' 
      component={HomeScreen} 
      options={({ route }) => ({ title: 'Eai ?', headerStyle: 
        {
          backgroundColor:'#b2ebf2'
        }, 
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            alignSelf: 'center',
          }})}
       />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen 
      name="A PAGINA DO CU" 
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
          }})}
      />
      <SettingsStack.Screen 
      name="AI DANADO" 
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
            marginEnd: 50
          }})}
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
            }})}
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
                      case 'Partiu':
                          iconName = focused
                              ? 'home-outline'
                              : 'home-outline'
                          break
                      case 'Mapa':
                          iconName = focused
                              ? 'map-outline'
                              : 'map-outline'
                          break
                      case 'Cu':
                          iconName = focused
                              ? 'settings-outline'
                              : 'settings-outline'
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
          }} initialRouteName="Partiu"
            >
        <Tab.Screen name="Partiu" component={HomeStackScreen} />
        <Tab.Screen name="Mapa" component={MapaStackScreen} 
        />
        <Tab.Screen name="Cu" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}