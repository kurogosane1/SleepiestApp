import React, {useRef} from 'react';
import {View, Animated, StyleSheet, Pressable} from 'react-native';

import {Covers} from '../assets/Index';
import {FadeInView} from '../components/Animation/FadeInView';
import RecomList from '../components/ComingSoon/ComingSoon';
import Recomm from '../components/ComingSoon/Recomm';
import ContentList from '../components/ContentList/ContentList';
import {Comingsoon, mockData} from '../data/data';

const MAX_HEIGHT = 320;
const MIN_HEIGHT = 270;

function HomeScreen({navigation}) {
  const scrollY = useRef(new Animated.Value(0)).current;

  const {sounds} = mockData;

  return (
    <View style={styles.container}>
      <View style={styles.HeaderImageContainer}>
        <FadeInView>
          <Animated.Image
            source={Covers.NightCamp}
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
        <View style={{marginTop: MAX_HEIGHT + 10, padding: 5}}>
          <FadeInView>
            <ContentList
              Content={sounds}
              where={'SoundDetail'}
              color={'#0D131C'}
            />
            <Recomm data={mockData} where={'SoundDetail'} color={'#0D131C'} />
            <RecomList Content={Comingsoon} />
          </FadeInView>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    position: 'relative',
    backgroundColor: '#0D131C',
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
});
