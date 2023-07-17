import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {View} from 'react-native';
import {getData} from '../../context/actions';
import {Context} from '../../context/context';

const withAuthWrapper = (Component: any) => {
  return props => {
    const context = useContext(Context);
    const {state} = context;
    const nav = useNavigation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      getData()
        .then(r => {
          const obj = JSON.parse(r);
          if (obj?.user_data?.uid) {
            nav.navigate('HomeScreen');
            setTimeout(() => {
              setLoading(false);
            }, 1000);
          }
        })
        .catch(e => {
          setLoading(false);
        });
    }, []);

    if (state.online) {
      // nav.navigate('Home');
      setLoading(false);
      return;
    }

    if (loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color="red" size={30} />
        </View>
      );
    }

    return <Component {...props} />;
  };
};

export default withAuthWrapper;
