import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';

const SubmitButton = props => {
  return (
    <Button
      icon={props.icon}
      style={styles.buttonContainer}
      mode="contained"
      onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </Button>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    with: '100%',
    height: 50,
    backgroundColor: '#6D67E4',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
export default SubmitButton;
