import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';

interface Props {
  name: string;
  image: string;
}

export default function RoomCard({name, image}: Props) {
  const navigation = useNavigation();

  const goToDetail = () => {
    navigation.navigate('Detail' as never);
  };
  return (
    <View
      style={{
        marginHorizontal: 24,
        marginVertical: 12,
        borderRadius: 12,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 4,
        backgroundColor: 'white',
      }}>
      <Pressable android_ripple={{color: '#F1F0F0'}}>
        <Image
          source={{uri: image}}
          width={248}
          height={200}
          style={{borderRadius: 12}}
        />
        <View style={{padding: 6, borderRadius: 12}}>
          <Text style={{fontFamily: 'poppinsSemibold', color: 'black'}}>
            Room {name}
          </Text>
          <Pressable
            android_ripple={{color: '#e4d5ff'}}
            style={{
              alignSelf: 'flex-start',
              borderRadius: 6,
              backgroundColor: '#F4EEFF',
              paddingHorizontal: 24,
              paddingVertical: 2,
              shadowColor: '#000',
            }}
            onPress={goToDetail}>
            <Text
              style={{
                fontFamily: 'poppinsSemibold',
                fontSize: 11,
                color: 'black',
              }}>
              Check
            </Text>
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
}
