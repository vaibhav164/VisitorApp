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
      autoCapitalize={props.autoCapitalize}
      secureTextEntry={props.secureTextEntry}
      onChangeText={props.onChangeText}
      multiline={props.multiline}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#C0DEFF',
    underLineColor: '#EB455F',
    marginVertical: 5,
  },
});
export default FormInput;
