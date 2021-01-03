import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {db} from './config'
import * as firebase from 'firebase/app'
import 'firebase/auth'


const addItem = (props, email, username, pass) => {


// also add in something to make sure their account does not exist, time permitting

  if (email != '' && username != ''&& pass != '') {

    db.ref('/Users').push({
    
      Email: email,
      UserName: username,
      Password: pass
    });

    props.navigate('Search Page', { paramKey: username,})
  }

  else{
    if (email == '') {
      alert ('Please enter Valid Email')
      // alert for the email
    }

    else if (username == '') {
      // alert for username
      alert ('Please enter Valid Username')
    }

    else {
      // alert for the password being empty
      alert ('Please enter Valid Password')
    }
  }
  
}


const Register = ({navigation}) => {

  const [email, setemail] = useState('');

  const [username, setusername] = useState('');

  const [pass1, setpass1] = useState('');

  const [pass2, setpass2] = useState('');

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
          onChangeText = {text => setemail(text)}
          placeholderTextColor = 'gray'/> 
      </View>

      <View style = {styles.input}> 
          <TextInput
          style = {styles.username}
          onChangeText = {text => setusername(text)}
          placeholder = 'Username'
          placeholderTextColor = 'gray'/> 
      </View>

      <View style = {styles.input}> 
          <TextInput
          style = {styles.password}
          placeholder = 'Password'
          onChangeText = {text => setpass1(text)}
          placeholderTextColor = 'gray'
          secureTextEntry = {true}/> 
      </View>

      <View style = {styles.input}> 
          <TextInput
          style = {styles.password}
          placeholder = 'Confirm Password'
          // over here add a function to make sure that the passwords are the same
          onChangeText = {text => setpass2(text)}
          placeholderTextColor = 'gray'
          secureTextEntry = {true}/> 
      </View>

      <View>

        <TouchableOpacity 
            onPress={ () => addItem(navigation, email, username, pass1)} 
            style={styles.signUpBtn}>
            <Text style={styles.signIntext}>Sign Up</Text>
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
      width: 180,
      height: 180,
      borderRadius: 180 / 2,
      backgroundColor: "#0B0C10",
      borderColor: '#66FCF1',
      borderWidth: 1,
      alignSelf: 'center',
      marginTop: 100,
      alignContent: "center",
      //marginBottom: 50
      justifyContent: "center"
      },

    logo: {
    
      alignSelf: 'center',
      //marginRight: 225,
      height: 100,
      width: 180,
      resizeMode: "contain"
      //flexDirection: 'row'
    },

    signUpBtn:{
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
    
    signIntext:{
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: "Verdana-Bold",
      fontSize: 20,
      color: '#fff5ee'
      //fontWeight: 'bold'
    },

    logInText:{

        fontFamily: "Verdana",
        fontSize: 15,
        color: 'gray',
      },
  
    logInView: {
      
      flexDirection: 'row', 
      marginTop: 50, 
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