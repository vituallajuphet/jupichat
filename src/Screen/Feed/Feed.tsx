import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../../context/context';
import {useTailwind} from 'tailwind-rn';
import {signOut} from 'firebase/auth';
import {auth} from '../../firebase';
import {useNavigation} from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { getData, removeData } from '../../context/actions';
import { useUsers } from '../../hooks/useUsers';

const Feed = () => {
  const tw = useTailwind();
  const nav = useNavigation();
  const user = useUsers()
  
  console.log("userssss", user)


  return (
    <View>
      <Text>Profile</Text>
      <Text>{user?.uid}</Text>
      <Button
        onPress={() => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.r
              removeData()
              nav.navigate('Login');
            })
            .catch(error => {
              // console.log('err', error);
            });
        }}>
        Logout
      </Button>
    </View>
  );
};

export default Feed;
