import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';


const Search = ({navigation}) => {
  return (
    
    <View style={styles.container}>
<<<<<<< HEAD
     

      <Text>This is the Search Page</Text>
      <Button
                title="View Result"
                onPress={() => navigation.navigate('Result Page')}
            />
    </View>
  );
};

 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
   
export default Search;