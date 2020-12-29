import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';


const Search = ({navigation}) => {
  return (
    
    <View style={styles.container}>
      const [country, setCountry] = useState("uk")
      <DropDownPicker
        
        items={[
          {label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
          {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
          {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
        ]}
        defaultValue={country}
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start'
          }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={item => this.setState({
          country: item.value
        })}
      />
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