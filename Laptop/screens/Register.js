import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>

            <View style = {styles.head}> 
                <Text style ={styles.text}>Sign Up</Text>
            </View>

            <View style = {styles.inputContainer}> 
                <TextInput
                style = {styles.username}
                placeholder = 'Email'
                placeholderTextColor = 'gray'/> 
            </View>

            <View style = {styles.input}> 
                <TextInput
                style = {styles.username}
                placeholder = 'Username'
                placeholderTextColor = 'gray'/> 
            </View>

            <View style = {styles.input}> 
                <TextInput
                style = {styles.password}
                placeholder = 'Password'
                placeholderTextColor = 'gray'/> 
            </View>

            <View style = {styles.input}> 
                <TextInput
                style = {styles.password}
                placeholder = 'Confirm Password'
                placeholderTextColor = 'gray'/> 
            </View>

            <View>

            <TouchableOpacity 
                onPress={() => navigation.navigate('Search Page')} 
                style={styles.loginBtn}>
                <Text style={styles.logintext}>Sign Up</Text>
            </TouchableOpacity>

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
  
    head: {
        marginLeft: 0,
        flexDirection: "column",
        alignSelf: 'center',
        marginTop: 50
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
      marginRight: 225,
      height: 100,
      width: 190,
      marginTop: 100,
      resizeMode: "contain"
    },

    text:{
        textAlign: 'left',
        fontFamily: "Verdana-Bold",
        fontSize: 40,
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
      marginBottom: 20,
    },

    loginBtn:{
      alignSelf:'center',
      justifyContent: 'center',
      width: 300,
      height: 50,
      borderRadius: 30,
      marginTop: 25,
      //marginBottom: 75,     
      backgroundColor: "#0B0C10",
      borderColor: "#66FCF1",
      borderWidth: 1
      //borderWidth: 1,   
    },
    logintext:{
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: "Verdana-Bold",
      fontSize: 20,
      color: '#fff5ee'
      //fontWeight: 'bold'
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
      maxHeight: 45,
      width: 350,
      borderRadius: 10,
      flexDirection: 'row',
      backgroundColor: '#212121',
      alignItems: 'center',
      paddingHorizontal: 20,
      color: 'white',
      marginTop: 25,
      //marginLeft: 35,
      alignSelf: 'center',
      fontFamily: 'Verdana-Italic',
    },
    input: {
      flex: 1,
      maxHeight: 45,
      width: 350,
      borderRadius: 10,
      flexDirection: 'row',
      backgroundColor: '#212121',
      alignItems: 'center',
      paddingHorizontal: 20,
      color: 'white',
      marginTop: 15,
      alignSelf: 'center',
      fontFamily: 'Verdana-Bold',
    },
    login: {

      fontFamily: 'Verdana-Bold',
      color: '#fff5ee',
      fontSize: 28,
      marginTop: 50,
      marginLeft: 50
    },
    username: {

      flex:1, 
      fontSize: 14, 
      borderColor: '#66FCF1',
      borderBottomWidth: 1, 
      color: 'white', 
      fontFamily: 'Verdana-Italic'

    },
    password: {

      flex:1, 
      fontSize: 14, 
      borderColor: '#66FCF1',
      borderBottomWidth: 1, 
      color: 'white',
      fontFamily: 'Verdana-Italic'

    },
  });

  export default Register;