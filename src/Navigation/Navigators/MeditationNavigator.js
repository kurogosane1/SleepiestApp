import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import MeditationScreen from '../../screens/MeditationScreen';
import SoundPlayer from '../../screens/SoundPlayer';

const MeditationStack = createStackNavigator();

function MeditationNavigator() {
  const forFade = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return (
    <MeditationStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}>
      <MeditationStack.Screen name="Meditation" component={MeditationScreen} />
      <MeditationStack.Screen
        name="Meditiation Details"
        component={SoundPlayer}
      />
    </MeditationStack.Navigator>
  );
}

export default MeditationNavigator;
