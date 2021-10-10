import * as React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './homeNavigator';
import { DWRAWER_HOME } from '../constants/routeNames';
import SideMenu from './SideMenu';
import { GlobalContext } from '../context/provider';

const getDrawerContent = (navigation,authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
}
function DrawerNavigator() {
  const drawer = createDrawerNavigator();
  const {authDispatch}= React.useContext(GlobalContext);
  return (
    <drawer.Navigator screenOptions={{
      drawerType: 'slide',
      headerShown: false,
    }} drawerContent={({navigation})=>getDrawerContent(navigation,authDispatch)} >
      <drawer.Screen name={DWRAWER_HOME} component={HomeNavigator} ></drawer.Screen>

    </drawer.Navigator>
  );
}

export default DrawerNavigator;