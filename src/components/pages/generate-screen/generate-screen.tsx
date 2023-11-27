import React, {useCallback, useEffect} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Pressable,
  Image,
  Dimensions,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {
  useNavigation,
  StackActions,
  useFocusEffect,
} from '@react-navigation/core';
import {useState} from 'react';
import database from '@react-native-firebase/database';
import {generateString} from '../../../utils/generate-string';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../App';
import {roomItem} from '../../../variables/room';

type QRProps = NativeStackScreenProps<RootStackParamList, 'Generate'>;

const IMAGE_SIZE = '500x500';

function addQRToFirebase(qrString: number) {
  database().ref().update({
    storedQRString: qrString,
  });
}

function fetchDoorStatus(
  setDoorStatus: React.Dispatch<React.SetStateAction<boolean>>,
) { 
  const onValueChange = database()
    .ref()
    .on('value', snapshot => {
      setDoorStatus(snapshot.val().doorStatus);
    });

  return () => database().ref().off('value', onValueChange);
}

function getCurrentTime() {
  const today = new Date();
  const time = today.toLocaleTimeString();

  return time;
}

const GenerateQR = ({id, navigation}: {id: number; navigation: any}) => {
  const [uri, setUri] = useState('');
  const [doorStatus, setDoorStatus] = useState(false);

  const generateAndFetchData = () => {
    const string = generateString();
    const newUri = 
    `https://api.qrserver.com/v1/create-qr-code/?size=${IMAGE_SIZE}&data=${string}`;
    setUri(newUri);
    addQRToFirebase(string);
    fetchDoorStatus(setDoorStatus);
  };

  useEffect(() => {
    generateAndFetchData();
  }, []);

  useEffect(() => {
    if (doorStatus) {
      roomItem[id].check = true;
      roomItem[id].checkedIn += 1;
      roomItem[id].joined = getCurrentTime();
      navigation.dispatch(StackActions.pop(1));
      navigation.dispatch(StackActions.replace('Success', {id}));
    }
  }, [doorStatus, id, navigation]);

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
};

export default function GenerateScreen({route}: QRProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {id} = route.params;
  const [refresh, setRefresh] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height - 96;

  const pullMe = useCallback(() => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 4000);
  }, []);

  const back = () => {
    navigation.dispatch(StackActions.pop(1));
  };

  useFocusEffect(
    React.useCallback(() => {
      pullMe();
    }, [pullMe]),
  );

  return (
    <SafeAreaView>
      <ScrollView
        style={{backgroundColor: '#FFF'}}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={pullMe} />
        }>
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 24,
              paddingVertical: 12,
            }}>
            <Pressable android_ripple={{color: '#F1F0F0'}} onPress={back}>
              <Image
                source={require('../../../../assets/icon/back.png')}
                width={30}
                height={30}
              />
            </Pressable>
            <Text
              style={{
                fontFamily: 'Poppins Bold',
                fontSize: 16,
                color: 'black',
              }}>
              QR Code
            </Text>
            <Pressable>
              <Image
                source={require('../../../../assets/icon/menu.png')}
                width={30}
                height={30}
              />
            </Pressable>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: windowWidth,
              height: windowHeight,
              gap: 48,
            }}>
            <GenerateQR id={id} navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
