import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {OnboardFlow} from 'react-native-onboard';
import withAuthWrapper from '../../components/AuthWrapper/AuthWrapper';

const OnBoard = (props: any) => {
  const nav = useNavigation();

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
        nav.navigate('Login');
      }}
    />
  );
};

export default withAuthWrapper(OnBoard);
