import { useEffect, useState, useRef } from "react";
import WebView from "react-native-webview";
import { getDataOnLocal } from "../utils/localStorage";
import { View, Linking, Text } from "react-native";
import { Button } from "react-native";



function Home({ navigation }) {
    const [urlState, setUrlState] = useState('https://mon.artiweb.app');
    const prevUrl = useRef();
    const [modal, setModal] = useState(false);
    const [modalWebView, setModalWebView] = useState('https://www.google.com/');
    const [onw, setOnw] = useState(false)

    const handleLinks = `
    Array.from(document.querySelectorAll('a[target="_blank"]'))
  .forEach(link => {
    // link.removeAttribute('target')
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        alert('ok')
    })
  });`
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

    useEffect(() => {
        prevUrl.current = urlState
    }, [urlState]);

    function dispatchRedirection(event) {
        const validateInternUrls = ['artiweb.app'];
        // 'goafricaonline.com', 'cse.google.com'

        const filtered = validateInternUrls.filter(item => event.url.includes(item))
        if (filtered.length > 0) {
            return setUrlState(event.url)
        }
        setUrlState('https://mon.artiweb.app')
        // Linking.openURL(url)
        setModal(true)
        setModalWebView(event.url)
    }
    return <View style={{ flex: 1, position: "relative" }}>
        {
            !urlState.includes('artiweb') && <Button title='Revenir en arriere' color={"#f44336"}
                onPress={() => setUrlState('https://mon.artiweb.app')} />
        }
        {modal && <Modal props={{ setModal, modalWebView }} />}
        <WebView source={{
            uri: urlState
            // html: monHtml
        }}
            startInLoadingState={true}
            setSupportMultipleWindows={onw}
            onNavigationStateChange={(event) => {

                dispatchRedirection(event, urlState)
            }}
        // javaScriptEnabled={true}
        // mixedContentMode={'compatibility'}
        // injectedJavaScript={handleLinks}
        // onMessage={(event) => { console.log(event) }}
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