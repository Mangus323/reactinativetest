import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import Header from "./components/Header/Header";
import ImageList from "./components/ImageList/ImageList";

const App = () => {
    return (
        <>
            <Header/>
            <ImageList/>
        </>
    );
};

export default App;
