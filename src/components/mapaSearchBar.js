import React from 'react'
// import { useState } from 'react-native'
import { SearchBar } from 'react-native-elements';

export default props => {
    
    return (
        <SearchBar 
            placeholder="Eai, partiu ?"
            // onChangeText={onChangeText}
            // value={value}
            lightTheme="true"
            inputContainerStyle={{borderRadius: 60, height: 25 , backgroundColor: 'white'}}
            containerStyle={{backgroundColor:'transparent'}}
            inputStyle={{color:'white', backgroundColor: 'transparent'}}

        />
    )

}