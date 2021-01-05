import React, {useState} from 'react'
import { View } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Estilo from './estilo'
import GooglePlacesInput from './mapaSearchBar'


const GOOGLE_MAPS_APIKEY = 'AIzaSyCJ74m-faL6ud0Rthwn0do-AmLRTkf_8x0';




// export default class Map{
  
//   state = {
//     region: null
//   }
  
//   async componetDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       ({ coords: {latitude, longetude } }) => {
//         this.setState({
//           region: {
//             latitude,
//             longetude,
//             latitudedelta: 0.0143,
//             longetudedelta: 0.0134,
//           }
//         });
//       },
//       () => {}, // erro
//       {
//         timeout: 2000,
//         enableHighAccuracy: true,
//         maximumAge: 1000
//       }
//     )
//   }
  
//   render() {
//     const { region } = this.state;

//     return(
//       <View style={[Estilo.viewContainer]}>
//           <MapView 
//             showsUserLocation
//             Region={region}
//             style={Estilo.mapView}>
//           </MapView>
//             <View style={Estilo.viewTextInput}>
//               <GooglePlacesInput></GooglePlacesInput>
//             </View>
//         </View>

//   )
// }
// }

// componentDidMount() {
//   navigator.geolocation.getCurrentPosition(
//     ({coords: { latitude, longitude } }) ={
//       setState({
//         region: {
//           latitude,
//           longitude,
//           // latitudeDelta: 0.0143,
//           // longetudeDelta: 0.0134
//         }
//       });
//     },
//     () => {},
//     {
//       timeout: 2000,
//       enableHighAccuracy: true,
//       maximumAge: 1000
//     }
//   );
// }


export default props => {    
  
  // const componentDidMount = () => {
  //   navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) =>  )
  // }
  
  // componentDidMount()

    return (
      <View style={[Estilo.viewContainer]}>
        <MapView 
          showsUserLocation
          // region={}
          style={Estilo.mapView} >
            {/* <MapViewDirections
            strokeWidth={4}
            strokeColor="orange" 
            origin={GetMaker[0]}
            destination={GetMaker[3]}
            apikey={GOOGLE_MAPS_APIKEY}
            optimizeWaypoints={true}
            /> */}
           {/* <Callout>
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
          </Callout> */}
          </MapView>
          <View style={Estilo.viewTextInput}>
            <GooglePlacesInput></GooglePlacesInput>
          </View>
      </View>
    );
  }