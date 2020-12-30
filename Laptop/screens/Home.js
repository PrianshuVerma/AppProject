import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//const image = { uri: "https://wallpaperaccess.com/full/1182654.png" };

const image = { uri: "https://wallpaperaccess.com/full/1182654.png" };

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
          <Image source={require('./images/Asset4.png')} style={styles.logo} />
            <TouchableOpacity 
                onPress={() => navigation.navigate('Search Page')} 
                style={styles.search}>
                <Text style={styles.searchtext}>Go To Search Screen</Text>
            </TouchableOpacity>
            <View>
              <Text style = {styles.login}> Login </Text>
            </View>

            <View style = {styles.inputContainer}> 
                <TextInput
                style = {{flex:1, fontSize: 18, borderColor: '#66FCF1',
                borderBottomWidth: 1, color: 'white'}}
                placeholder = 'Username'
                placeholderTextColor = 'gray'/> 
            </View>

            <View style = {styles.input}> 
                <TextInput
                style = {{flex:1, fontSize: 18, borderColor: '#66FCF1',
                borderBottomWidth: 1, color: 'white'}}
                placeholder = 'Password'
                placeholderTextColor = 'gray'/> 
            </View>
    </View>
  );
};

const styles = StyleSheet.create({

    container: {
      flex: 1,
      alignContent: 'center',
      flexDirection: "column",
      backgroundColor: '#0B0C10',
    },
  
    horizontal: {
      marginTop: 300,
      alignSelf: 'center',
      flexDirection: "row"
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    logo: {
      alignSelf: 'center',
      height: 250,
      width: 350,
      marginTop: 50
    },

    text:{
        alignSelf: "center",
        fontFamily: "Verdana-Bold",
        fontSize: 30,
        color: "#66FCF1"
    },

    registertext:{
      alignSelf: "center",
      fontFamily: "Verdana-Bold",
      fontSize: 20,
      color: '#ffffff'
    },

    signintext:{
      alignSelf: "center",
      fontFamily: "Verdana-Bold",
      fontSize: 20,
      color: '#000000'
    },
    
    searchtext:{
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: "Verdana-Bold",
      fontSize: 20,
      color: '#fff5ee'
      //fontWeight: 'bold'
    },
    
    search:{
      alignSelf:'center',
      justifyContent: 'center',
      width: 300,
      height: 50,
      marginTop: 50,     
      backgroundColor: "#0B0C10",
      borderColor: "#66FCF1",
      borderWidth: 1,   
    },

    register:{
      justifyContent: 'center',
      borderRadius:10,
      width: 120,
      height:50,
      alignSelf: 'flex-end',
      marginLeft: 60,     
      backgroundColor: "#696969",      
    },

    signin:{
      justifyContent: 'center',
      borderRadius:10,
      width: 120,
      height:50,
      alignSelf: 'flex-start',
      backgroundColor: "#ffffff",
    },
    inputContainer: {
      flex: 1,
      maxHeight: 50,
      width: 350,
      borderRadius: 10,
      flexDirection: 'row',
      backgroundColor: '#212121',
      alignItems: 'center',
      paddingHorizontal: 20,
      color: 'white',
      //marginBottom: 150,
      marginLeft: 35,
      fontFamily: 'Verdana-Bold',
    },
    input: {
      flex: 1,
      height: 50,
      //width: 500,
      borderRadius: 10,
      flexDirection: 'row',
      backgroundColor: '#0B0C10',
      alignItems: 'center',
      paddingHorizontal: 20,
      color: 'white',
      marginBottom: 250,
      marginLeft: 35,
      fontFamily: 'Verdana-Bold',
    },
    login: {

      fontFamily: 'Verdana-Bold',
      color: '#66FCF1',
      fontSize: 28,
      marginTop: 50,
      marginLeft: 50
    },
  });

  export default Home;