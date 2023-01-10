import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AuthNavigator, RootNavigator} from './src/Screens/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {firebase} from '@react-native-firebase/messaging';
// import firebase from 'react-native-firebase';
const App = () => {
  useEffect(() => {
    // storeData(false);
    checkToken();
    requestUserPermission();
  }, []);
  const checkToken = async () => {
    console.log('token', firebase.messaging());
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      console.log('token', fcmToken);
    }
  };
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
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
