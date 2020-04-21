import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';


const SearchScreen = () => {
    const [term,setTerm] = useState(''); //search bar state
    const [searchApi, results, errorMessage] = useResults();
  
    const FilterResultsByPrice = (price) => {
        return results.filter(
            result => {
                return result.price === price;
            }
        ) 
    };


    return (
        <>
            <SearchBar 
            term ={term}
            onTermChange = {setTerm}
            onTermSubmit={() => searchApi(term)}
            />

            {errorMessage ? <Text>{errorMessage}</Text>: null} 

            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView> 
            <ResultsList title ="Cost Effective" results = {FilterResultsByPrice('$')} />
            <ResultsList title ="Bit Pricier" results = {FilterResultsByPrice('$$')} />
            <ResultsList title ="Big Spender" results = {FilterResultsByPrice('$$$')} />
            <ResultsList title ="Major Baller" results = {FilterResultsByPrice('$$$$')} />
            </ScrollView>
        </>
    );
};
// {errorMessage ? <Text>{errorMessage}</Text>: null}  is similar to an if then statement for error handling
//api will be requested using the ontermsubmit 

const styles = StyleSheet.create({

});

export default SearchScreen;