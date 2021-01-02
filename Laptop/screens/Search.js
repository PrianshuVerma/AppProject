import React, {useState, Component} from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';

const Search = ({route, navigation}) => {

  // used for the first picker for the brand of the laptop
  const [Brand, setBrand] = useState('any');

  // used for the second picker for the ram of the laptop
  const [Ram, setRam] = useState('any');

  // used for the third picker for the processor of the laptop
  const [Processor, setProcessor] = useState('any');
  
  // used for the fourth picker for the hardrive of the laptop
  const [Hardrive, setHardrive] = useState('any');

  // used for the fifth picker for the storage of the laptop
  const [Storage, setStorage] = useState('any');

  // used for the sixth picker for the price of the laptop
  const [Price, setPrice] = useState('any');

  return (
    
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <View style={styles.headerwriting}>
          <Text style={styles.greetingContainer}>Hello {route.params.paramKey} </Text>

          <Text numberOfLines= {1} style={styles.askContainer}>Please select what you'd like</Text>
        </View>

        <View style = {styles.circle}> 
          <Image source={require('./images/logo.png')} style={styles.logo} />
        </View>

      </View>
      
      <View
            style={{

            flex:1,
            alignItems: 'stretch',
            width: '100%',
            paddingVertical: 3,
            borderBottomColor: "#66FCF1",
            borderBottomWidth: 1,
            }}
          />

      <ScrollView 
        showsVerticalScrollIndicator ={false} 
        showsHorizontalScrollIndicator ={false}
      >

      <View style = {styles.brandContainer}>
      <DropDownPicker
        items={[
          {label: "Any",              value: "any"},
          {label: 'Mac',              value: 'mac'},
          {label: 'Windows',           value: 'window'},
          {label: "Hewlett-Packard",  value: "hp" },
          {label:"Asus",              value: "asus"},
          {label:"Acer",              value: "acer"},
          {label:"Microsoft",         value: "microsoft" },
          {label: "Dell",             value: "dell"},
        ]}
               
        style= {{ backgroundColor: '#282828', borderColor: "#66FCF1", baseColor: "white", fontSize: 17}}
        labelStyle= {{ fontSize: 17, textAlign: 'left', color: 'white'}}
        dropDownStyle= {{ backgroundColor: '#282828', borderColor: "#66FCF1", }}
        defaultIndex= {0}
        containerStyle={ {height: 60, width: 275, alignSelf: "center",}}
        placeholder= {"Select Brand..."}
        onChangeItem= {item => setBrand(item.value)}
      />
        </View>

        <View style = {styles.ramContainer}>
      <DropDownPicker
        items={[
          {label: "Any",                value: "any"},
          {label: '4 GB',               value: 'low'},
          {label: '8 GB',               value: 'medium'},
          {label: "16 GB",              value: "high" },
          {label: "Higher than 16 GB",  value: "mega"},

        ]}
        placeholder= {"Select Ram..."}
        style= {{ backgroundColor: '#282828', borderColor: "#66FCF1", baseColor: "white"}}
        labelStyle= {{ fontSize: 17, textAlign: 'left', color: 'white'}}
        dropDownStyle= {{ backgroundColor: '#282828', borderColor: "#66FCF1",}}
        defaultIndex= {0}
        containerStyle={ {height: 60, width: 275, alignSelf: "center",}}
        onChangeItem={item => setRam(item.value)}
      />
        </View>

        <View style = {styles.processorContainer}>
      <DropDownPicker
        items={[
          {label: "Any",                  value: "any"},
          {label: 'Intel Core 8th Gen',   value: '8th Gen'},
          {label: 'Intel Core 7th Gen',   value: '7th Gen'},
          {label: "Intel Core i9",        value: "i9" },
          {label: "Intel Core i7",        value: "i7"},
          {label: "Intel Core i5",        value: "i5"},
          {label: "Intel Core i3",        value: "i3" },
          {label: "M1 Chip",              value: "m1"},
          {label: 'AMD Ryzen 7',          value: 'amd7'},
          {label: 'AMD Ryzen 5',          value: 'amd5'},
          {label: 'AMD Ryzen 3',          value: 'amd3'},
          {label: "Other",                value: "other" },
        ]}
        placeholder= {"Select Processor..."}
        style= {{ backgroundColor: '#282828', borderColor: "#66FCF1", baseColor: "white"}}
        labelStyle= {{ fontSize: 17, textAlign: 'left', color: 'white'}}
        dropDownStyle= {{ backgroundColor: '#282828', borderColor: "#66FCF1",}}
        defaultIndex= {0}
        containerStyle={ {height: 60, width: 275, alignSelf: "center",}}
        onChangeItem={item => setProcessor(item.value)}
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
        style= {{ backgroundColor: '#282828', borderColor: "#66FCF1", baseColor: "white"}}
        labelStyle= {{ fontSize: 17, textAlign: 'left', color: 'white'}}
        dropDownStyle= {{ backgroundColor: '#282828', borderColor: "#66FCF1",}}
        defaultIndex= {0}
        containerStyle={ {height: 60, width: 275, alignSelf: "center",}}
        onChangeItem={item => setHardrive(item.value)}
      />
      </View>


        <View style = {styles.storageContainer}>
      <DropDownPicker
        items={[
          {label: "Any",                 value: "any"},
          {label: 'Less then 255.9 GB',  value: 'low'},
          {label: '512 GB - 999.9 GB',   value: 'medium'},
          {label: "1 TB - 1.9 TB",       value: "high" },
          {label: "2TB and Higher",      value: "mega"},

        ]}
        placeholder= {"Select Storage..."}
        style= {{ backgroundColor: '#282828', borderColor: "#66FCF1", baseColor: "white"}}
        labelStyle= {{ fontSize: 17, textAlign: 'left', color: 'white'}}
        dropDownStyle= {{ backgroundColor: '#282828', borderColor: "#66FCF1",}}
        defaultIndex= {0}
        containerStyle={ {height: 60, width: 275, alignSelf: "center",}}
        onChangeItem={item => setStorage(item.value)}
      />
        </View>

        <View style = {styles.priceContainer}>
      <DropDownPicker
        items={[
          {label:"Any",                   value: "any"},
          {label: "$0.00 - $399.99",      value: "low"},
          {label: "$400.00 - $699.99",    value: 'medium'},
          {label: "$700.00 - $999.99",    value: 'high'},
          {label: "$1000.00 - $1999.99",  value: "high-end" },
          {label: "$2000.00 and Higher",  value: "premium" },

        ]}

        placeholder= {"Select Price..."}
        style= {{ backgroundColor: '#282828', borderColor: "#66FCF1", baseColor: "white"}}
        labelStyle= {{ fontSize: 17, textAlign: 'left', color: 'white'}}
        dropDownStyle= {{ backgroundColor: '#282828', borderColor: "#66FCF1",}}
        defaultIndex= {0}
        containerStyle={ {height: 60, width: 275, alignSelf: "center",}}
        onChangeItem={item => setPrice(item.value)}
      />
        </View>
      <View>
        <TouchableOpacity 
            onPress={() => navigation.navigate('Result Page')} 
            style={styles.resultBtn}>
            <Text style={styles.resultText}>View Results</Text>
          </TouchableOpacity>
         </View>

         <View
            style={{

            paddingTop: 30
            }}
          />
            </ScrollView>
    </SafeAreaView>
  );
};

 
const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
  },

    headerwriting: {
      justifyContent: 'flex-start',
      alignSelf: 'flex-start'
    },

    circle: {
      width: 70,
      height: 70,
      borderRadius: 180 / 2,
      backgroundColor: "#0B0C10",
      borderColor: '#66FCF1',
      borderWidth: 1,
      alignSelf: 'flex-end',
      marginTop: 15,
      alignContent: "center",
      marginLeft: 30,
      justifyContent: "center",
    },

    logo: {
      justifyContent: 'center',
      alignSelf: 'center',
      height: 60,
      width: 120,
      resizeMode: "contain",
    },

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#0B0C10"
    },

    Scroll: {
      paddingVertical: 50
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
      marginBottom: 50,

    },


    greetingContainer: {
      fontWeight: "bold",
      color: "white",
      fontSize: 30,
      paddingTop: 30,
      alignSelf: "baseline",
      marginTop: 10
    },

    askContainer: {
      paddingTop: 7,
      color: "white",
      alignSelf: "baseline",
    },

    resultBtn:{
      alignSelf:'center',
      justifyContent: 'center',
      width: 300,
      height: 50,
      borderRadius: 30,
      marginTop: 25,
      backgroundColor: "#0B0C10",
      borderColor: "#66FCF1",
      borderWidth: 1,
    },
    resultText:{
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: "Verdana-Bold",
      fontSize: 20,
      color: '#fff5ee'
    },
  });
   
export default Search;