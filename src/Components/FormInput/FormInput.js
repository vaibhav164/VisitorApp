import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const FormInput = props => {
  return (
    <TextInput
      style={styles.input}
      keyboardType={props.keyboardType}
      label={props.label}
      underLineColor="white"
      secureTextEntry={props.secureTextEntry}
      //   onChangeText={text => console.log(text)}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#C0DEFF',
    underLineColor: '#EB455F',
  },
});
export default FormInput;
