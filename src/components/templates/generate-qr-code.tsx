import React, {useEffect, useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {generateString} from '../../utils/generate-string';
import {firebase} from '@react-native-firebase/database';
import database from '@react-native-firebase/database';

const IMAGE_SIZE = '500x500';

export default function GenerateQR() {
  const [uri, setUri] = useState('');

  function storeToFirebase() {
    const reference = firebase
      .app()
      .database(
        'https://safetylockfirebase-default-rtdb.asia-southeast1.firebasedatabase.app/',
      )
      .ref('/users/');
    database()
      .ref('/users/')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
      });
  }

  useEffect(() => {
    const string = generateString();
    const newUri = `https://api.qrserver.com/v1/create-qr-code/?size=${IMAGE_SIZE}&data=${string}`;
    setUri(newUri);
    console.log(newUri);
    storeToFirebase();
  }, []);

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#FFF',
        overflow: 'hidden',
        borderRadius: 16,
        paddingHorizontal: 24,
        paddingVertical: 48,
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 4,
        gap: 24,
      }}>
      {uri === '' ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Image source={{uri: uri}} style={{width: 350, height: 350}} />
          <Text style={{fontSize: 16, fontFamily: 'poppinsMedium'}}>
            Direct this QR code toward the camera!
          </Text>
        </>
      )}
    </View>
  );
}
