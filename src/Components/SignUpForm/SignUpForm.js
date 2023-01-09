import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DeviceHeight, DeviceWidth} from '../../Utils/Constants';
import SubmitButton from '../Button/SubmitButton';
import FormInput from '../FormInput/FormInput';

const SignUpForm = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.container}>
      <FormInput label="First Name" />
      <FormInput label="Last Name" />
      <FormInput label="Contact" keyboardType="number-pad" />
      <FormInput label="Address" />
      <FormInput label="Email" />
      <FormInput label="Password" secureTextEntry={true} />
      <FormInput label="Confirm Password" secureTextEntry={true} />
      <SubmitButton onPress={handlePress} title="Go to Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '3%',
    flex: 1,
    width: DeviceWidth,
    height: DeviceHeight * 0.8,
    justifyContent: 'space-evenly',
  },
});

export default SignUpForm;
