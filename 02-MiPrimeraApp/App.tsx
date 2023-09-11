import React from 'react';
import ContadorScreen from './src/screens/ContadorScreen';
import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
import {SafeAreaView} from 'react-native';
import DimensionesScreen from './src/screens/DimensionesScreen';
import PositionScreen from './src/screens/PositionScreen';
import FlexScreen from './src/screens/FlexScreen';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*<ContadorScreen />
      <BoxObjectModelScreen />
      <DimensionesScreen />
      <PositionScreen />
      */}
      <FlexScreen />
    </SafeAreaView>
  );
};

export default App;
