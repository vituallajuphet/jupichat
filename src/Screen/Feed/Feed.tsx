import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../../context/context';
import { useTailwind } from 'tailwind-rn';

const Feed = () => {

  const tw = useTailwind();

  return (
    <View>
        <Text>Feed</Text>
    </View>
  );
};

export default Feed;
