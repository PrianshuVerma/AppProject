//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
 
const App = () => {
  return (

    <NavigationContainer>
        {
            <View style={styles.container}>
                <Text>Hello React Native!</Text>
            </View>
        }

    </NavigationContainer>
  );
};
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default App;