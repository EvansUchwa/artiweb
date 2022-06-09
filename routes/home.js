import { View, Text } from "react-native";
import { Image } from "react-native";
import WebView from "react-native-webview";

function ourLoader() {
    return <View style={{ backgroundColor: 'white', flex: 1, alignItems: "center", justifyContent: "center" }} >
        <Image
            style={{ width: 300 }}
            source={require("../assets/images/loader.gif")} />
    </View>
}
function Home({ navigation }) {
    return <WebView
        startInLoadingState={true}
        source={{
            uri: 'https://mon.artiweb.app'
        }}
        renderLoading={() => ourLoader()}
        style={{ marginTop: 20 }} />
}


export default Home;