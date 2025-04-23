import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

//폰트 설정
const fetchFonts = () => {
  return Font.loadAsync({
    'CookieRun-Regular' : require('./assets/font/CookieRun Regular.ttf'),
    'CookieRun-Bold' : require('./assets/font/CookieRun Bold.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(!fontsLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <LoginScreen />
    </SafeAreaView>
  );
};

