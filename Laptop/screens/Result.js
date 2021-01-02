import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';
 

const Result = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Result Page</Text>

      <AnimatedProgressWheel 
    size={120} 
    width={20} 
    color={'white'}
    fullColor= {"#66FCF1"}
    progress={100}
    backgroundColor={"#0B0C10"}
    animateFromValue={0}
    duration={3000}
/>
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