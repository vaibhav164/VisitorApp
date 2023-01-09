import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DeviceHeight, DeviceWidth} from '../../Utils/Constants';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
const SignUpScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.HeaderBackbutton}
        onPress={() => {
          navigation.goBack();
        }}>
        <MaterialIcon name="arrow-back-ios" size={20} />
      </TouchableOpacity>
      <View style={styles.topContainer}>
        <Text style={styles.title}>SignUp</Text>
        <SignUpForm navigation={navigation} />
      </View>
      <View style={{height: 150}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 250,
    marginVertical: 10,
  },
  welcomeText: {
    flexWrap: 'wrap',
    fontSize: 30,
    color: '#3A4F7A',
    fontWeight: '700',
  },
  colorText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#5BB318',
  },
  accountText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#4C6793',
  },
  title: {
    fontSize: 30,
    color: '#3A4F7A',
    fontWeight: '700',
  },
  signupTextBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 0.3,
    marginTop: 100,
  },
  HeaderBackbutton: {
    alignItems: 'center',
    width: DeviceWidth * 0.2,
    height: DeviceHeight * 0.06,
  },
});

export default SignUpScreen;
