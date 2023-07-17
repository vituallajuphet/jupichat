import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('user_Data', jsonValue);
  } catch (e) {
    console.log('err', e);
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('user_Data');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log('err', e);
    return e;
  }
};

export const removeData = async () => {
  try {
    await AsyncStorage.removeItem('user_Data');
    return true;
  } catch (e) {
    console.log('err', e);
    return false;
  }
};
