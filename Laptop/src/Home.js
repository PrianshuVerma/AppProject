import React  from 'react';
import { Text, StyleSheet, View, Button, Touchables } from 'react-native'

const Home = ({ navigation }) => {
    return(

        <View style={styles.container}>

            <Text style={{ fontSize:30 }}> I am in Home</Text>
            
        </View>
    )
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#1F2833',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Home












