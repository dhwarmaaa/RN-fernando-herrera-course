import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

const BotonCalc = ({texto, color, ancho = false, accion}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={[
          styles.boton,
          color ? {backgroundColor: color} : null,
          ancho ? {width: 180} : null,
        ]}>
        <Text
          style={[
            styles.botonTexto,
            color === '#9B9B9B' ? {color: 'black'} : {color: 'white'},
          ]}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCalc;
