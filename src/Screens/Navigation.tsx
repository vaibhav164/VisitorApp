import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigninScreen from './Authentication/SignInScreen';
import VisitorScreen from './MainScreen/VisitorScreen';
import SignUpScreen from './Authentication/SignUpScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SigninScreen} />
        <Stack.Screen
          options={{title: 'Home'}}
          name="Home"
          component={VisitorScreen}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
