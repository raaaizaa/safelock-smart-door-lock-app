import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function HostCard() {
  const navigation = useNavigation();

  const goToAddRoom = () => {
    navigation.navigate('AddRoom' as never);
  };

  return (
    <View
      style={{
        marginHorizontal: 24,
        borderRadius: 24,
        height: 160,
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 4,
        overflow: 'hidden',
        backgroundColor: 'white',
      }}>
      <Pressable
        style={{
          justifyContent: 'space-between',
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#272262',
        }}
        android_ripple={{color: '#524e81'}}
        onPress={goToAddRoom}>
        <Image
          source={{
            uri: 'https://cdn-5db27433f911da130c7ce697.closte.com/wp-content/uploads/2019/11/meetings-and-events.slide_.66-e1596476467588.jpg',
          }}
          width={200}
          height={200}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontFamily: 'Poppins SemiBold', color: 'white'}}>
            Add Room
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
