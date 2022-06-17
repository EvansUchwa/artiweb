import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from './components/Root';
import {
  PermissionsAndroid
} from 'react-native';

async function askPermissions() {
  const granted = await PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.CAMERA,
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE

  ]);
}
export default function App() {

  useEffect(() => {
    askPermissions();
  }, [])
  return <NavigationContainer>
    <Root />
  </NavigationContainer>;
}
