import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootNavigator from './src/Screens/Navigation';
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <RootNavigator />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
export default App;
