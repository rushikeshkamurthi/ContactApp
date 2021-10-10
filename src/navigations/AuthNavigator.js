import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LOGIN, REGISTER } from '../constants/routeNames';
import Login from '../screens/Login';
import Register from '../screens/Register';


const Stack = createNativeStackNavigator();
function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={LOGIN}  screenOptions={{headerShown: false} }  > 

      <Stack.Screen name={LOGIN} component={Login } />

      <Stack.Screen name={REGISTER} component={Register} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;