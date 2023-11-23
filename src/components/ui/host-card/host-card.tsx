import React from 'react'
import { View, Text, Pressable } from 'react-native'

export default function HostCard() {
  return (
    <View
      style={{
        marginHorizontal: 24,
        borderRadius: 6,
        height: 160,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 4,
        overflow: 'hidden',
        backgroundColor: 'white',
      }}>
      <Pressable
        style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
        android_ripple={{ color: '#F1F0F0' }}>
        <Text style={{ fontFamily: 'poppinsSemibold' }}>Add a new meeting</Text>
      </Pressable>
    </View>
  )
}
