import * as React from "react";
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Header = (props: { title?: string }) => {

    return (
        <LinearGradient colors={["#790598", "#BC1399"]} style={styles.container}>
            <Text style={styles.text}>{props.title ? props.title : "null"}</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
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


export default Header


