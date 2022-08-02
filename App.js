import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from './components/Root';
// import {
//   PermissionsAndroid
// } from 'react-native';
// import { requestMultiple, PERMISSIONS } from 'react-native-permissions';
import { NotificationListener, requestUserPermission } from './src/helpers/pusNotification';



function askPermissions() {
  // const granted = PermissionsAndroid.requestMultiple([
  //   PermissionsAndroid.PERMISSIONS.CAMERA,
  //   PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  //   PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  //   PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
  // ]).then(res => { console.log(granted) })
  // .catch(err => console.log(err))

  // requestMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.FACE_ID]).then((statuses) => {
  //   console.log('Camera', statuses[PERMISSIONS.IOS.CAMERA]);
  //   // console.log('FaceID', statuses[PERMISSIONS.IOS.FACE_ID]);
  // });

  requestUserPermission();
  NotificationListener();
}


export default function App() {
  useEffect(() => {
    askPermissions();
  }, [])
  return <NavigationContainer>
    <Root />
  </NavigationContainer>
}
