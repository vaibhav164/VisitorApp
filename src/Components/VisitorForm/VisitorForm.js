import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {DeviceHeight, DeviceWidth} from '../../Utils/Constants';
import SubmitButton from '../Button/SubmitButton';
import FormInput from '../FormInput/FormInput';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import {Text} from 'react-native-paper';
const VisitorForm = ({navigation}) => {
  const handlePress = () => {
    console.log('Vlaues of Button');
  };
  return (
    <View style={styles.container}>
      <FormInput label="Reason of Visit" multiline={true} />
      <View>
        <TouchableOpacity style={styles.buttonIconBox}>
          <View style={styles.button}>
            <Text style={styles.notificationText}>Notify EveryOne</Text>
          </View>
          <MaterialIcons name="notifications-on" size={25} color="#6D67E4" />
        </TouchableOpacity>
        <SubmitButton onPress={handlePress} title="Submit" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '3%',
    marginTop: 10,
    flex: 1,
    width: DeviceWidth,
    height: DeviceHeight * 0.8,
    justifyContent: 'space-between',
  },
  buttonIconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: DeviceHeight * 0.1,
  },
  notificationText: {
    fontSize: 25,
    color: '#6D67E4',
    fontWeight: '700',
  },
  button: {
    paddingRight: 10,
  },
});

export default VisitorForm;
