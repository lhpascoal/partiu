import React from 'react'
import { View, Dimensions } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GetRegion = [
  {  
  latitude: -22.848846438589835,
  longitude: -43.325571984356024,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
  },
  {  
  latitude: -22.83130083482748, 
  longitude: -43.316099202401126,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
  },
  {
  latitude: -22.841459901711133,  
  longitude: -43.29958671534131,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
  },
  {
  latitude: -22.856297288019473, 
  longitude: -43.3260227,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
  }
]

const GetMaker = [
{  
  latitude: -22.848846438589835,
  longitude: -43.325571984356024
},
{  
  latitude: -22.83130083482748, 
  longitude: -43.316099202401126
},
{  
latitude: -22.841459901711133,  
longitude: -43.29958671534131
},
{  
latitude: -22.856297288019473, 
longitude: -43.3260227
},
{  
latitude: -22.881173851206338, 
longitude: -43.35106582626956,
}
]

const GetTitle = [
  'Você está aqui',
  'Pachecao Digital', 
  'Olimpo',
  'Arena pós praia',
  'Barril 8000',
]
const GetDescription = [
  '',
  'Vista Alegre, Rio de Janeiro - RJ, 21230-351', 
  'Av. Vicente de Carvalho, 1450 - Penha Circular, Rio de Janeiro - RJ, 21210-000',
  'R. Bezerra de Menezes, 31 - Váz Lobo, Rio de Janeiro - RJ, 21371-121',
  'Estrada Intendente Magalhães, 378 - Oswaldo Cruz, Rio de Janeiro - RJ, 21341-332',
]
const x = 0
const GOOGLE_MAPS_APIKEY = 'AIzaSyAoiCig70cIQGSUJuxwrDj1ZnLdcd2Nvxg';


export default props => {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
        <MapView 
          initialRegion={GetRegion[0]}
          style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height,}} >
            <MapViewDirections
            strokeWidth={4}
            strokeColor="orange" 
            origin={GetMaker[0]}
            destination={GetMaker[3]}
            apikey={GOOGLE_MAPS_APIKEY}
            optimizeWaypoints={true}
          
            />
          <Callout>
            <Marker
              coordinate={GetMaker[x]}
              title={GetTitle[x]}
              // description={GetDescription[x]}              
            />
           </Callout>
           <Callout>
           <Marker
              coordinate={GetMaker[1]}
              title={GetTitle[1]}
              description={GetDescription[1]}
            />
          </Callout>
          <Callout>
            <Marker
              coordinate={GetMaker[2]}
              title={GetTitle[2]}
              description={GetDescription[2]}
            />
          </Callout>
          <Callout>
            <Marker
              coordinate={GetMaker[3]}
              title={GetTitle[3]}
              description={GetDescription[3]}
            />
          </Callout>
          </MapView>
       
      </View>
    );
  }