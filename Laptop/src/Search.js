import React  from 'react';
import { Text, StyleSheet, View, Button, Touchables, TouchableOpacity } from 'react-native'

const Search = ({ navigation }) => {
    return(

        <View style={styles.container}>

            <Text style={{fontSize: 30}}> I am in Search</Text>

            <TouchableOpacity 
                onPress={ () => console.log('Search botton was pressed')} >
                <Text>Click Me</Text>
            </TouchableOpacity>
        </View>   
    )
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#1F2833',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Search












