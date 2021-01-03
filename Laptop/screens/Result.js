import React ,{useState} from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import {db} from './config'

const addItem = (item) => {
  db.ref('/Users').push({
    item: {
      FName: item,
    }
    
  });
}


const Result = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Result Page</Text>

      <Button 
            onPress={addItem('p')} 
            style={styles.resultBtn}>
            <Text> View Results</Text>
            
      </Button>

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