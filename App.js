import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import WebView from 'react-native-webview';
import { SafeAreaView } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tuto from './components/tuto';
import "./assets/slick/slick.css"
import "./assets/slick/slick-theme.css"


const storeDataToLocal = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}

const getDataOnLocal = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value;
  } catch (e) {
    // error reading value
  }
}



export default function App() {
  const [splash, setSplash] = useState(false);
  const [tuto, setTuto] = useState(false);
  const [appView, setAppView] = useState(<SplashScreen />)

  useEffect(() => {
    setTimeout(() => {
      getDataOnLocal('tuto')
        .then(res => setTuto(res))
      setSplash(true)
    }, 3000);

  }, [])

  if (!splash) {
    return <SplashScreen />
  } else if (splash && tuto) {
    return <View>
      <Text>
        Notre application sans tuto
      </Text>
    </View>
  }
  return <Tuto />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
{/* <WebView source={{
        uri: 'https://mon.artiweb.app'
      }}
        style={{ marginTop: 20 }} /> */}