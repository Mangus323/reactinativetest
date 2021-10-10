import * as React from 'react';
//import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
} from 'react-native';
import Header from "./components/Header/Header";
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from "react-redux";
import store from "./store/store";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainScreen from "./screens/Main/MainScreen";
import ImageScreen from "./screens/Image/ImageScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={"Main"}
                    screenOptions={{headerShown: false}}
                >

                    <Stack.Screen name="Main" component={MainScreen}/>
                    <Stack.Screen name="FullImage" component={ImageScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}


