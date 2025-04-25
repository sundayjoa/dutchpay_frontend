import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useAuthStore } from './src/store/auth';

//폰트 설정
const fetchFonts = () => {
  return Font.loadAsync({
    'CookieRun-Regular' : require('./assets/font/CookieRun Regular.ttf'),
    'CookieRun-Bold' : require('./assets/font/CookieRun Bold.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const checkLoginStatus = useAuthStore((state) => state.checkLoginStatus);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    const unsub = useAuthStore.subscribe((state) => {
      console.log('[🟢 Zustand 상태 변경]', state);
    });
  
    return () => unsub(); // cleanup
  }, []);

  //로그인 상태 확인
  useEffect(() => {
    const initialize = async () => {
      await checkLoginStatus(); 
    };
    initialize();
  }, []);

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
      {isLoggedIn ? <HomeScreen /> : <LoginScreen />}
    </SafeAreaView>
  );
};

