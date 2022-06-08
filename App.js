import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import WebView from 'react-native-webview';

export default function App() {
  const [splash, setSplash] = useState(false)

  useEffect(() => {
    // setTimeout(() => setSplash(true), 3000)
  }, [])

  // if (!splash) {
  //   return <SplashScreen />

  // }
  return (
    <SplashScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
{/* <WebView source={{
        uri: 'https://mon.artiweb.app'
      }}
        style={{ marginTop: 20 }} /> */}