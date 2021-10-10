import * as React from 'react';
import { CONTACT_DETAILS, CREATE_CONTACT, HOME_NAVIGATOR, SETTINGS } from '../constants/routeNames';
import Contact from '../screens/Contact';
import CreateContact from '../screens/CreateContact';
import contactDetails from '../screens/contactDetails';
import setting from '../screens/setting';
import { createStackNavigator } from '@react-navigation/stack';


function HomeNavigator() {

const HomeStack= createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={HOME_NAVIGATOR} screenOptions={{headerTitleAlign:'center'}} >
      <HomeStack.Screen name={HOME_NAVIGATOR} component={Contact}   />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={CONTACT_DETAILS} component={contactDetails} />
      <HomeStack.Screen name={SETTINGS} component={setting} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;