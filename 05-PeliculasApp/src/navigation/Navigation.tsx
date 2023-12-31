import {createStackNavigator} from '@react-navigation/stack';
import {Movie} from '../interfaces/movieInterface';

// Screens
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default Navigation;
