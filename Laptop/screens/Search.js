import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';

const Search = ({navigation}) => {
  const [Brand, setBrand] = useState('All');
  

  return (
    
    <View style={styles.container}>
      <Text>This is the Search Page {Brand}</Text>
      <DropDownPicker
    items={[
        {label: "All",               value: "all"},
        {label: 'Mac',              value: 'mac'},
        {label: 'Window',           value: 'window'},
        {label: "Helward Package",  value:"hp" },
        {label:"Asus",              value:"asus"},
        {label:"Acer",              value:"acer"},
        {label:"Microsoft",         value:"microsoft" },
        {label: "Dell",             value:"dell"},

    ]}
    placeholder= {"Select Brand"}
    defaultIndex={"fsdfsdf"}
    containerStyle={{height: 40, alignSelf: "center"}}
    onChangeItem={item => setBrand(item.value)}// console.log(item.label, item.value)}
/>

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