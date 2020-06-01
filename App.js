import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text
} from 'react-native';
import Landing from './src/components/pages/Landing';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Landing/>
      </React.Fragment>
    );
  }
}

console.disableYellowBox = true;

export default App;