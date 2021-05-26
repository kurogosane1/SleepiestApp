import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import StoriesScreen from "../../screens/StoriesScreen";
import SoundPlayer from "../../screens/SoundPlayer";

const StoriesSreenStack = createStackNavigator();

function StoriesNavigator() {
  return (
    <StoriesSreenStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}>
      <StoriesSreenStack.Screen name="Stories" component={StoriesScreen} />
      <StoriesSreenStack.Screen
        name="Stories Details"
        component={SoundPlayer}
      />
    </StoriesSreenStack.Navigator>
  );
}

export default StoriesNavigator;
