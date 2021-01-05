import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';

const GooglePlacesInput = () => {
    return (
    <GooglePlacesAutocomplete
      placeholder='Enter Location'
      minLength={2}
      autoFocus={false}
      returnKeyType={'default'}
      fetchDetails={false}
      styles={Style}

      // onPress={(data, details = null) => {
      //   // 'details' is provided when fetchDetails = true
      //     // details.notifyChange(details.geometry.location)
      //     return (
      //     <Marker 
      //       coordinate={{
      //         latitude: details.geometry.location.lat,
      //         longitude: details.geometry.location.lng,
      //       }}
      //     />
      //     )
      //   // console.log(details.geometry.location.lat, details.geometry.location.lng);
        
      // }}
      query={{
        key: 'AIzaSyCJ74m-faL6ud0Rthwn0do-AmLRTkf_8x0',
        language: 'pt-BR',
        components: 'country:br',
      }}
      currentLocation={true}
      currentLocationLabel='Posição atual'      
    />
  );
};

const Style = {
    container: {
        flex: 1,
      },
      textInputContainer: {
        flexDirection: 'row',
      },
      textInput: {
        backgroundColor: '#FFFFFF',
        height: 44,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 15,
        flex: 1,
      },
      poweredContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: '#c8c7cc',
        borderTopWidth: 0.5,
      },
      powered: {},
      listView: {},
      row: {
        backgroundColor: '#FFFFFF',
        padding: 13,
        height: 44,
        flexDirection: 'row',
      },
      separator: {
        height: 0.5,
        backgroundColor: '#c8c7cc',
      },
      description: {},
      loader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 20,
      },
}

export default GooglePlacesInput;