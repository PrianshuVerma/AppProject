import React from "react";
import { Animated ,View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

//const image = { uri: "https://wallpaperaccess.com/full/1182654.png" };

const image = { uri: "https://wallpaperaccess.com/full/1182654.png" };


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
          <Image source={require('./images/logo.png')} style={styles.logo} />

            <View style = {styles.inputContainer}> 
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

            <View>

            <TouchableOpacity 
                onPress={() => navigation.navigate('Search Page')} 
                style={styles.loginBtn}>
                <Text style={styles.logintext}>Login</Text>
            </TouchableOpacity>

            <View style ={styles.signUpView}>
              <Text style={styles.signUpText}>
                Don't have an account?
              </Text>

              <TouchableOpacity 
                onPress={() => navigation.navigate('Register Page')} 
                style={styles.loginBtn}>
                
                <Text style = {styles.signUp}> Sign up here</Text>
              </TouchableOpacity>


            </View>


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

    logo: {
      alignSelf: 'center',
      //marginRight: 225,
      height: 100,
      width: 190,
      marginTop: 200,
      resizeMode: "contain"
    },

    text:{
        alignSelf: "center",
        fontFamily: "Verdana-Bold",
        fontSize: 30,
        color: "#66FCF1"
    },

    signUpText:{

      fontFamily: "Verdana",
      fontSize: 15,
      color: 'gray',
    },

    signUpView: {

      flexDirection: 'row', 
      marginTop: 275, 
      alignSelf :'center'
    },

    signUp: {

      fontFamily: "Verdana",
      fontSize: 15,
      color: '#66FCF1',
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
      marginBottom: 25,
      //marginLeft: 35,
      alignSelf: 'center',
      fontFamily: 'Verdana-Italic',
    },
    input: {
      flex: 1,
      height: 70,
      width: 350,
      borderRadius: 10,
      flexDirection: 'row',
      backgroundColor: '#212121',
      alignItems: 'center',
      paddingHorizontal: 20,
      color: 'white',
      //marginBottom: 20,
      //marginLeft: 35,
      alignSelf: 'center',
      fontFamily: 'Verdana-Bold',
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

  export default Home;