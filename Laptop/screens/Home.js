import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>This is the Home Screen</Text>
      <Button
        title="Go To Search Screen"
        onPress={() => navigation.navigate('Search Page')}
        />
    </View>
  );
};
 
export default Home;