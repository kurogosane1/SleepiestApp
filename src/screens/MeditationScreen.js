import React, {useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Animated,
  StyleSheet,
} from 'react-native';
import {Covers} from '../assets/Index';

import {mockData, PremiumMed} from '../data/data';
import {Button} from 'react-native-paper';
import ContentList from '../components/ContentList/ContentList';
import {FadeInView} from '../components/Animation/FadeInView';

const MAX_HEIGHT = 320;
const MIN_HEIGHT = 270;

function MeditationScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const {Meditation} = mockData;
  return (
    <View style={styles.container}>
      <View style={styles.HeaderImageContainer}>
        <FadeInView>
          <Animated.Image
            source={Covers.SoundCover}
            style={styles.HeaderImage(scrollY)}
          />
        </FadeInView>
      </View>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
        <View style={{marginTop: MAX_HEIGHT + 10, padding: 10}}>
          <FadeInView>
            <ContentList
              Content={Meditation}
              where={'Meditiation Details'}
              color={'#040B2B'}
            />
          </FadeInView>
          <Button mode="contained" style={styles.trailButton}>
            Try for Free
          </Button>
          <FadeInView>
            <ContentList
              Content={PremiumMed}
              where={'Meditiation Details'}
              color={'#040B2B'}
            />
          </FadeInView>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

export default MeditationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    position: 'relative',
    backgroundColor: '#040B2B',
  },
  HeaderImageContainer: {
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.9,
    shadowRadius: 25.0,
    elevation: 24,
  },
  HeaderImage: scrollY => ({
    position: 'absolute',
    top: -20,
    left: 0,
    height: MAX_HEIGHT,
    width: '100%',
    borderRadius: 24,
    overflow: 'hidden',
    zIndex: 999,

    transform: [
      {
        scale: scrollY.interpolate({
          inputRange: [-MAX_HEIGHT, 0, MAX_HEIGHT],
          outputRange: [1, 1, 1],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: scrollY.interpolate({
          inputRange: [-MAX_HEIGHT, 0, MAX_HEIGHT],
          outputRange: [2, 1, -170],
          extrapolate: 'clamp',
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
    backgroundColor: '#CE5D51',
  },
});
