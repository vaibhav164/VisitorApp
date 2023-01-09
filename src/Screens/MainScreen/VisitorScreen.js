import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {DeviceHeight, DeviceWidth, logoUrl} from '../../Utils/Constants';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
const VisitorScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.HeaderBackbutton}
        onPress={() => {
          navigation.goBack();
        }}>
        <MaterialIcon name="arrow-back-ios" size={20} />
      </TouchableOpacity>
      <View style={styles.topContainer}>
        <Image
          source={{
            uri: logoUrl,
          }}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
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

export default VisitorScreen;
