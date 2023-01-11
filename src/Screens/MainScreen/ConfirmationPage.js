import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {DeviceHeight, DeviceWidth, DoneTickLogo} from '../../Utils/Constants';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import SubmitButton from '../../Components/Button/SubmitButton';
const ConfirmationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.HeaderBackbutton}
        onPress={() => {
          navigation.goBack();
        }}>
        <MaterialIcon name="arrow-back-ios" color="#fff" size={20} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Image source={{uri: DoneTickLogo}} style={styles.logo} />
        <Text style={styles.welcomeText}>Greate !!! Your Note is Added</Text>
        <View style={styles.button}>
          <SubmitButton
            onPress={() => {
              navigation.navigate('SignIn');
            }}
            title="Go To Login"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  logo: {
    height: 200,
    width: 250,
    marginTop: DeviceHeight * 0.2,
    alignSelf: 'center',
  },
  welcomeText: {
    flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: 30,
    color: '#3A4F7A',
    fontWeight: '700',
    marginBottom: 10,
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
  signupTextBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 0.3,
    marginTop: 100,
  },
  HeaderBackbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 10,
    backgroundColor: '#6D67E4',
    borderRadius: 20,
    width: DeviceWidth * 0.2,
    height: DeviceHeight * 0.05,
  },
  header: {
    justifyContent: 'center',
    paddingRight: '5%',
  },
  button: {
    alignSelf: 'center',
    width: DeviceWidth * 0.8,
  },
});

export default ConfirmationScreen;
