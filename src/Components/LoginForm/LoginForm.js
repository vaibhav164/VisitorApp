import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DeviceWidth, noSpaceRegExp, users} from '../../Utils/Constants';
import SubmitButton from '../Button/SubmitButton';
import FormInput from '../FormInput/FormInput';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Text} from 'react-native-paper';
const SignupSchema = Yup.object().shape({
  Email: Yup.string().email('Invalid email').required('Email is Required'),
  Password: Yup.string()
    .matches(noSpaceRegExp, 'Password Cannot have empty space')
    .min(8, 'Shuold have atleast 8 characters')
    .required('Password is Required'),
});
const LoginForm = ({navigation}) => {
  const handleSubmit = val => {
    const ValidUser = users.filter(item => {
      return val.Email === item.userEmail;
    });
    if (ValidUser.length == 0) {
      console.log('Invalid User');
    } else {
      console.log('User inputs are as ', ValidUser);
      navigation.navigate('Home');
    }
  };
  return (
    <Formik
      initialValues={{
        Email: '',
        Password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}>
      {props => (
        <View style={styles.container}>
          <FormInput
            label="Email"
            autoCapitalize="none"
            value={props.values.Email}
            onChangeText={props.handleChange('Email')}
          />
          {props.errors.Email && (
            <Text style={styles.errorText}>{props.errors.Email}</Text>
          )}
          <FormInput
            label="Password"
            secureTextEntry={true}
            value={props.values.Password}
            onChangeText={props.handleChange('Password')}
          />
          {props.errors.Email && (
            <Text style={styles.errorText}>{props.errors.Password}</Text>
          )}
          <SubmitButton onPress={props.handleSubmit} title="Login" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '3%',
    flex: 1,
    width: DeviceWidth,
    justifyContent: 'space-evenly',
  },
  errorText: {
    color: 'red',
  },
});

export default LoginForm;
