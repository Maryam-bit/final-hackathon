import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import WelcomeScreen from './component/WelcomeScreen'
import AppNavigation from "./component/config/navigation";

const App = () => {
  return (
       <AppNavigation />
      // <WelcomeScreen/>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
