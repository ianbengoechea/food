import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter( results => {
            return results.price === price;
        });
    }
    return (
        <>
            <SearchBar 
              term={term} 
            //   onTermChange={(newTerm) => setTerm(newTerm)}
            //   onTermSubmit={ () => searchApi()}  << tambien esta bien asi
              onTermChange={setTerm}
              onTermSubmit={() => searchApi(term)}//la pasa como referencia 
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Mas Barato" />
                <ResultsList results={filterResultsByPrice('$$')} title="Intermedio" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Mas Costoso" />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    
});

export default SearchScreen;