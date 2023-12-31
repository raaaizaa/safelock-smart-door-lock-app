import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import SocialMediaButton from '../../templates/social-media-button';
import {useNavigation, StackActions} from '@react-navigation/core';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const alertMessage = () => {
    Toast.show({
      type: 'error',
      text1: 'It is still... not functioning',
      autoHide: true,
      visibilityTime: 2500
    })
  }
  
  const goToRegister = () => {
    navigation.navigate('Signup' as never);
  };

  const goToHome = () => {
    if(email === "dummy@gmail.com" && password === "dummy"){
      navigation.dispatch(StackActions.replace('Home'))
    }else{
      Toast.show({
        type: 'error',
        text1: `Sign in with "dummy@gmail.com" and "dummy" as password`,
        text2:'Due to development, we still hardcode the sign in system',
        autoHide: true,
        visibilityTime: 2500
      })
    }
  };

  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <ScrollView style={{backgroundColor: '#FFF'}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#272262',
            paddingVertical: 48,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins Bold',
              color: '#DCD6F7',
              fontSize: 48,
            }}>
            Sign In
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#FFFF',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 32,
          }}>
          <TextInput
            style={{
              height: 44,
              width: '100%',
              margin: 12,
              paddingHorizontal: 10,
              borderRadius: 30,
              backgroundColor: '#F1F0F0',
              fontFamily: 'Poppins Regular',
              color: 'black',
            }}
            placeholder="Email"
            placeholderTextColor={'black'}
            onChangeText={newText => setEmail(newText)}
          />
          <TextInput
            style={{
              height: 44,
              width: '100%',
              margin: 12,
              paddingHorizontal: 10,
              borderRadius: 30,
              backgroundColor: '#F1F0F0',
              fontFamily: 'Poppins Regular',
              color: 'black',
            }}
            placeholder="Password"
            placeholderTextColor={'black'}
            secureTextEntry
            onChangeText={newText => setPassword(newText)}
          />
          <Text
            style={{
              marginVertical: 24,
              fontFamily: 'Poppins Regular',
              color: 'black',
            }}>
            Forgot Password?
          </Text>
          <Pressable
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: '#424874',
              padding: 6,
              borderRadius: 30,
              marginBottom: 24,
            }}
            onPress={goToHome}>
            <Text
              style={{
                fontFamily: 'Poppins SemiBold',
                textAlign: 'center',
                color: 'black',
              }}>
              Sign In
            </Text>
          </Pressable>
          <Text style={{fontFamily: 'Poppins Regular', color: 'black'}}>OR</Text>
          <SocialMediaButton text="Sign in" onPress={alertMessage} />
          <Pressable onPress={goToRegister}>
            <Text style={{fontFamily: 'Poppins Regular', color: 'black'}}>
              Don't have an account? Sign up
            </Text>
          </Pressable>
        </View>
        <Toast />
      </ScrollView>
    </SafeAreaView>
  );
}
