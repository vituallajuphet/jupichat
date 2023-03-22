import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../firebase';
import {collection, addDoc, onSnapshot} from 'firebase/firestore';

const Splash = () => {
  const tw = useTailwind();
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  const addUser = () => {
    console.log('addming');
    const usrdb = collection(db, 'users');
    addDoc(usrdb, {
      name: 'ywawa',
      age: '33',
    })
      .then(res => {
        console.log('ok');
      })
      .catch(e => {
        console.log('e', e);
      });
  };

  signInWithEmailAndPassword(auth, 'vituallajuphet@gmail.com', '123456')
    .then(res => {
      // console.log('logged', res);
    })
    .catch(e => {
      console.log('err', e);
    });

  useEffect(() => {
    setLoading(true);
    const usersQuery = collection(db, 'users');
    onSnapshot(usersQuery, snapshot => {
      let usersList = [];
      snapshot.docs.map(doc => usersList.push({...doc.data(), id: doc.id}));
      setPeople(usersList);
      setLoading(false);
    });

    return () => {};
  }, []);

  return (
    <View style={tw('bg-black flex-[1] justify-center items-center')}>
      <Text variant="displayLarge">JupiChat</Text>
      <Text variant="titleMedium" style={tw('mt-2')}>
        App Version: 0.0.0
      </Text>
      {loading && <Text>fetching</Text>}
      {!loading && (
        <View>
          {people.map((p: any) => {
            return (
              <View key={p.name}>
                <Text>{p.age}</Text>
                <Text>{p.name}</Text>
              </View>
            );
          })}
        </View>
      )}
      <Button
        mode="contained"
        onPress={() => {
          console.log('pressed');
          addUser();
        }}>
        Add User
      </Button>
    </View>
  );
};

export default Splash;
