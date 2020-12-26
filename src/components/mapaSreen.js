import React from 'react'
import { View, Dimensions } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps';


export default props => {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
        <MapView 
          initialRegion={{
            latitude: -22.83130083482748, 
            longitude: -43.316099202401126,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height,}} >
          <Callout>
            <Marker
              coordinate={{
                latitude: -22.83130083482748, 
                longitude: -43.316099202401126,}}
              title={'Pachecao Digital'}
              description={'Vista Alegre, Rio de Janeiro - RJ, 21230-351'} 
            />
           </Callout>
          </MapView>
       
      </View>
    );
  }