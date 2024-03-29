import React from 'react';
import {View, Text, StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {
    if (!results.length) {
        return null;
        //will not show anything if there is no data
    }
    return (
    <View style = {styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
        showsHorizontalScrollIndicator = {false}
        horizontal
        data ={results}
        keyExtractor = {(result) => result.id }
        renderItem = {({item}) => {
            return (
            <TouchableOpacity onPress = { () => navigation.navigate('ResultsShow', { id : item.id }) }>   
                <ResultsDetail result = {item}/> 
            </TouchableOpacity> ) 
            }
        }
        />

        {/* <Text>Results: {results.length}</Text> */}
    </View>
    );
};

const styles= StyleSheet.create({
    titleStyle : {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5 
    },
    container : {
        marginBottom: 10
    },

});

export default withNavigation(ResultsList); 