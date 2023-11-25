import React, {useEffect, useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {generateString} from '../../utils/generate-string';
import database from '@react-native-firebase/database';
import { useNavigation, StackActions } from '@react-navigation/native';

const IMAGE_SIZE = '500x500';

export default function GenerateQR() {
  const [uri, setUri] = useState('');
  const [doorStatus, setDoorStatus] = useState(Boolean);
  const navigation = useNavigation();

  function addQRToFirebase(qrString: number) {
    database().ref().update({
      storedQRString: qrString,
    });
  }

  function fetchDoorStatus(doorStatus: boolean) {
    useEffect(() => {
      const onValueChange = database()
        .ref()
        .on('value', snapshot => {
          console.log('doorStatus: ', snapshot.val().doorStatus);
          setDoorStatus(snapshot.val().doorStatus);
        });

      return () => database().ref().off('value', onValueChange);
    }, [doorStatus]);
  }

  useEffect(() => {
    const string = generateString();
    const newUri = `https://api.qrserver.com/v1/create-qr-code/?size=${IMAGE_SIZE}&data=${string}`;
    setUri(newUri);
    addQRToFirebase(string);
  }, []);

  fetchDoorStatus(doorStatus);
  
  if(doorStatus){
    navigation.dispatch(StackActions.replace('Success'))
  }

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#FFF',
        overflow: 'hidden',
      }}>
      {uri === '' ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Image source={{uri: uri}} style={{width: 350, height: 350}} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins Medium',
              color: 'black',
              paddingVertical: 24,
            }}>
            Direct this QR code toward the camera!
          </Text>
        </>
      )}
    </View>
  );
}
