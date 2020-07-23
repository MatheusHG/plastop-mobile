import React from 'react';
// import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';

import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { OpenSans_600SemiBold, useFonts } from '@expo-google-fonts/open-sans';
import Routes from './src/routes';

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
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
