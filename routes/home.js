import { useEffect, useState } from "react";
import { Component } from "react";
import WebView from "react-native-webview";
import { getDataOnLocal } from "../utils/localStorage";
import { Linking, Text } from "react-native";
import { Button } from "react-native";


const handleLinks = `
var hyperlinks = document.getElementsByTagName('a');
     
for (var i = 0; i < hyperlinks.length; i++) {
            hyperlinks[i].addEventListener('click', (e) => {
                e.preventDefault()
                // if(e.target.href){
                //     alert('lien artiweb')
                // }else{
                //     alert('Ce n'est pas artiweb')
                // }
                // alert('hoho '+e.target.href)
                e.target.href.includes('artiweb.app') ? alert('inclus') : alert('ninclus pas')

                return false;
            })
         }
        `

const monHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tests bg</title>
</head>
<body>
    <h1>Ma page test</h1>
<div style="display: flex;flex-direction: column;gap: 10px 0;">
    <a href="https://www.google.com/" target="_blank">Lien 1</a>
    <a href="https://www.youtube.com/" > Lien 2</a>
    <a href="https://www.facebook.com/" > Lien 3</a>
    <a href="https://www.github.com/" target="_blank"> Lien 4</a>
    <a href="https://www.instagram.com/"> Lien 5</a>
    <a href="https://mon.artiweb.app/dl/ewAiAHQAIgA6ADEAMgAsACIAcwAiADoAIgBjAGwAYQBzAHMALQBuAGEAdABpAHYAZQAtAHQAYQBiAGwAZQAtAHQAeQBWAFEAMAA0AHoAZQBVADcAawA0ADYAcgA1AFkAeQBaAEYAYgAiACwAIgByACIAOgAiAFkAYQBvAC0AQQAzAFUAaQBTAEsASwBlADYAbQBKAFAAdQByAHkAcQBCAEEAIgAsACIAbgAiADoAIgBEAOkAdABhAGkAbAAgAGQAZQAgAGwAJwBhAHIAdABpAGMAbABlACIAfQA%3D" target="_blank" rel="noopener">Clique ici</a>
</div>

</body>
</html>`



function Home({ navigation }) {
    const [urlState, setUrlState] = useState('https://mon.artiweb.app')
    const [urlContainArtiweb, setUCA] = useState(false)

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

    function handleInternalOrExternalUr() {
        if (urlChange) {
            setUrlState('urlChange')
        }
    }
    return <>
        {
            !urlState.includes('artiweb') && <Button title='Revenir en arriere' color={"#f44336"}
                onPress={() => setUrlState('https://mon.artiweb.app')} />
        }
        <WebView source={{
            uri: urlState
        }}
            javaScriptEnabled={true}
            injectedJavaScript={handleLinks}
            setSupportMultipleWindows={false}
            onNavigationStateChange={(data) => setUrlState(data.url)}
        />
    </>
}



export default Home;