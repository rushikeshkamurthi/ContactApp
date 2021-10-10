import React, { useContext, useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import FlashScreenComponent from '../components/common/FlashScreen';

const AppNavContainer = () => {

  console.log("=====================checking login details====================");
  const { authState:{isLoggerIn,error,developername} } = useContext(GlobalContext);
  const [isAuthenticated, setisAuthenticated] = useState(isLoggerIn);
const [isAuthLoaded, setisAuthLoaded] = useState(false) // for screen rendering issue
  
  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');

      if (user) {
        setisAuthLoaded(true);
        setisAuthenticated(true);
      } else {
        setisAuthLoaded(true);
        setisAuthenticated(false);
      }
    } catch (error) {

    }

  }
  useEffect(() => {
    getUser();

  },[isLoggerIn]);// isLoggerIn is a depedecy here for use effect
console.log("developername",developername);
console.log('error',error);
  console.log('isAuthenticated', isAuthenticated);
  console.log('isAuthLoaded',isAuthLoaded);
  return (
    <>{isAuthLoaded?(
    <NavigationContainer>
      {  isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
    ):<FlashScreenComponent></FlashScreenComponent>}

    </>
  );
};
export default AppNavContainer;