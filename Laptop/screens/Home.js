import React from "react";
import { ScrollView ,View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

//const image = { uri: "https://wallpaperaccess.com/full/1182654.png" };

const image = { uri: "https://wallpaperaccess.com/full/1182654.png" };


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>

      <ScrollView 

        showsVerticalScrollIndicator ={true} 
        showsHorizontalScrollIndicator ={false}
      >
      <View style = {styles.circle}> 
        </View>
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
                secureTextEntry = {true}
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
                >
                <Text style = {styles.signUp}> Sign up here</Text>
              </TouchableOpacity>


            </View>


            </View>
            </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

  circle: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    backgroundColor: "#0B0C10",
    borderColor: '#66FCF1',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 150,
    //marginBottom: 50
  },

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
      marginTop: -150,
      resizeMode: "contain",
      //flexDirection: 'row'
      marginBottom: 50

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
      marginTop: 150, 
      alignSelf :'center',
      paddingBottom: '10%'
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
      flex: 3,
      maxHeight: 45,
      width: 350,
      borderRadius: 10,
      flexDirection: 'row',
      backgroundColor: '#212121',
      alignItems: 'center',
      paddingHorizontal: 20,
      color: 'white',
      marginTop: 25,
      paddingTop: 15,
      paddingBottom: 10,
      marginBottom: 25,
      //marginLeft: 35,
      alignSelf: 'center',
      fontFamily: 'Verdana',
    },
    input: {
      flex: 3,
      maxHeight: 45,
      width: 350,
      borderRadius: 10,
      flexDirection: 'row',
      backgroundColor: '#212121',
      alignItems: 'center',
      paddingHorizontal: 20,
      color: 'white',
      marginBottom: 20,
      paddingTop: 15,
      paddingBottom: 10,
      //marginLeft: 35,
      alignSelf: 'center',
      fontFamily: 'Verdana',

    },

    username: {

      flex:1, 
      fontSize: 14, 
      borderColor: '#66FCF1',
      borderBottomWidth: 1, 
      color: 'white', 
      fontFamily: 'Verdana'

    },
    password: {

      flex:1, 
      fontSize: 14, 
      borderColor: '#66FCF1',
      borderBottomWidth: 1, 
      color: 'white',
      fontFamily: 'Verdana',

    },
  });

  export default Home;