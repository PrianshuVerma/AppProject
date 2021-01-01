import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View style = {styles.circle}> 
        <Image source={require('./images/logo.png')} style={styles.logo} />
      </View>

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
          placeholderTextColor = 'gray'
          secureTextEntry = {true}/> 
      </View>

      <View style = {styles.input}> 
          <TextInput
          style = {styles.password}
          placeholder = 'Confirm Password'
          placeholderTextColor = 'gray'
          secureTextEntry = {true}/> 
      </View>

      <View>

        <TouchableOpacity 
            onPress={() => navigation.navigate('Search Page')} 
            style={styles.loginBtn}>
            <Text style={styles.logintext}>Sign Up</Text>
        </TouchableOpacity>

      </View>

      <View style ={styles.logInView}>

        <Text style={styles.logInText}>
          Already have an account?
        </Text>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Home Page')} 
          >
          <Text style = {styles.logIn}> Login here </Text>
        </TouchableOpacity>


      </View>

    </View>
  );
};

const styles = StyleSheet.create({

    circle: {
      width: 130,
      height: 130,
      borderRadius: 180 / 2,
      backgroundColor: "#0B0C10",
      borderColor: '#66FCF1',
      borderWidth: 1,
      alignSelf: 'center',
      marginTop: 50,
      alignContent: "center",
      //marginBottom: 50
      justifyContent: "center",
      },

    logo: {
    
      alignSelf: 'center',
      //marginRight: 225,
      height: 80,
      width: 150,
      resizeMode: "contain",
      //flexDirection: 'row'

    },

    logInText:{

        fontFamily: "Verdana",
        fontSize: 15,
        color: 'gray',
      },
  
    logInView: {
      
      flexDirection: 'row', 
      marginTop: 100, 
      alignSelf :'center'
    },

    logIn: {

      fontFamily: "Verdana",
      fontSize: 15,
      color: '#66FCF1',
    },

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

    text:{
        textAlign: 'left',
        fontFamily: "Verdana-Bold",
        fontSize: 40,
        color: "#66FCF1",
        alignSelf: 'flex-start'
    },

    signintext:{
      alignSelf: "center",
      fontFamily: "Verdana-Bold",
      fontSize: 20,
      color: '#000000'
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
      fontFamily: 'Verdana'

    },
    password: {

      flex:1, 
      fontSize: 14, 
      borderColor: '#66FCF1',
      borderBottomWidth: 1, 
      color: 'white',
      fontFamily: 'Verdana'

    },
  });

  export default Register;