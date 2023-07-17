import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, Login, OnBoard} from '../../Screen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        {/* <Stack.Screen name="OnBoard" component={OnBoard} />*/}
        <Stack.Screen name="Login" component={Login} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
