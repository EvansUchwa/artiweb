import { View, Text } from "react-native";
import WebView from "react-native-webview";
function Home({ navigation }) {
    return <WebView source={{
        uri: 'https://mon.artiweb.app'
    }}
        style={{ marginTop: 20 }} />
}

export default Home;