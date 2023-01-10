import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {DeviceHeight, DeviceWidth} from '../../Utils/Constants';
import {Badge} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import VisitorForm from '../../Components/VisitorForm/VisitorForm';
const VisitorScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.HeaderBackbutton}
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialIcon name="arrow-back-ios" size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Badge size={40} children="VS" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.topContainer}>
        <VisitorForm />
      </ScrollView>
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
    width: DeviceWidth * 0.2,
    height: DeviceHeight * 0.06,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '5%',
  },
});

export default VisitorScreen;
