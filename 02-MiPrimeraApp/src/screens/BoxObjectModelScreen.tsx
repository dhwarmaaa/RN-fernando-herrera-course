import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    // el view se limita por su contenido hijo, cuando no se le asigna height o width
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

export default BoxObjectModelScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    width: 150,
    borderWidth: 10,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    // backgroundColor: 'red',
  },
  container: {
    flex: 1, // si es el unico elemento con flex, abarca todo el espacio posible
    backgroundColor: 'red',
  },
});
