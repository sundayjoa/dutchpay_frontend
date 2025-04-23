import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import KakaoLogin from '../components/KakaoLogin';

const LoginScreen = () => {
    return (
        <View style={styles.screen}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>나누삼</Text>
    
          <View style={styles.kakaoButtonWrapper}>
            <KakaoLogin />
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 96, // Tailwind의 pb-24
      },
      title: {
        fontFamily: 'CookieRun-Bold',
        fontSize: 60,
        color: '#208885',
        textAlign: 'center',
      },
      image: {
        width: '40%',
        height: '20%',
        marginBottom: 30,
      },
      kakaoButtonWrapper: {
        position: 'absolute',
        width: '100%',
        bottom: 25,
      },
    });

export default LoginScreen;