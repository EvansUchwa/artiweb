import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import WebView from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tuto from './components/tuto';
import useTuto from './hooks/useTuto';


export const storeDataToLocal = async (key, value) => {
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

async function removeItemValue(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  }
  catch (exception) {
    return false;
  }
}



export default function App() {
  const [splash, setSplash] = useState(false);
  const { tuto, setTheTuto } = useTuto();
  const [appView, setAppView] = useState(<SplashScreen />)

  useEffect(() => {
    // removeItemValue('tuto')
    setTimeout(() => {
      getDataOnLocal('tuto')
        .then(res => setTheTuto(res))
      setSplash(true)
    }, 3000);

  }, [tuto])

  if (!splash) {
    return <SplashScreen />
  } else if (splash && tuto) {
    return <View style={{ backgroundColor: "red" }}>
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