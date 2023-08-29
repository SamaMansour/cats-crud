// Assuming you're using @react-navigation/stack
/* eslint-disable */ 
import { createStackNavigator } from '@react-navigation/stack';
import CreateCatScreen from '../../screens/CreateCat/CreateCat';
import ListCatsScreen from '../../screens/ListCats/ListCats';
import EditCatScreen from '../../screens/EditCat/EditCat';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CreateCat">
      <Stack.Screen name="CreateCat" component={CreateCatScreen} />
      <Stack.Screen name="ListCats" component={ListCatsScreen} />
      <Stack.Screen name="EditCat" component={EditCatScreen} />

    </Stack.Navigator>
  );
};

export default AppNavigator;
