import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View, Text, ScrollView} from 'react-native';
import LoginForm from '../../Components/LoginForm/LoginForm';
import {logoUrl, users} from '../../Utils/Constants';
import {useFocusEffect} from '@react-navigation/native';
const SigninScreen = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [Email, Password]);
  const inintailValue = {
    Email: Email,
    password: Password,
  };
  useFocusEffect(() => {
    (inintailValue.Email = ''), (inintailValue.Password = '');
  });
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
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.welcomeText}>Wecome to Visitor</Text>
        <Image
          source={{
            uri: logoUrl,
          }}
          style={styles.logo}
        />
      </View>
      <LoginForm
        onSubmit={handleSubmit}
        formValue={inintailValue}
        navigation={navigation}
      />
      <View style={styles.signupTextBox}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <Text
          style={styles.colorText}
          onPress={() => navigation.navigate('SignUp')}>
          SignUp
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
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
});

export default SigninScreen;
