import 'dotenv/config';

export default {
  expo: {
    name: 'DutchPayApp',
    slug: 'DutchPayApp',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    android: {
      package: 'com.sundayjoa.dutchpayapp',
      jsEngine: 'jsc',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.sundayjoa.dutchpayapp',
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    plugins: [
      'expo-font',
      'expo-secure-store',
      [
        '@react-native-seoul/kakao-login',
        {
          kakaoAppKey: "c935e4adbb69f443af5f127cfa9d323b",
        },
      ],
    ],
    extra: {
      eas: {
        projectId: '0ab183e5-5523-402a-8477-cb1b094952c8',
      },
    },
  },
};
