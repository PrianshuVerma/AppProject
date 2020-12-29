//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Search from './screens/Search';
 
const RootStack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
        
            <View style={styles.container}>
                <Text>Hello React Native!</Text>
            </View>
        
            <RootStack.Navigator>
                <RootStack.Screen name="Search Page" component={Search} />
                <RootStack.Screen name="Home Page" component={Home} />
             </RootStack.Navigator>
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