import {KeyboardAvoidingView, View} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {Button, Text, TextInput} from 'react-native-paper';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase';
import {Context} from '../../context/context';
import {storeData} from '../../context/actions';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const tw = useTailwind();
  const context = useContext(Context);
  const nav = useNavigation();
  const {send, state} = context;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (!email || !password) {
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((res: any) => {
        send({
          type: 'LOGIN_SUCCESS',
          payload: {
            user_data: res.user,
            online: true,
          },
        });
        storeData(res.user);
        nav.navigate('HomeScreen');
      })
      .catch(e => {
        console.log('errs', e);
      });
  };

  return (
    <KeyboardAvoidingView
      // keyboardVerticalOffset={height}
      behavior="padding"
      style={tw('flex-[1] bg-black')}>
      <View style={tw('h-full items-center justify-center p-4 px-6')}>
        <Text variant="displayMedium" style={tw('text-white')}>
          JupiChat
        </Text>
        <View style={tw('w-full mt-4')}>
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            mode="flat"
            label="Email"
            outlineColor="#222"
          />
        </View>
        <View style={tw('w-full mt-8')}>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            mode="flat"
            label="Password"
            outlineColor="#222"
            activeOutlineColor="#fff"
            secureTextEntry
          />
        </View>
        <View style={tw('mt-8 w-full')}>
          <Button
            contentStyle={tw('p-1')}
            mode="outlined"
            buttonColor="#fff"
            labelStyle={tw('text-lg text-black')}
            onPress={() => {
              handleLogin();
            }}>
            LOGIN
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
