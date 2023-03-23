import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {OnboardFlow} from 'react-native-onboard';

const OnBoard = (props: any) => {
  const {navigation} = props;

  return (
    <OnboardFlow
      pages={[
        {
          title: 'Jupiter Chat',
          subtitle: 'An messaging app for two user only!',
          imageUri: 'https://frigade.com/img/example1.png',
        },
        {
          title: 'Warning',
          subtitle: 'This app is intended for me and inday',
          imageUri: 'https://frigade.com/img/example2.png',
        },
      ]}
      type={'fullscreen'}
      onDone={() => {
        navigation.navigate('Login');
      }}
    />
  );
};

export default OnBoard;
