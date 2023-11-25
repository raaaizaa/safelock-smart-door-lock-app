import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  Pressable,
  Modal,
  TextInput,
  Button,
  ToastAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../App';
import {roomItem} from '../../../constants/room';

type DetailProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen = ({route}: DetailProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {id} = route.params;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [password, setPassword] = useState('');

  const back = () => {
    navigation.navigate('Home' as never);
  };

  const goToGenerateQR = () => {
    if (password == selectedItem?.password) {
      navigation.navigate('Generate' as never);
    } else {
      ToastAndroid.show('Wrong password!', ToastAndroid.SHORT);
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const selectedItem = roomItem.find(item => item.id === id);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: '#403B80', flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
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
                source={{uri: selectedItem?.image}}
                width={350}
                height={300}
                style={{borderRadius: 16}}
              />
            </View>
            <View style={{paddingHorizontal: 24}}>
              <View style={{paddingVertical: 12}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins Bold',
                      fontSize: 16,
                      color: 'black',
                    }}>
                    Room {selectedItem?.name}
                  </Text>
                  <Text style={{fontFamily: 'Poppins Regular', color: 'black'}}>
                    {selectedItem?.checkedIn}/{selectedItem?.capacity}
                  </Text>
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
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins Bold',
                  color: 'white',
                  fontSize: 14,
                  paddingVertical: 12,
                }}>
                Description
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins Regular',
                  color: 'white',
                  textAlign: 'left',
                }}>
                {selectedItem?.description}
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
                <Pressable
                  onPress={toggleModal}
                  android_ripple={{color: '#F1F0F0'}}>
                  <Text
                    style={{
                      fontFamily: 'Poppins Bold',
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
        <Modal visible={isModalVisible} transparent={true}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
            }}>
            <View
              style={{
                justifyContent: 'center',
                borderRadius: 24,
                padding: 20,
                width: 300,
                height: 200,
                backgroundColor: 'white',
                gap: 16,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins Bold',
                  color: 'black',
                  fontSize: 20,
                }}>
                Insert Password
              </Text>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <TextInput
                  placeholder={'Enter text'}
                  placeholderTextColor={'black'}
                  style={{
                    color: 'black',
                    borderBottomWidth: 1,
                    width: 240,
                    fontFamily: 'Poppins Regular',
                  }}
                  secureTextEntry
                  onChangeText={text => setPassword(text)}
                />
              </View>
              <View
                style={{justifyContent: 'space-around', flexDirection: 'row'}}>
                <Pressable
                  android_ripple={{color: '#F1F0F0'}}
                  onPress={toggleModal}
                  style={{padding: 6}}>
                  <Text style={{color: 'black', fontFamily: 'Poppins Regular'}}>
                    Cancel
                  </Text>
                </Pressable>
                <Pressable
                  android_ripple={{color: '#F1F0F0'}}
                  style={{padding: 6}}
                  onPress={goToGenerateQR}>
                  <Text style={{color: 'black', fontFamily: 'Poppins Regular'}}>
                    Enter
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
