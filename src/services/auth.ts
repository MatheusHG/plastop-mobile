import AsyncStorage from '@react-native-community/async-storage';

export const STORE_KEY = '@Store-Info';
export const TOKEN_KEY = '@User-Token';
export const USER_KEY = '@Logged-User';

export const login = async (token: string, user: any) => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const isSignedIn = async () => (await AsyncStorage.getItem(TOKEN_KEY)) !== null;

export const setToken = async (token: string) => AsyncStorage.setItem(TOKEN_KEY, token);

export const getToken = async () => AsyncStorage.getItem(TOKEN_KEY);

export const setUser = async (user: any) => {
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUser = async () => {
  const user = await AsyncStorage.getItem(USER_KEY);

  if (user) return JSON.parse(user);
  return null;
};

export const logout = async () => {
  await AsyncStorage.clear();
};
