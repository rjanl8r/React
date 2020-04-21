import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
    return (
    <View style= {styles.container}>
        <Image style = {styles.imageStyle} source={{uri: result.image_url}} /> 
        <Text style = {styles.resultName}>{result.name}</Text>
        <Text>{result.rating} Starts, {result.review_count} Reviews </Text>

    </View>
    );
};

const styles= StyleSheet.create({
    container : {
        marginLeft: 15
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    resultName: {
        fontWeight: 'bold',
        fontSize: 14
    },

});

export default ResultsDetail; 



//By default an image wants to collapse itself so we need to make sure to style it so it can render
