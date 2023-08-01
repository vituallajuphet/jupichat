import React from 'react';
import {View, Text} from 'react-native';
import Message from '../Message/Message';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../Feed/Feed';
import Users from '../Users/Users';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MessageStack = () => {
  return (
    <Stack.Navigator initialRouteName="Conversation" >
      <Stack.Screen name="Conversation" component={Users} />
      <Stack.Screen name="Messages" component={Message} />
    </Stack.Navigator>
  );
};

const HomeScreen = () => {
  return (
    // <View style={{padding: 40}}>
    //   <Text>sdf</Text>
    // </View>
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Message" options={{
        headerShown: false
      }} component={MessageStack} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
