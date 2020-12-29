import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 

const Result = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Result Page</Text>
    </View>
  );
};
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
   
export default Result;