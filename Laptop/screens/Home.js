import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Image, TouchableOpacity } from 'react-native';
 
const image = { uri: "https://wallpaperaccess.com/full/1182654.png" };

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Image source={require('./images/Asset4.png')} style={styles.logo} />
            <Text style={styles.text}>This is the Home Screen</Text>

            <TouchableOpacity 
                onPress={() => navigation.navigate('Search Page')} 
                style={styles.search}>
                <Text style={styles.searchtext}>Go To Search Screen</Text>
            </TouchableOpacity>
            
            <View style={styles.horizontal}>
              <TouchableOpacity 
                  onPress={() => navigation.navigate('Search Page')} 
                  style={styles.signin}>
                  <Text style={styles.signintext}>SIGN IN</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                  onPress={() => navigation.navigate('Search Page')} 
                  style={styles.register}>
                  <Text style={styles.registertext}>REGISTER</Text>
              </TouchableOpacity>
              
            </View>
        </ImageBackground>
        
    </View>
  );
};

const styles = StyleSheet.create({

  
    flexDirection: "column",
  
  
    horizontal: {
      marginTop: 100,
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
      color: '#000000'
    },
    
    search:{
      alignSelf:'center',
      justifyContent: 'center',
      borderRadius: 10,
      width: 300,
      height: 50,
      marginTop: 30,     
      backgroundColor: "#66FCF1",      
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
    }
  });

  export default Home;