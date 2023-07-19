import React, {useEffect, useState} from 'react';
import {getData} from '../context/actions';

export const useUsers = () => {
  const [user, setUsers] = useState<any>(undefined);

  const getDatauser = async () => {
    const data = await getData();

    const userdata = data ? JSON.parse(data) : undefined;

    setUsers(userdata);
  };

  useEffect(() => {
    getDatauser();
  }, []);

  return user;
};
