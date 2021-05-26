import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Audio } from "expo-av";
import { Asset } from "expo-asset";
import { ActivityIndicator } from "react-native-paper";

import PlayButtonIcon from "../assets/Icons/PlayButtonIcon";
import PauseIcon from "../assets/Icons/PauseIcon";
import Rewind from "../assets/Icons/rewind";

const { width, height } = Dimensions.get("window");
const HEIGHT = height;
const WIDTH = width;

function soundsPlayer({ route }) {
  const [music, setMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(); // For Duration of the music
  const [position, setPosition] = useState();
  // For the position of the music

  const { sounds } = route.params;

  const onPlayBackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);

    if (position) {
      position === duration ? music.unloadAsync() : undefined;
    }
  };

  const playCurrentSong = async () => {
    if (music) {
      await music.unloadAsync();
    }
    const [assets] = await Asset.loadAsync(sounds.media);
    const { sound, status } = await Audio.Sound.createAsync(
      assets,
      {
        shouldPlay: isPlaying,
      },
      onPlayBackStatusUpdate
    );
    setMusic(sound);
  };

  const getProgress = () => {
    if (music === null || duration === null || position === null) {
      return 0;
    }
    return (position / duration) * 100;
  };

  const onPlayPausePress = async () => {
    if (!music) {
      return;
    }
    if (isPlaying) {
      await music.stopAsync();
      await setPosition(position);
    } else {
      await music.playFromPositionAsync(position);
    }
  };

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  // To move forward or back a certain length
  const changeTime = async (action) => {
    if (position < 15 * 1000) {
      music.playFromPositionAsync(0);
    }
    switch (action) {
      case "Rewind":
        return await music.playFromPositionAsync(position - 15 * 1000);
      case "Forward":
        return await music.playFromPositionAsync(position + 15 * 1000);
      default:
        return await music.playFromPositionAsync(position);
    }
  };

  useEffect(() => {
    playCurrentSong();
  }, []);

  useEffect(() => {
    return music
      ? () => {
          console.log("unloading song");
          music.unloadAsync();
        }
      : undefined;
  }, [music]);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={sounds.image}
        style={styles.image}
        blurRadius={90}>
        <View style={styles.ImageContainer}>
          <Image source={sounds.image} style={styles.images} />
        </View>
        <View style={styles.header}>
          <Text style={styles.soundsName}>{sounds.name}</Text>
        </View>
        <View style={styles.timeLineContainer}>
          <View style={styles.playerTimeline}>
            <View style={styles.timeLine(getProgress())} />
          </View>
          <View style={styles.timeAudio}>
            <Text style={styles.timer}>
              {position ? millisToMinutesAndSeconds(position) : `0:00`}
            </Text>
            <Text style={styles.timer}>
              {position ? millisToMinutesAndSeconds(duration) : `0:00`}
            </Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => changeTime("Rewind")}>
            <Rewind height={50} width={50} style={styles.rewind} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPlayPausePress}>
            {isPlaying ? (
              <PauseIcon height={90} width={90} />
            ) : (
              <PlayButtonIcon height={90} width={90} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeTime("Forward")}>
            <Rewind height={50} width={50} style={styles.forward} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default soundsPlayer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: WIDTH,
    flexDirection: "column",
  },
  image: {
    height: height,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageContainer: {
    alignItems: "center",
    borderWidth: 10,
    borderColor: "orange",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 20,
  },
  images: {
    height: HEIGHT * 0.25,
    width: WIDTH * 0.8,
    borderRadius: 20,
  },
  header: {
    flexWrap: "wrap",

    padding: 20,
  },
  soundsName: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "700",
    color: "white",
  },
  buttonsContainer: {
    width: WIDTH * 0.8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  forward: {
    transform: [{ rotateY: "180deg" }, { rotate: "270deg" }],
  },
  rewind: {
    transform: [{ rotate: "270deg" }],
  },
  timeLineContainer: {
    padding: 30,
    alignItems: "center",
  },
  timeLine: (prog) => ({
    height: 3,
    borderRadius: 50,
    backgroundColor: "red",
    width: `${prog}%`,
  }),
  playerTimeline: {
    height: 3,
    backgroundColor: "white",
    width: WIDTH * 0.85,
  },
  timeAudio: {
    width: WIDTH * 0.85,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  timer: {
    color: "#F7D06E",
    fontWeight: "500",
    marginLeft: 0,
    marginRight: 0,
  },
});
