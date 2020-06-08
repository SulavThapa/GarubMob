import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text
} from 'react-native';
import Landing from './src/components/pages/Landing';
import Driverpackages from './src/components/pages/Driver/Driverpackages';
import { NavigationContainer } from '@react-navigation/native';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
      <React.Fragment>
        {/* <Landing/> */}
        <Driverpackages />
      </React.Fragment>
      </NavigationContainer>
    );
  }
}

console.disableYellowBox = true;

export default App;