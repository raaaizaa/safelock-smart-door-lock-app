import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import {roomItem} from '../../../constants/room';
import RoomCard from '../../ui/room-card/room-card';
import HostCard from '../../ui/host-card/host-card';

export default function Homescreen() {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <ScrollView style={{backgroundColor: '#FFF'}}>
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#403B80',
            paddingTop: 48,
            paddingBottom: 24,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins Bold',
              color: '#FFF',
              fontSize: 32,
              paddingStart: 24,
            }}>
            Hello there!
          </Text>
        </View>
        <View style={{paddingVertical: 48}}>
          <View>
            <Text
              style={{
                fontFamily: 'Poppins SemiBold',
                color: '#403B80',
                fontSize: 18,
                paddingHorizontal: 24,
              }}>
              Ongoing Meeting
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{marginTop: 8}}>
              {roomItem.map((data, index) => (
                <RoomCard
                  key={index}
                  id={data.id}
                  name={data.name}
                  image="https://i.pinimg.com/564x/e5/e3/6c/e5e36c585a7a16c952215f47885f7da6.jpg"
                />
              ))}
            </ScrollView>
          </View>
          <View>
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins SemiBold',
                  color: '#403B80',
                  fontSize: 18,
                  paddingHorizontal: 24,
                }}>
                Add Your Own Meeting Room
              </Text>
              <HostCard />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
