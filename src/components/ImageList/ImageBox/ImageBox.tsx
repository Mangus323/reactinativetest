import React from "react";
import {StyleSheet, Image, Text} from 'react-native';

const ImageBox = () => (
    <Image style={styles.container} src={"https://reactnative.dev/img/tiny_logo.png"}>

    </Image>

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




export default ImageBox



//#C4C4C4
