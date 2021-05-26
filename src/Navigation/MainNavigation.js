import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Views being imported

import StoriesScreen from "../screens/StoriesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import FireIcon from "../assets/Icons/FireIcon";
import FlowerSvg from "../assets/Icons/FlowerSvg";
import MountainSvg from "../assets/Icons/MountainSvg";
import Dialsvg from "../assets/Icons/dialsvg";
import HomeNavigator from "./Navigators/HomeNavigator";
import MeditationNavigator from "./Navigators/MeditationNavigator";
import StoriesNavigator from "./Navigators/StoriesNavigator";

const Tab = createMaterialBottomTabNavigator();
const inactiveTintColor = "#B1B1B1EC";
// const Tab = createBottomTabNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{ showLabel: true }}
        initialRouteName="For You"
        activeColor="#F7EBEB"
        inactiveColor="#B1B1B1EC"
        barStyle={{ backgroundColor: "tomato" }}>
        <Tab.Screen
          name="For You"
          showLabel={true}
          component={HomeNavigator}
          options={{
            showLabel: true,
            activeTintColor: "#F7EBEB",
            inactiveTintColor: "#B1B1B1EC",
            tabBarLabel: (
              <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "600" }}>
                For You
              </Text>
            ),
            tabBarColor: "#0D131C",
            tabBarIcon: ({ focused }) => (
              <FlowerSvg
                color={focused ? null : inactiveTintColor}
                height={focused ? 24 : 28}
                width={focused ? 24 : 28}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Meditation"
          component={MeditationNavigator}
          options={{
            tabBarLabel: (
              <Text style={{ fontSize: 14, paddingTop: 10, fontWeight: "600" }}>
                Meditation
              </Text>
            ),
            tabBarColor: "#040B2B",
            tabBarOptions: {
              activeTintColor: "#F7EBEB",
              labelStyle: {
                color: "White",
                paddingTop: 10,
                marginTop: 10,
                fontSize: 23,
              },
            },
            tabBarIcon: ({ focused }) => (
              <MountainSvg
                color={focused ? null : inactiveTintColor}
                height={focused ? 24 : 32}
                width={focused ? 24 : 32}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Stories"
          component={StoriesNavigator}
          options={{
            tabBarLabel: (
              <Text style={{ fontSize: 14, paddingTop: 10, fontWeight: "600" }}>
                Stories
              </Text>
            ),
            tabBarColor: "#190a39",
            tabBarIcon: ({ focused }) => (
              <FireIcon
                height={focused ? 25 : 30}
                width={focused ? 25 : 30}
                color={focused ? null : inactiveTintColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: (
              <Text style={{ fontSize: 14, paddingTop: 10, fontWeight: "600" }}>
                Settings
              </Text>
            ),
            tabBarColor: "#1D005C",
            tabBarIcon: ({ focused }) => (
              <Dialsvg
                color={focused ? null : inactiveTintColor}
                height={focused ? 25 : 30}
                width={focused ? 25 : 30}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
