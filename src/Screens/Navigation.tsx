import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigninScreen from './Authentication/SignInScreen';
import VisitorScreen from './MainScreen/VisitorScreen';
import SignUpScreen from './Authentication/SignUpScreen';
import ConfirmationScreen from './MainScreen/ConfirmationPage';

const MainStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen
          options={{title: 'Home'}}
          name="Home"
          component={VisitorScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name="SignIn" component={SigninScreen} />
        <MainStack.Screen
          options={{title: 'Home'}}
          name="Home"
          component={VisitorScreen}
        />
        <MainStack.Screen
          options={{title: 'ConfirmationScreen'}}
          name="ConfirmationScreen"
          component={ConfirmationScreen}
        />
        <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};
