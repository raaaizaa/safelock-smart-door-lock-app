import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function HostCard() {
  const navigation = useNavigation();

  const goToAddRoom = () => {
    console.log('tes')
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
          backgroundColor: '#403B80',
        }}
        android_ripple={{color: '#F1F0F0'}}
        onPress={goToAddRoom}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/564x/e5/e3/6c/e5e36c585a7a16c952215f47885f7da6.jpg',
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
