import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {text, withKnobs} from '@storybook/addon-knobs';
import Video from 'react-native-video';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

storiesOf('CenteredView', module)
  .addDecorator(withKnobs)
  .add('with knob for video url video not playing', () => (
    <Video
      style={{flex: 1}}
      source={{
        uri: text(
          'video',
          'https://firebasestorage.googleapis.com/v0/b/bootvideo-ee8fa.appspot.com/o/View_From_A_Blue_Moon_Trailer-720p.mp4?alt=media&token=91f81dd5-628d-4a6b-ab68-21232e8fe79b',
        ),
      }}
    />
  ))
  .add('static video url video playing', () => (
    <Video
      style={{flex: 1}}
      source={{
        uri:
          'https://firebasestorage.googleapis.com/v0/b/bootvideo-ee8fa.appspot.com/o/View_From_A_Blue_Moon_Trailer-720p.mp4?alt=media&token=91f81dd5-628d-4a6b-ab68-21232e8fe79b',
      }}
    />
  ));
