import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            {/* <Image
                style={stylesImage.tinyLogo}
                source={
                    {
                        uri: "https://res.cloudinary.com/glide/image/fetch/f_auto,w_150,h_150,c_lfill/https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fglide-prod.appspot.com%2Fo%2Ficon-images%252Fanonymous-c5d59cbe-0727-4227-85e8-2e6d2a5e700d.png%3Falt%3Dmedia%26token%3D04148811-ba50-4e00-b231-3aad8469fec4"
                    }
                } /> */}
            <Image
                style={stylesImage.tinyLogo}
                source={
                    require('./assets/images/logo.webp')
                } />
            <Text style={styles.textabsolute}>Artiweb</Text>
        </View>
    );
}

const stylesImage = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 100,
        height: 100
    },
    logo: {
        width: 66,
        height: 58
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#f44336',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textabsolute: {
        position: "absolute",
        bottom: 20,
        color: "white",
        fontWeight: "bold",
        fontSize: 50
    }
});