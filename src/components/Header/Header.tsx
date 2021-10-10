import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => (
    <View style={styles.container}>
        {/*<LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>*/}
            <Text style={styles.text}>abcd</Text>
        {/*</LinearGradient>*/}
    </View>

)

const styles = StyleSheet.create({
    container: {
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffaaaa"


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




export default Header
