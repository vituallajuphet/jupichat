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
import {useUsers} from '../../hooks/useUsers';

const Message = () => {
  const [permissions, setPermissions] = useState({});
  const [messages, setMessages] = useState<any>([]);

  const nav = useNavigation();
  const tw = useTailwind();

  const user: any = useUsers();

  const fireRef = firestore().collection('messages');

  useEffect(() => {
    setMessages([]);
  }, [user]);

  const addMessage = async data => {
    console.log('xxxx', data);
    await fireRef
      .add({
        content: data.text,
        date: data.createdAt,
        user_id: user?.uid,
        _id: data._id,
      })
      .catch(err => {
        console.log('errr', err);
      });
  };

  useEffect(() => {
    if (user) {
      console.log('xxxxxx', user?.uid);
      firestore()
        .collection('messages')
        .where('user_id', 'in', [
          'O70mFh4VegSxqPnNcD2Ju4gGNU82',
          'qgPbdz4vRocQOB1zrUFDoMNCGbL2',
        ])
        .orderBy('date', 'desc')
        .onSnapshot(
          res => {
            setMessages(prev => {
              return res.docs.map(d => {
                const msg = d.data();
                return {
                  _id: msg._id,
                  text: msg.content,
                  createdAt: new Date(),
                  user: {
                    _id: msg.user_id === user?.uid ? 1 : 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                  },
                };
              });
            });
          },
          err => {
            console.log('err', err);
          },
        );
    }
  }, [user]);

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

  const onSend = (messages=[]) => {
    if (user) {
      const {text, _id, createdAt, user} = messages[0];

      const msg = {
        _id: _id,
        text: text,
        createdAt: new Date(),
        user: {
          _id: user?.uid,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      };

      addMessage(msg);
    }
  };

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
      <Text>{user?.uid}</Text>
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
