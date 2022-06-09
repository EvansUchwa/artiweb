import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { Button } from "react-native-web";
import Home from "../routes/home";
import SplashScreen from "../routes/splashScreen";
import Tuto from "../routes/tuto";
const Stack = createStackNavigator();



function RedirectToPage({ navigation }) {
    const goTo = () => navigation.navigate("Home");
    return <View>
        <Text>
            Je suis la redirection
            <Button title="Clique pour rediriger"
                onPress={() => goTo()} ></Button>
        </Text>
    </View>
}

function Root() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Tuto" component={Tuto} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}

export default Root;
