import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import MusicPlayer from './src/screens/MusicPlayer';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <MusicPlayer />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
