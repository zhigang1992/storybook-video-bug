/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';

const App = () => {
  return (
    <Video
      style={styles.video}
      source={{
        uri:
          'https://firebasestorage.googleapis.com/v0/b/bootvideo-ee8fa.appspot.com/o/View_From_A_Blue_Moon_Trailer-720p.mp4?alt=media&token=91f81dd5-628d-4a6b-ab68-21232e8fe79b',
      }}
    />
  );
};

const styles = StyleSheet.create({
  video: {
    flex: 1,
  },
});

export default App;
