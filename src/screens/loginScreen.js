//Màn hình đăng nhập

import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { Image } from 'react-native'
import FormButton from '../components/formButton.js';
import FormInput from '../components/formInput.js';
import Loading from '../components/loading.js';
import { AuthContext } from '../context/authProvider.js';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Image 
          source={require('../assets/images/text-logo.png')}
          style={{
            width: 270,
            height: 114,
            marginTop: -50,
            marginBottom: 100,
          }}
        />
      <Title style={styles.titleText}>Chào mừng đến với chúng tôi!</Title>
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
        title='Đăng nhập'
        modeValue='contained'
        labelStyle={styles.loginButtonLabel}
        onPress={() => {
          login(email, password);
        }}
      />
      <FormButton
        title='Đăng ký ngay'
        modeValue='text'
        uppercase={false}
        labelStyle={styles.navButtonText}
        onPress={() => navigation.navigate('Signup')}
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
    fontSize: 16
  }
});