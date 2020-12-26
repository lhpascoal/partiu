import React from 'react'
import { View, ImageBackground, Dimensions } from 'react-native'
import Familia1 from '../../assets/familia2.png'
import Familia2 from '../../assets/familia3.png'

export default props => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black' }}>
        <ImageBackground
          style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/2, flex:1}}
          source={Familia1}
        />
        <ImageBackground
          style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/2, flex:1}}
          source={Familia2}
          
        />
      </View>
    );
  }