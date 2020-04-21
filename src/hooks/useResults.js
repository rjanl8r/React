import {useState, useEffect} from 'react';
import yelp from '../api/Yelp';

export default () => {
    const [results, setResults] = useState([]); //state for the api
    const [errorMessage, setErrorMessage] = useState(''); //state for the errors
    //state is an empty array


 //once we get a response fromt the api, we will assign the data to the response variable as 
 //response.data.businesses (hads the json we want to store)
    const searchApi = async (searchTerm) => {
        try {
        const response = await yelp.get('/search',{
            params: {
                limit : 50,
                term : searchTerm,
                location: 'san diego'
                    }});
        setResults(response.data.businesses);
            }   catch (error) {
                setErrorMessage('Something went wrong :(')
            }
    }; 
        
   useEffect(() => {
       searchApi('Italian')

   }, []);

   return [searchApi, results, errorMessage];

};