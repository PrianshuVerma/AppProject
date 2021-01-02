import React, {useState} from "react";
import { ScrollView ,View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';

//const image = { uri: "https://wallpaperaccess.com/full/1182654.png" };

const image = { uri: "https://wallpaperaccess.com/full/1182654.png" };


const Home = ({navigation}) => {

  const [Homename, setHomename] = useState('any');
  
  return (
    
    <View style={styles.container}>

      <ScrollView 

        showsVerticalScrollIndicator ={true} 
        showsHorizontalScrollIndicator ={false}
      >
        <View style = {styles.circle}> 
          <Image source={require('./images/logo.png')} style={styles.logo} />
        </View>

        <View style = {styles.inputContainer}> 
            <TextInput
            style = {styles.username}
            onChangeText = {text => setHomename(text)}
            placeholder=  'Username'
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
              onPress={() => navigation.navigate('Search Page', { paramKey: Homename,})} 
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
    width: 150,
    height: 150,
    borderRadius: 180 / 2,
    backgroundColor: "#0B0C10",
    borderColor: '#66FCF1',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 150,
    alignContent: "center",
    //marginBottom: 50
    justifyContent: "center"
  },

  container: {
    flex: 1,
    alignContent: 'center',
    flexDirection: "column",
    backgroundColor: '#0B0C10',
  },

  logo: {
    justifyContent: "center",
    alignSelf: 'center',
    //marginRight: 225,
    height: 140,
    width: 220,
    resizeMode: "contain"
    //flexDirection: 'row'

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
    marginTop: 150,
    flexDirection: 'row', 
    marginBottom: 20, 
    alignSelf :'center',
    paddingBottom: '10%'
  },

  signUp: {

    fontFamily: "Verdana",
    fontSize: 15,
    color: '#66FCF1',
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