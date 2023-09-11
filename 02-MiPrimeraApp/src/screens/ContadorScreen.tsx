import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useState} from 'react';
import Fab from '../components/Fab';

const ContadorScreen = () => {
  const [contador, setContador] = useState(2);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <Fab title="+1" position="br" onPress={() => setContador(contador + 1)} />
      <Fab title="-1" position="bl" onPress={() => setContador(contador - 1)} />
    </View>
  );
};

export default ContadorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    top: -15,
  },
});
