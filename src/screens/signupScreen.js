//Màn hình Đăng ký

import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Title } from 'react-native-paper';

import FormButton from '../components/formButton';
import FormInput from '../components/formInput';
import Loading from '../components/loading';


export default function SignupScreen({ navigation }) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Đăng ký ngay thôi nào!</Title>
      <FormInput
        labelName='Tên hiển thị'
        value={displayName}
        autoCapitalize='none'
        onChangeText={(userDisplayName) => setDisplayName(userDisplayName)}
      />
      <FormInput
        labelName='Email'
        value={email}
        autoCapitalize='none'
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      <FormInput
        labelName='Mật khẩu'
        value={password}
        secureTextEntry={true}
        onChangeText={(userPassword) => setPassword(userPassword)}
      />
      <FormButton
        title='Đăng ký'
        modeValue='contained'
        labelStyle={styles.loginButtonLabel}
        onPress={() => register(displayName, email, password)}
      />
      <IconButton
        icon='keyboard-backspace'
        size={30}
        style={styles.navButton}
        iconColor='#5b3a70'
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10
  },
  loginButtonLabel: {
    fontSize: 18
  },
  navButtonText: {
    fontSize: 22
  },
  navButton: {
    marginTop: 10
  }
});