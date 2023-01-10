import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AuthNavigator, RootNavigator} from './src/Screens/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  useEffect(() => {
    storeData(false);
  }, []);
  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('isLogedIn', jsonValue);
    } catch (e) {
      console.log('Error at app start', e);
    }
  };
  return (
    <SafeAreaView style={styles.root}>
      {/* <RootNavigator /> */}
      <AuthNavigator />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
export default App;
