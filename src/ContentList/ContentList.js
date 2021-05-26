import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Lock from "../../assets/Icons/Lock";
import { useNavigation } from "@react-navigation/native";

//Dimensions of the List Items
const { width, height } = Dimensions.get("window");
const CardWidth = width * 0.4;
const CardHeight = height * 0.2;

function ContentList({ Content, where, color }) {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      {Content.map((data) => {
        return (
          <TouchableOpacity
            style={styles.cardContainer}
            key={data.id}
            onPress={() => navigation.navigate(where, { sounds: data, color })}>
            <Image source={data.image} style={styles.cardImage} />
            {data.content === "free" ? (
              <View style={styles.top}>
                <Text style={styles.status}>Free</Text>
              </View>
            ) : (
              <View style={styles.top}>
                <Lock />
              </View>
            )}
            <View style={styles.cardTextContainer}>
              <View style={styles.cardTextSubContainer}>
                <Text style={styles.cardText}>{data.name}</Text>
                <Image
                  source={require("../../assets/Icons/PlayButton.png")}
                  style={styles.buttonImage}
                />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default ContentList;

const styles = StyleSheet.create({
  mainContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  cardContainer: {
    position: "relative",
    borderRadius: 25,
    margin: 10,
    padding: 10,
    height: CardHeight,
    width: CardWidth,
  },
  top: {
    position: "absolute",
    top: 10,
    right: 10,

    backgroundColor: "purple",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 25,
  },
  status: {
    color: "white",
    fontWeight: "bold",
  },
  cardImage: {
    width: "100%",
    // height: 200,
    borderRadius: 25,
    position: "absolute",
    resizeMode: "cover",
    bottom: 0,
    left: 0,
    height: CardHeight,
    width: CardWidth,
  },
  cardTextContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#D8160177",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: CardWidth,
    padding: 15,
  },

  cardTextSubContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 10,
  },
  buttonImage: {
    height: 25,
    width: 25,
  },
});
