import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {DeviceHeight, DeviceWidth, users} from '../../Utils/Constants';
import SubmitButton from '../Button/SubmitButton';
import FormInput from '../FormInput/FormInput';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
  Note: Yup.string().required('Required Field'),
});
const VisitorForm = ({navigation}) => {
  const handlePress = async val => {
    try {
      const jsonValue = JSON.stringify(val);
      await AsyncStorage.setItem('Visitor_note', jsonValue);
      console.log('Values of Note', await AsyncStorage.getItem('Visitor_note'));
      navigation.navigate('ConfirmationScreen');
    } catch (e) {
      console.log('Values', val);
    }
  };
  return (
    <Formik
      initialValues={{
        Note: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handlePress}>
      {props => (
        <View style={styles.container}>
          <FormInput
            label="Reason of Visit"
            value={props.values.Note}
            onChangeText={props.handleChange('Note')}
            multiline={true}
          />
          <View>
            <TouchableOpacity style={styles.buttonIconBox}>
              <View style={styles.button}>
                <Text style={styles.notificationText}>Notify EveryOne</Text>
              </View>
              <MaterialIcons
                name="notifications-on"
                size={25}
                color="#6D67E4"
              />
            </TouchableOpacity>
            <SubmitButton onPress={props.handleSubmit} title="Submit" />
          </View>
        </View>
      )}
    </Formik>
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
