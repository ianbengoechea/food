import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');
    console.log("result >>>>", result)
    console.log("id >>>>", id)

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>
                {result.name}
            </Text>
            <FlatList 
              data={result.photos}
              //el keyextractor es el item, pero como la foto 
              // es una url tambien sirve en este caso
              keyExtractor={photo => photo}
              // en renderItem, el {item} es nuestro objeto que en este caso
              // seria 'results.photos' ... la url
              renderItem={({item}) => {
                  return (
                    <Image 
                      style={styles.image} 
                      source={ item ? {uri: item} : null } 
                    />
                  );
              }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        borderRadius: 20,
        marginBottom: 8
    }
});

export default ResultsShowScreen;