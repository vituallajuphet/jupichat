import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {signOut} from 'firebase/auth';
import {auth} from '../../firebase';

const Message = () => {
  return (
    <View>
      <Text>Message</Text>
      <Button
        onPress={() => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.
              console.log('logout');
            })
            .catch(error => {
              console.log('err', error);
            });
        }}>
        Logout
      </Button>
    </View>
  );
};

export default Message;
