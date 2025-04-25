import React, { useEffect } from 'react';
import { TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import KakaoLogins from '@react-native-seoul/kakao-login';
import { useAuthRequest, makeRedirectUri, ResponseType } from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import { setItemAsync, getItemAsync } from 'expo-secure-store';
import { KAKAO_CLIENT_ID, KAKAO_REDIRECT_URI, BACKEND_API_URL } from '@env';
import axios from 'axios';


WebBrowser.maybeCompleteAuthSession();

type RedirectOptionsWithProxy = {
  native?: string;
  useProxy?: boolean;
}

export default function KakaoLogin() {

  const discovery = {
    authorizationEndpoint: 'https://kauth.kakao.com/oauth/authorize',
    tokenEndpoint: '',
  };

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: KAKAO_CLIENT_ID,
      redirectUri: makeRedirectUri({useProxy: true} as RedirectOptionsWithProxy) as string,
      responseType: ResponseType.Code,
    },
    discovery
  );

  useEffect(() => {
    const handleKakaoLogin = async () => {
      if (response?.type === 'success' && response.params?.code) {
        const code = response.params.code;
        const codeVerifier = request?.codeVerifier;
  
        try {
          const res = await axios.post(`${BACKEND_API_URL}/auth/kakao`, { code, codeVerifier });
          const jwt = res.data.accessToken;
  
          console.log("로그인 확인:",jwt);
          await AsyncStorage.setItem('accessToken', jwt);
        } catch (err) {
          console.error('백엔드 통신 실패:', err);
          Alert.alert('에러', '로그인 실패');
        }
      }
    };
  
    handleKakaoLogin(); 
  }, [response]);

  return (
      <TouchableOpacity style = {styles.buttonWrapper} onPress={() => promptAsync()}>

        <Image
          source={require('../../assets/kakao_login.png')}
          style = {styles.LoginButton}
          resizeMode="contain"
        />
      </TouchableOpacity>
  );
}
    
const styles = StyleSheet.create({
    buttonWrapper: {
        width: '100%',
        alignItems: 'center',
    },
    LoginButton: {
        width: '90%',
    }
});