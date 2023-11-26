import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import {roomItem} from '../../../variables/room';
import RoomCard from '../../ui/room-card/room-card';
import HostCard from '../../ui/host-card/host-card';

const Homescreen = () => {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <ScrollView style={{backgroundColor: '#FFF'}}>
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#272262',
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
        <View style={{paddingVertical: 48, gap: 24}}>
          <View>
            <Text
              style={{
                fontFamily: 'Poppins SemiBold',
                color: '#272262',
                fontSize: 18,
                paddingHorizontal: 24,
              }}>
              Ongoing Meeting
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{marginTop: 8,}}>
              {roomItem.map((data, index) => (
                <RoomCard
                  key={index}
                  id={data.id}
                  name={data.name}
                  image={data.image}
                />
              ))}
            </ScrollView>
          </View>
          <View>
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins SemiBold',
                  color: '#272262',
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
};

export default Homescreen;
