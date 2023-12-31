import {StackActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {roomItem} from '../../../variables/room';

export default function SuccessScreen({route}) {
  const navigation = useNavigation();
  const {id} = route.params;

  const back = () => {
    navigation.dispatch(StackActions.replace('Home'));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#272262',
      }}>
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../../../../assets/icon/success-icon.png')} />
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Poppins Bold',
              fontSize: 20,
            }}>
            You have joined this room!
          </Text>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Poppins Regular',
              fontSize: 16,
            }}>
            You may now enter the meeting
          </Text>
        </View>
        <View style={{gap: 12}}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Poppins Regular',
              fontSize: 16,
            }}>
            Verified at {roomItem[id].joined}
          </Text>
          <Pressable
            style={{backgroundColor: 'white', borderRadius: 6, padding: 8}}
            android_ripple={{color: '#F1F0F0'}}
            onPress={back}>
            <Text
              style={{
                fontFamily: 'Poppins Bold',
                color: '#272262',
                fontSize: 16,
                textAlign: 'center',
              }}>
              Back
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
