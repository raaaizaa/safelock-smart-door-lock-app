import React, {useCallback} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Pressable,
  Image,
  Dimensions,
  RefreshControl,
} from 'react-native';
import GenerateQR from '../../templates/generate-qr-code';
import {useNavigation, useFocusEffect} from '@react-navigation/core';
import {useState} from 'react';

export default function GenerateScreen() {
  const [refresh, setRefresh] = useState(false);
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height - 96;

  const pullMe = useCallback(() => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 4000);
  }, []);

  const back = () => {
    navigation.navigate('Detail' as never);
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
            <Text style={{fontFamily: 'Poppins Bold', fontSize: 16, color:'black'}}>
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
            <GenerateQR />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
