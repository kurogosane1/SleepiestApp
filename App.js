// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import MainNavigation from "./src/Navigation/MainNavigation";

function App() {
  return (
    <View style={styles.container}>
      <MainNavigation />
      <StatusBar barStyle="light-content" />
    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
