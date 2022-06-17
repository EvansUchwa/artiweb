import { useEffect } from "react";
import WebView from "react-native-webview";
import { getDataOnLocal } from "../utils/localStorage";
import { Linking } from "react-native";
function Home({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            getDataOnLocal('tuto')
                .then(res => {
                    if (res) {
                    } else {
                        navigation.navigate('Tuto')
                    }
                })
        }, 3000);

    }, [])
    return <WebView source={{
        uri: 'https://mon.artiweb.app'
    }}
        style={{ marginTop: 0 }}
        geolocationEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        javaScriptEnabled={true}
        allowsInlineMediaPlayback
        bounces={true}
        setSupportMultipleWindows={false} />
}

export default Home;