import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';

interface props {
  text: string;
}

export default function SocialMediaButton({text}: props) {
  const alertMessage = () => {
    ToastAndroid.show('It is still... not functioning ...', ToastAndroid.SHORT);
  };

  return (
    <View style={{width: '100%', marginVertical: 12}}>
      <TouchableOpacity style={style.googleButton} onPress={alertMessage}>
        <Image
          source={require('../../../assets/icon/flat-color-icons_google.png')}
        />
        <Text style={{fontFamily: 'Poppins Regular', color: 'black'}}>
          {text} with Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.facebookButton} onPress={alertMessage}>
        <Image
          source={require('../../../assets/icon/flat-color-icons_facebook.png')}
        />
        <Text style={{fontFamily: 'Poppins Regular', color: '#FFFF'}}>
          {text} with Facebook
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
    width: '100%',
    columnGap: 12,
    padding: 6,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1976D2',
    marginVertical: 12,
    width: '100%',
    columnGap: 12,
    padding: 6,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});
