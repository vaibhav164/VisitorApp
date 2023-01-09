import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DeviceWidth} from '../../Utils/Constants';
import SubmitButton from '../Button/SubmitButton';
import FormInput from '../FormInput/FormInput';

const LoginForm = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <FormInput label="Email" />
      <FormInput label="Password" secureTextEntry={true} />
      <SubmitButton onPress={handlePress} title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '3%',
    flex: 0.6,
    width: DeviceWidth,
    justifyContent: 'space-evenly',
  },
});

export default LoginForm;
