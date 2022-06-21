import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import { getDataOnLocal, storeDataToLocal } from "../../utils/localStorage"




export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        GetFCMToke()
    }
}


async function GetFCMToke() {
    let fcmToken = await getDataOnLocal('fcmToken');
    try {
        if (!fcmToken) {
            fcmToken = await messaging().getToken();
            storeDataToLocal('fcmToken', fcmToken)
        }
        axios.post('http://192.168.100.21:8085/fcmToken/add', { fcmToken })
            .then(res => console.log("token de l'appli mis a jour"))
            .catch(err => console.log(err))
        console.log(fcmToken)
    } catch (error) {
        console.log(error)
    }

    // messaging() .getToken()
}


export function NotificationListener() {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });


    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
                setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
            }
        });


    messaging().onMessage(async remoteMessage => {
        console.log('new notification', remoteMessage)
    })
}