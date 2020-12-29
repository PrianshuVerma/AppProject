import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
 
const image = { uri: "https://wallpaperaccess.com/full/1182654.png" };

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>This is the Home Screen</Text>
            <Button
                title="Go To Search Screen"
                onPress={() => navigation.navigate('Search Page')}
            />
        </ImageBackground>
    </View>
  );
};
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text:{
        textAlign: "center",
        fontFamily: "Verdana-Bold",
        fontSize: 30,
        color: "#66FCF1"
    }
  });

export default Home;