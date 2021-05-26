import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import SoundPlayer from '../../screens/SoundPlayer';

const HomeScreenStack = createStackNavigator();

function HomeNavigator() {
  const forFade = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return (
    <HomeScreenStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}>
      <HomeScreenStack.Screen name="For You" component={HomeScreen} />
      <HomeScreenStack.Screen name="SoundDetail" component={SoundPlayer} />
    </HomeScreenStack.Navigator>
  );
}

export default HomeNavigator;
