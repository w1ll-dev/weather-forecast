import React from 'react';
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { Main } from './src/Main';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  return <Main />;
}
