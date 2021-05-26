import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Snooze from '../../assets/Icons/Snooze';
import ContentList from '../ContentList/ContentList';

function Recomm({data, where, color}) {
  const {sounds, Meditation, Stories} = data;
  const recommendations = [...sounds, ...Meditation, ...Stories];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Snooze />
        <Text style={styles.heading}>Recommendations</Text>
      </View>
      <View style={styles.subContainer2}>
        <ScrollView horizontal>
          <ContentList Content={recommendations} where={where} color={color} />
        </ScrollView>
      </View>
    </View>
  );
}

export default Recomm;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  heading: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
    marginLeft: 15,
  },
  subContainer2: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
});
