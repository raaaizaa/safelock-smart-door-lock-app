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
import {useNavigation} from '@react-navigation/core';

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate('Signup' as never);
  };

  const goToHome = () => {
    // if(email === "dummy@gmail.com" && password === "dummy"){
    // }
    navigation.navigate('Home' as never);
  };

  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <ScrollView style={{backgroundColor: '#FFF'}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#403B80',
            paddingVertical: 48,
          }}>
          <Text
            style={{
              fontFamily: 'poppinsBold',
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
              fontFamily: 'poppins',
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
              fontFamily: 'poppins',
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
              fontFamily: 'poppins',
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
                fontFamily: 'poppinsSemibold',
                textAlign: 'center',
                color: 'black',
              }}>
              Sign In
            </Text>
          </Pressable>
          <Text style={{fontFamily: 'poppins', color: 'black'}}>OR</Text>
          <SocialMediaButton text="Sign in" />
          <Pressable onPress={goToRegister}>
            <Text style={{fontFamily: 'poppins', color: 'black'}}>
              Don't have an account? Sign up
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
