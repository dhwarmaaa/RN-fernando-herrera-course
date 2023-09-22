import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

// importando del navigator, forma recomendada
import {RootStackParams} from '../navigator/StackNavigator';

// forma limpia
//interface RouterParams {
//  id: number;
//  nombre: string;
//}

//interface Props extends StackScreenProps<any, any> {}

// forma recomendada
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

const PersonaScreen = ({navigation, route}: Props) => {
  // forma sucia
  //const params = route.params;

  // forma limpia
  //const params = route.params as RouterParams;

  // forma recomendada
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      // forma recomendada
      title: params.nombre,
      // forma limpia
      //title: params.nombre,
      // sucia  title: params?.nombre as any, // confia en mi Typescript
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonaScreen;
