import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import { getDataOnLocal, storeDataToLocal } from "../../utils/localStorage"
// import { getMacAddress, getIpAddress } from 'react-native-device-info';

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}


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
    let userNoticeId = await getDataOnLocal('userNoticeId')
    try {
        if (!fcmToken) {
            fcmToken = await messaging().getToken();
            storeDataToLocal('fcmToken', fcmToken);
        }
        if (!userNoticeId) {
            userNoticeId = makeid(15)
            storeDataToLocal('userNoticeId', userNoticeId)
        }
        axios.post('https://arti-admin.herokuapp.com/fcmToken/add', { fcmToken, macAddress: userNoticeId })
            .then(res => console.log("token de l'appli mis a jour"))
            .catch(err => console.log('ca va pas'))

        console.log(fcmToken + '___' + userNoticeId)

    } catch (error) {
        console.log(error)
    }
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
                // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
            }
        });


    messaging().onMessage(async remoteMessage => {
        console.log('new notification', remoteMessage)
    })
}