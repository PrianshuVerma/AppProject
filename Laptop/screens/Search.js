import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Picker} from '@react-native-picker/picker';


const Search = ({navigation}) => {
  const [Brand, setBrand] = useState('All');
  

  return (
    
    <View style={styles.container}>
      <Text>This is the Search Page {Brand}</Text>
      
      <Picker
          selectedValue={Brand}
          style={{height: 30, width: 100}}
          onValueChange={(itemValue, itemIndex) => setBrand (itemValue)}
        >
        <Picker.Item label="All" value="all" />
        <Picker.Item label="Mac" value="mac" />
        <Picker.Item label="Helward Package" value="hp" />
        <Picker.Item label="Asus" value="asus" />
        <Picker.Item label="Acer" value="acer" />
        <Picker.Item label="Microsoft" value="microsoft" />
        <Picker.Item label="Dell" value="dell" />
      </Picker>

      <Button   
                //style={{ marginTop: 300}}
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