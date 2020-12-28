import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextPropTypes, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  

  return (

    <View style={styles.container}>
      <Button style={styles.But}
        title={'Press me!'}
        onPress={() => {
          setCount(count + 1)
        }}
      />
      <Text style={styles.text}>{`Pressed ${count} times`}</Text>

      <Text style={styles.title}>Home Page</Text>
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
    //alignItems: 'center',
    //justifyContent: 'space-between',
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
    paddingTop: 175,
    color:'#66FCF1',
    fontFamily: 'Verdana-BoldItalic',
    fontSize: 40,
    fontWeight: 'bold'

  },
  But: {
    alignSelf: 'center',
    width: 200,
    height: 500
  }

});
