import React, {useEffect, useCallback} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useFonts} from 'expo-font';

interface FontProviderProps {
  children: React.ReactNode;
}

export default function FontProvider({children}: FontProviderProps) {
  const [fontsLoaded] = useFonts({
    poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
    poppinsBold: require('../../assets/fonts/Poppins-Bold.ttf'),
    poppinsThin: require('../../assets/fonts/Poppins-Thin.ttf'),
    poppinsBlack: require('../../assets/fonts/Poppins-Black.ttf'),
    poppinsSemibold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
    poppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      SplashScreen.hide();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    SplashScreen.show();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
}
