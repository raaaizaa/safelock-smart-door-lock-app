import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';

export default function AddRoomScreen() {
  const navigation = useNavigation();

  const back = () => {
    navigation.dispatch(StackActions.replace('Home'));
  };

  return (
    <SafeAreaView style={{backgroundColor: '#FFF'}}>
      <ScrollView style={{backgroundColor: '#FFF'}}>
        <View style={{backgroundColor: '#FFF'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 24,
              paddingVertical: 12,
            }}>
            <Pressable onPress={back}>
              <Image
                source={require('../../../../assets/icon/back.png')}
                width={30}
                height={30}
              />
            </Pressable>
            <Text style={{fontFamily: 'Poppins Bold', color: 'black'}}>
              Add New Room
            </Text>
            <Pressable>
              <Image
                source={require('../../../../assets/icon/menu.png')}
                width={30}
                height={30}
              />
            </Pressable>
          </View>
          <View style={{padding: 24, gap: 24}}>
            <View>
              <Text style={{fontFamily: 'Poppins Bold', color: 'black'}}>
                Room name
              </Text>
              <TextInput
                style={{
                  borderWidth: 2,
                  borderColor: 'black',
                  height: 48,
                  borderRadius: 6,
                  fontFamily: 'Poppins Regular',
                  color: 'black',
                }}
              />
            </View>
            <View>
              <Text style={{fontFamily: 'Poppins Bold', color: 'black'}}>
                Room location
              </Text>
              <TextInput
                style={{
                  borderWidth: 2,
                  borderColor: 'black',
                  height: 48,
                  borderRadius: 6,
                  fontFamily: 'Poppins Regular',
                  color: 'black',
                }}
              />
            </View>
            <View>
              <Text style={{fontFamily: 'Poppins Bold', color: 'black'}}>
                Participant
              </Text>
              <TextInput
                style={{
                  borderWidth: 2,
                  borderColor: 'black',
                  height: 48,
                  borderRadius: 6,
                  fontFamily: 'Poppins Regular',
                  color: 'black',
                }}
              />
            </View>
            <View>
              <Text style={{fontFamily: 'Poppins Bold', color: 'black'}}>
                Password
              </Text>
              <TextInput
                style={{
                  borderWidth: 2,
                  borderColor: 'black',
                  height: 48,
                  borderRadius: 6,
                  fontFamily: 'Poppins Regular',
                  color: 'black',
                }}
              />
            </View>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', paddingHorizontal: 24}}>
            <Pressable
              style={{
                backgroundColor: '#403B80',
                padding: 12,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 12
              }}>
              <Text style={{color: 'white', fontFamily: 'Poppins SemiBold'}}>
                Add Room
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
