import React from 'react';
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
import Toast from 'react-native-toast-message'

export default function SignupScreen() {
  const navigation = useNavigation();

  const alertMessage = () => {
    Toast.show({
      type: 'error',
      text1: 'It is still... not functioning',
      autoHide: true,
      visibilityTime: 2500
    })
  }

  const goToSignin = () => {
    navigation.navigate('Signin' as never);
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
            Sign Up
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
          <View style={{flex: 1, width: '100%', paddingBottom: 12}}>
            <TextInput
              style={{
                height: 44,
                width: '100%',
                marginVertical: 12,
                paddingHorizontal: 10,
                borderRadius: 30,
                backgroundColor: '#F1F0F0',
                fontFamily: 'Poppins Regular',
                color: 'black',
              }}
              placeholder="Email"
              placeholderTextColor={'black'}
            />
            <TextInput
              style={{
                height: 44,
                width: '100%',
                marginVertical: 12,
                paddingHorizontal: 10,
                borderRadius: 30,
                backgroundColor: '#F1F0F0',
                fontFamily: 'Poppins Regular',
                color: 'black',
              }}
              placeholder="Password"
              placeholderTextColor={'black'}
              secureTextEntry
            />
            <TextInput
              style={{
                height: 44,
                width: '100%',
                marginVertical: 12,
                paddingHorizontal: 10,
                borderRadius: 30,
                backgroundColor: '#F1F0F0',
                fontFamily: 'Poppins Regular',
                color: 'black',
              }}
              placeholder="Confirm Password"
              placeholderTextColor={'black'}
              secureTextEntry
            />
          </View>
          <Pressable
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: '#424874',
              padding: 6,
              borderRadius: 30,
              marginBottom: 24,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins SemiBold',
                textAlign: 'center',
                color: 'black',
              }}>
              Sign Up
            </Text>
          </Pressable>
          <Text style={{fontFamily: 'Poppins Regular', color: 'black'}}>OR</Text>
          <SocialMediaButton text="Sign up" onPress={alertMessage}/>
          <Pressable onPress={goToSignin}>
            <Text style={{fontFamily: 'Poppins Regular', color: 'black'}}>
              Already have an account? Sign in
            </Text>
          </Pressable>
        </View>
        <Toast />
      </ScrollView>
    </SafeAreaView>
  );
}
