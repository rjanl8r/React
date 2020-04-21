import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; //import the icons from the expo library 

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style ={styles.backgroundStyle}>
            <Feather 
            name='search' 
            style={styles.iconStyle}
            /> 
            <TextInput 

            autoCapitalize = "none"
            autoCorrect={false}
            style ={styles.inputStyle}
            placeholder= 'search' 
            value = {term}
            onChangeText = {onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View> 
    );
};

const styles = StyleSheet.create(
    {
    backgroundStyle : {
        marginTop:15,
        backgroundColor: '#C0C0C0',
        height : 50,
        borderRadius: 5,
        marginHorizontal: 15 ,
        flexDirection: 'row',
        marginBottom: 5
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    } ,
    iconStyle : {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
        
     }
}
);
// flex adds as much space as possible for the search bar
//flexDirection makes the placeholder at the same line as the icon 


export default SearchBar;