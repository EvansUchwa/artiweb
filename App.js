import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from './components/Root';
import { NotificationListener, requestUserPermission } from './src/helpers/pusNotification';


export default function App() {


  useEffect(() => {
    requestUserPermission()
    NotificationListener()
  }, [])
  return <NavigationContainer>
    <Root />
  </NavigationContainer>;
}
