import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

export default FlexScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
  },
  caja1: {
    borderWidth: 2,
    flex: 1,
    borderColor: 'white',
    fontSize: 30,
  },
  caja2: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja3: {
    borderWidth: 2,
    borderColor: 'white',
    flex: 1,
    fontSize: 30,
  },
});
