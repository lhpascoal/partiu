import React from 'react'
import { TouchableOpacity, View } from 'react-native'
// import { navigation } from '@react-navigation/stack';


function HomeScreen({ navigation }) {
    return (
      <View style={Estilo.viewContainer}>
        <Text style={Estilo.textCentral}>PARTIU</Text>
        <TouchableOpacity
          style={Estilo.buttonContainer}
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={Estilo.buttonText}>Details</Text>
        </TouchableOpacity>
      </View>
    );
  }

export default HomeScreen;