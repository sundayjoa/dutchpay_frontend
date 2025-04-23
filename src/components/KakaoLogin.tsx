import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function KakaoLogin() {
    return (
        <TouchableOpacity style = {styles.buttonWrapper}>
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