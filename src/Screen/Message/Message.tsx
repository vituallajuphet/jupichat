import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import React, {useCallback, useEffect, useState} from 'react';
import {Badge, Button} from 'react-native-paper';

import {app, auth, db, db2} from '../../firebase';
import {useNavigation} from '@react-navigation/native';
import {removeData} from '../../context/actions';
import {useTailwind} from 'tailwind-rn';
import ListItem from './ListItem';
import {GiftedChat} from 'react-native-gifted-chat';

import firestore from '@react-native-firebase/firestore';

const Message = () => {
  const [permissions, setPermissions] = useState({});
  const [messages, setMessages] = useState<any>([]);

  const nav = useNavigation();
  const tw = useTailwind();

  const fireRef = firestore().collection('messages');


  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const addMessage = async message => {
    await fireRef.add({
      content: message,
      date: 'asdasd',
      user_id: 'xcvxcvxcv',
    });
  };

  firestore()
    .collection('messages')
    .onSnapshot(
      res => {
        console.log('res', res.docs);
      },
      err => {
        console.log('err', err);
      },
    );

  // useEffect(() => {
  //   const type = 'notification';
  //   PushNotificationIOS.addEventListener(type, onRemoteNotification);
  //   return () => {
  //     PushNotificationIOS.removeEventListener(type);
  //   };
  // });

  // const onRemoteNotification = (notification) => {
  //   const isClicked = notification.getData().userInteraction === 1;

  //   if (isClicked) {
  //     // Navigate user to another screen
  //   } else {
  //     // Do something else with push notification
  //   }
  //   // Use the appropriate result based on what you needed to do for this notification
  //   const result = PushNotificationIOS.FetchResult.NoData;
  //   notification.finish(result);
  // };

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );

    addMessage('asdasdasdasd');
  }, []);

  // const data = [
  //   {
  //     id:'123',
  //     name:'Juphet Vitualla',
  //   },
  //   {
  //     id:'1233',
  //     name:'Juphet Vitualla2',
  //   },
  //   {
  //     id:'143',
  //     name:'Juphet Vitualla2',
  //   },
  //   {
  //     id:'1213',
  //     name:'Juphet Vitualla4',
  //   }
  // ]

  return (
    <View style={tw('flex-1')}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        messagesContainerStyle={{
          backgroundColor: '#fff',
        }}
      />
      {/* <ListItem data={data}/> */}
    </View>
  );
};

export default Message;
