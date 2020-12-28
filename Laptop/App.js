import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextPropTypes, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  

  return (

    <View style={styles.container}>
      <View style = {styles.buttonContainer}>
        <Button title ='go'/>
      </View>
      
      <Text style={styles.text}>{`Pressed ${count} times`}</Text>

      <Text style={styles.title}>Tech shit</Text>
      <Image style={styles.img}
        resizeMode="contain"
        source={{ uri: "https://raw.githubusercontent.com/PrianshuVerma/AppProject/master/Laptop/assets/mac.png"}}
        />

        
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#1F2833',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img:{
    opacity:0.7,
    width:450,
    height: 450,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden'
    
  },

  title: {
    //justifyContent: ''
    position: 'absolute',
    alignSelf: 'center',
    paddingTop: 50,
    color:'#66FCF1',
    fontFamily: 'Verdana-BoldItalic',
    fontSize: 40,
    fontWeight: 'bold'

  },
  buttonContainer: {
    color: 'black',
    marginBottom: 20

  }

});
