// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/provider';



function App() {

  return (
    <GlobalProvider>
    <AppNavContainer/>
    </GlobalProvider>
  );
}

export default App;