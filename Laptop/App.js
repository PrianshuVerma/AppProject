//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Search from './screens/Search';
import Result from './screens/Result';
 
const RootStack = createStackNavigator(
  
);

const App = () => {
  return (

    
    <NavigationContainer>
        
            <RootStack.Navigator>
                <RootStack.Screen options = {{headerShown: false}}name="Home Page" component={Home} />
                <RootStack.Screen name="Search Page" component={Search} />
                <RootStack.Screen name="Result Page" component={Result} />
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