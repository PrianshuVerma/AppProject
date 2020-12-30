import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';

const Search = ({navigation}) => {

  // used for the first picker for the brand of the laptop
  const [Brand, setBrand] = useState('Any');

  // used for the second picker for the ram of the laptop
  const [Ram, setRam] = useState('Any');

  // used for the third picker for the processor of the laptop
  const [Processor, setProcessor] = useState('Any');
  
  // used for the fourth picker for the hardrive of the laptop
  const [Hardrive, setHardrive] = useState('Any');

  // used for the fifth picker for the storage of the laptop
  const [Storage, setStorage] = useState('Any');

  // used for the sixth picker for the price of the laptop
  const [Price, setPrice] = useState('Any');
  


  return (
    
    <View style={styles.container}>
      <Text>This is the Search Page {Brand}, {Ram}, {Processor}, {Hardrive}, {Storage}, {Price}</Text>

      <View style = {styles.brandContainer}>
      <DropDownPicker
        items={[
          {label: "Any",               value: "any"},
          {label: 'Mac',              value: 'mac'},
          {label: 'Window',           value: 'window'},
          {label: "Helward Package",  value:"hp" },
          {label:"Asus",              value:"asus"},
          {label:"Acer",              value:"acer"},
          {label:"Microsoft",         value:"microsoft" },
          {label: "Dell",             value:"dell"},

        ]}
        placeholder= {"Select Brand..."}
        defaultIndex={0}
        containerStyle={{height: 40, width: 175, alignSelf: "center"}}
        onChangeItem={item => setBrand(item.value)}
      />
        </View>

        <View style = {styles.ramContainer}>
      <DropDownPicker
        items={[
          {label: "All",               value: "all"},
          {label: 'Mac',              value: 'mac'},
          {label: 'Window',           value: 'window'},
          {label: "Helward ",  value:"hp" },
          {label:"Asus",              value:"asus"},
          {label:"Acer",              value:"acer"},
          {label:"Microsoft",         value:"microsoft" },
          {label: "Dell",             value:"dell"},

        ]}
        placeholder= {"Select Brand..."}
        defaultIndex={0}
        containerStyle={{height: 40, width: 175, alignSelf: "center"}}
        onChangeItem={item => setBrand(item.value)}
      />
        </View>

        <View style = {styles.processorContainer}>
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
        placeholder= {"Select Brand..."}
        defaultIndex={0}
        containerStyle={{height: 40, width: 175, alignSelf: "center"}}
        onChangeItem={item => setBrand(item.value)}
      />
        </View>

      <View style = {styles.hardriveContainer}>
      <DropDownPicker
        items={[
          {label:"Any",     value:"any"},
          {label: "HDD",    value: "hdd"},
          {label: "SSD",    value: "ssd"},
        ]}
        placeholder= {"Select Hardrive..."}
        defaultIndex={0}
        containerStyle={{height: 40, width: 175, alignSelf: "center"}}
        onChangeItem={item => setHardrive(item.value)}
      />
      </View>


        <View style = {styles.storageContainer}>
      <DropDownPicker
        items={[
          {label: "Any",                    value: "any"},
          {label: 'Less then 255.9 GB',     value: 'low'},
          {label: '512 GB - 999.9 GB',      value: 'medium'},
          {label: "1 TB - 1.9 TB",          value: "high" },
          {label: "2TB and Higher",          value: "mega"},

        ]}
        placeholder= {"Select your Storage..."}
        defaultIndex={0}
        containerStyle={{height: 40, width: 175, alignSelf: "center"}}
        onChangeItem={item => setStorage(item.value)}
      />
        </View>

        <View style = {styles.priceContainer}>
      <DropDownPicker
        items={[
          {label:"Any",                   value:"any"},
          {label: "$0.00 - $399.99",      value: "low"},
          {label: "$400.00 - $699.99",    value: 'medium'},
          {label: "$700.00 - $999.99",    value: 'high'},
          {label: "$1000.00 and Higher",  value:"premium" },

        ]}
        placeholder= {"Select Price..."}
        defaultIndex={0}
        containerStyle={{height: 40, width: 175, alignSelf: "center"}}
        onChangeItem={item => setPrice(item.value)}
      />
        </View>
        
      <Button   
                style = {{zIndex: 0}}
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
    brandContainer: {

      zIndex: 6,
      marginTop: 60,

    },
    ramContainer: {

      zIndex: 5,
      marginTop: 60,

    },
    processorContainer:{
      zIndex: 4,
      marginTop: 60,


    },
    hardriveContainer:{
      zIndex: 3,
      marginTop: 60,


    },
    storageContainer: {
      zIndex: 2,
      marginTop: 60,

    },
    priceContainer: {
      zIndex: 1,
      marginTop: 60,
      marginBottom: 20,

    },
  });
   
export default Search;