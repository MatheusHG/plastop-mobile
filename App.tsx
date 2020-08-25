import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';

import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { OpenSans_600SemiBold, useFonts } from '@expo-google-fonts/open-sans';
import Routes from './src/Routes';
import store from './src/store';

export default function Main() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    OpenSans_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        backgroundColor="#03071E"
        style="light"
      />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
