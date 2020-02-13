import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {


    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textSearchBar}
              placeholder="Search"
              value={term}
              //onChangeText={ newTerm => onTermChange(newTerm)}
              onChangeText={onTermChange}
              onEndEditing={onTermSubmit}
            />
        </View>
    );
};
 


const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginTop: 10,
        borderRadius: 5, // le curva los bordes
        marginHorizontal: 15, // margen horizontal, hacia los lados
        marginVertical: 10, // margen vertical, hacia arriba y abajo
        flexDirection: 'row', // direccion de los hijos
    },
    textSearchBar: {
        flex: 1, // espacea el item
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center', // alinea el icono en la posicion deseada
        marginHorizontal: 15
    }
});

export default SearchBar;