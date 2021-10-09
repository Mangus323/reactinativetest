import React from "react";
import {StyleSheet, Image, Text, View} from 'react-native';
import ImageBox from "./ImageBox/ImageBox";

const ImageList = () => (
    <View>
        <ImageBox />
        <ImageBox />
        <ImageBox />
    </View>

)

const styles = StyleSheet.create({
    container: {
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundGradient: "vertical",
        backgroundGradientTop: "#fff",
        backgroundGradientBottom: "#000"
        //background: "linear-gradient(180deg,  0%, #BC1399 100%);"
    },
    text: {
        fontFamily: "Open Sans",
        fontWeight: "600",
        fontSize: 22,
        color: "#FFFFFF",
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
})




export default ImageList



//#C4C4C4
