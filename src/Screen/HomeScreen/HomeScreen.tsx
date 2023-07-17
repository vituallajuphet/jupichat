import React from 'react';
import {View, Text} from 'react-native';
import Message from '../Message/Message';
import Profile from '../Profile/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../Feed/Feed';


const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    // <View style={{padding: 40}}>
    //   <Text>sdf</Text>
    // </View>
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Message" component={Message} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
