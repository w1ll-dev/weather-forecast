import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import fonts from './src/styles/fonts';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.text,
  },
});
