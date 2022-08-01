import { useEffect, useState } from "react";
import WebView from "react-native-webview";
import { getDataOnLocal } from "../utils/localStorage";
import { View, Linking, Text } from "react-native";



function Home({ navigation }) {
    const [urlState, setUrlState] = useState('https://m.artiweb.app');
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

    return <View style={{ flex: 1, position: "relative" }}>
        <WebView source={{
            uri: urlState
            // html: monHtml
        }}
            startInLoadingState={true}
            setSupportMultipleWindows={false}
            onShouldStartLoadWithRequest={(request) => {
                if (request.url !== "about:blank") {
                    Linking.openURL(request.url)
                    return false;
                } else return true
            }}
        />
    </View>
}


function Modal({ props }) {
    return <View style={{
        position: "absolute", display: 'flex', alignItems: 'center', justifyContent: 'center',
        top: 0, bottom: 0, left: 0, right: 0, zIndex: 1, backgroundColor: "rgba(0,0,0,0.5)",
    }}>
        <View style={{ position: "absolute", left: 20, right: 20, top: 25, bottom: 25, backgroundColor: 'white', borderRadius: 20 }}>
            <View style={{ marginTop: 10, marginBottom: 10, display: 'flex', paddingRight: 10 }}>

                <Text style={{
                    textAlign: "right", marginLeft: "auto", padding: 10,
                    backgroundColor: "#f44336", borderRadius: 10, color: 'white'
                }}
                    onPress={() => props.setModal(false)}>Revenir a artiweb</Text>
            </View>
            <WebView source={{
                uri: props.modalWebView
                // html: monHtml
            }}
                startInLoadingState={true}
            />
        </View>
    </View>
}


export default Home;