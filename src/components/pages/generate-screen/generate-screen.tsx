import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import GenerateQR from '../../templates/generate-qr-code';
import {useNavigation} from '@react-navigation/core';

export default function GenerateScreen() {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height - 96;

  const back = () => {
    navigation.navigate('Detail' as never);
  };

  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#FFF'}}>
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
            <Text style={{fontFamily: 'poppinsBold', fontSize: 16}}>
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
            <View>
              <Pressable style={{backgroundColor: '#272262', borderRadius: 12}}>
                <Text
                  style={{
                    fontFamily: 'poppinsBold',
                    color: 'white',
                    paddingHorizontal: 24,
                    paddingVertical: 6,
                    fontSize: 14,
                  }}>
                  Regenerate QR Code
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
