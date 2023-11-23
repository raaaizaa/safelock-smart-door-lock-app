import React from 'react'
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  Pressable,
} from 'react-native'
import { useNavigation } from '@react-navigation/core'

export default function DetailScreen() {
  const navigation = useNavigation()

  const back = () => {
    navigation.navigate('Home' as never)
  }

  const goToGenerateQR = () => {
    navigation.navigate('Generate' as never)
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView style={{ backgroundColor: '#FFF' }}>
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
            <Pressable android_ripple={{ color: '#F1F0F0' }} onPress={back}>
              <Image
                source={require('../../../../assets/icon/back.png')}
                width={30}
                height={30}
              />
            </Pressable>
            <Text style={{ fontFamily: 'poppinsBold', fontSize: 16,               color: 'black' }}>
              Detail
            </Text>
            <Pressable>
              <Image
                source={require('../../../../assets/icon/menu.png')}
                width={30}
                height={30}
              />
            </Pressable>
          </View>
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 24,
              }}>
              <Image
                source={{
                  uri: 'https://i.ytimg.com/vi/OTPXfmKLy5U/sddefault.jpg',
                }}
                width={350}
                height={300}
                style={{ borderRadius: 16 }}
              />
            </View>
            <View style={{ paddingHorizontal: 24 }}>
              <View style={{ paddingVertical: 12 }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{ fontFamily: 'poppinsBold', fontSize: 16,               color: 'black' }}>
                    Room 1
                  </Text>
                  <Text style={{ fontFamily: 'poppins' }}>16/20</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#403B80',
                paddingHorizontal: 24,
                paddingVertical: 12,
                flex: 1,
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontFamily: 'poppinsBold',
                  color: 'white',
                  fontSize: 14,
                  paddingVertical: 12,
                }}>
                Description
              </Text>
              <Text
                style={{
                  fontFamily: 'poppins',
                  color: 'white',
                  textAlign: 'left',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  backgroundColor: 'white',
                  marginVertical: 12,
                  paddingVertical: 6,
                  borderRadius: 6,
                }}>
                <Pressable onPress={goToGenerateQR}>
                  <Text
                    style={{
                      fontFamily: 'poppinsBold',
                      textAlign: 'center',
                      color: '#403B80',
                    }}>
                    Join this room
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
