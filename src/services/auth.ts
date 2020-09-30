import AsyncStorage from '@react-native-community/async-storage';

export const TOKEN_KEY = '@User-Token';

export const login = async (token: string) => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
};

export const isSignedIn = async () => (await AsyncStorage.getItem(TOKEN_KEY)) !== null;

export const setToken = async (token: string) => AsyncStorage.setItem(TOKEN_KEY, token);

export const getToken = async () => AsyncStorage.getItem(TOKEN_KEY);

export const logout = async () => {
  await AsyncStorage.clear();
};
