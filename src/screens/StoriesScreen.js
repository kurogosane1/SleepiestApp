import React, { useRef } from "react";
import { View, Animated, Text, Image, StyleSheet } from "react-native";
import { Covers } from "../assets/Index";
import { Button } from "react-native-paper";
import { mockData, Comingsoon } from "../data/data";
import ContentList from "../components/ContentList/ContentList";
import { FadeInView } from "../components/Animation/FadeInView";

const MAX_HEIGHT = 320;
const MIN_HEIGHT = 270;
const header_difference = MAX_HEIGHT - MIN_HEIGHT;

function StoriesScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const { Stories } = mockData;

  return (
    <View style={styles.container}>
      <View style={styles.HeaderImageContainer}>
        <FadeInView>
          <Animated.Image
            source={Covers.BonFireStories}
            style={styles.HeaderImage(scrollY)}
          />
        </FadeInView>
      </View>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}>
        <View
          style={{
            marginTop: MAX_HEIGHT + 10,
            padding: 10,
            flexDirection: "row",
            flexWrap: "wrap",
          }}>
          <FadeInView>
            <ContentList
              Content={Stories}
              where={"Stories Details"}
              color={"#190a39"}
            />
            <Button mode="contained" style={styles.trailButton}>
              Try for Free
            </Button>
            <ContentList
              Content={Comingsoon}
              where={"Stories Details"}
              color={"#190a39"}
            />
          </FadeInView>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

export default StoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    position: "relative",
    backgroundColor: "#190a39",
  },
  HeaderImageContainer: {
    zIndex: 999,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.9,
    shadowRadius: 25.0,
    elevation: 24,
  },
  HeaderImage: (scrollY) => ({
    position: "absolute",
    top: -20,
    left: 0,
    height: MAX_HEIGHT,
    width: "100%",
    borderRadius: 24,
    overflow: "hidden",
    zIndex: 999,

    transform: [
      {
        scale: scrollY.interpolate({
          inputRange: [-MAX_HEIGHT, 0, MAX_HEIGHT],
          outputRange: [1, 1, 1],
          extrapolate: "clamp",
        }),
      },
      {
        translateY: scrollY.interpolate({
          inputRange: [-MAX_HEIGHT, 0, MAX_HEIGHT],
          outputRange: [2, 1, -200],
          extrapolate: "clamp",
        }),
      },
    ],
  }),
  trailButton: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 50,
    marginRight: 10,
    marginLeft: 10,
    padding: 5,
    width: "100%",
    backgroundColor: "#CE5D51",
  },
});
