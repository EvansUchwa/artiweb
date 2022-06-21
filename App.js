import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from './components/Root';
import {
  PermissionsAndroid
} from 'react-native';
import { NotificationListener, requestUserPermission } from './src/helpers/pusNotification';
import { useState } from 'react';



async function askPermissions() {
  const granted = await PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.CAMERA,
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE

  ]);

  requestUserPermission()
  NotificationListener()
}


export default function App() {
  const [lol, setLol] = useState(null)
  useEffect(() => {
    askPermissions();
  }, [])
  return <NavigationContainer>
    <Root />
  </NavigationContainer>;
}
