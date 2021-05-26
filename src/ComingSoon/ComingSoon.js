import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Heart from "../../assets/Icons/Heart";
import ContentList from "../ContentList/ContentList";

function RecomList({ Content }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(Content);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Heart />
        <Text style={styles.heading}>Stories Coming Soon You'll love...</Text>
      </View>
      <View style={styles.subContainer2}>
        <ScrollView horizontal>
          <ContentList Content={content} />
        </ScrollView>
      </View>
    </View>
  );
}

export default RecomList;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    // alignContent: "center",
    // justifyContent: "center",
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  heading: {
    color: "white",
    fontSize: 16,
    fontWeight: "800",
    marginLeft: 15,
  },
  subContainer2: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
});
