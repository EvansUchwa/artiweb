import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from './components/Root';
import {
  PermissionsAndroid
} from 'react-native';
import { NotificationListener, requestUserPermission } from './src/helpers/pusNotification';



function askPermissions() {
  const granted = PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.CAMERA,
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE

  ]).then(res => { console.log(granted) })
    .catch(err => console.log(err))

  requestUserPermission();
  NotificationListener();
}


export default function App() {
  useEffect(() => {
    askPermissions()
    // .then(() => { })
  }, [])
  return <NavigationContainer>
    <Root />
  </NavigationContainer>;
}
