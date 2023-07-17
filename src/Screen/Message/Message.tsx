import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import React, { useEffect, useState } from 'react';
import {Badge, Button} from 'react-native-paper';
import {signOut} from 'firebase/auth';
import {auth} from '../../firebase';
import {useNavigation} from '@react-navigation/native';
import {removeData} from '../../context/actions';
import {useTailwind} from 'tailwind-rn';
import ListItem from './ListItem';


const Message = () => {

  const [permissions, setPermissions] = useState({});

  useEffect(() => {
    const type = 'notification';
    PushNotificationIOS.addEventListener(type, onRemoteNotification);
    return () => {
      PushNotificationIOS.removeEventListener(type);
    };
  });

  const onRemoteNotification = (notification) => {
    const isClicked = notification.getData().userInteraction === 1;

    if (isClicked) {
      // Navigate user to another screen
    } else {
      // Do something else with push notification
    }
    // Use the appropriate result based on what you needed to do for this notification
    const result = PushNotificationIOS.FetchResult.NoData;
    notification.finish(result);
  };

  const nav = useNavigation();
  const tw = useTailwind();

  const data = [
    {
      id:'123',
      name:'Juphet Vitualla',
    },
    {
      id:'1233',
      name:'Juphet Vitualla2',
    },
    {
      id:'143',
      name:'Juphet Vitualla2',
    },
    {
      id:'1213',
      name:'Juphet Vitualla4',
    }
  ]

  return (
    <View style={tw('p-4')}>
      <Text style={tw('text-xl mb-8')}>Message</Text>
      <ListItem data={data}/>
        
      {/* <Button
        onPress={() => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.r
              nav.navigate('Login');
              removeData();
              console.log('logout');
            })
            .catch(error => {
              console.log('err', error);
            });
        }}>
        Logout
      </Button> */}
    </View>
  );
};

export default Message;
