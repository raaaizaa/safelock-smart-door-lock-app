import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../components/pages/signup-screen/signup-screen';
import SigninScreen from '../components/pages/signin-screen/signin-screen';
import Homescreen from '../components/pages/homescreen/homescreen';
import DetailScreen from '../components/pages/detail-screen/detail-screen';
import GenerateScreen from '../components/pages/generate-screen/generate-screen';
import SuccessScreen from '../components/pages/success-screen/success-screen';
import AddRoomScreen from '../components/pages/add-room-screen/add-room-screen';
import {RootStackParamList} from '../../App';

const Stack = createStackNavigator<RootStackParamList>();

export default function Router() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Generate" component={GenerateScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
      <Stack.Screen name="AddRoom" component={AddRoomScreen} />
    </Stack.Navigator>
  );
}
