import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListItem from '../Message/ListItem';
import firestore from '@react-native-firebase/firestore';
import {useUsers} from '../../hooks/useUsers';

const Users = () => {
  const [users, setUsers] = useState<any>([]);
  const user: any = useUsers();

  const getusers = async () => {
    const data = (
      await firestore()
        .collection('users')
        .where('fk_id', '!=', user?.uid)
        .get()
    ).docs;

    setUsers(data);
  };

  getusers();

  return (
    <View>
      <ListItem data={users} />
    </View>
  );
};

export default Users;
