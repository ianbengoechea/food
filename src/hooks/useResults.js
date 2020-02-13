import { useEffect, useState } from 'react';
import yelp from '../api/yelp'

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    //helper function
    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm, // o podria utilizar solo "term"
                    location: '-31.412009, -64.197338'
                }
            });
            setResults(response.data.businesses);
        } catch(error) {
            setErrorMessage("ALGO SALIO MAL");
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
}