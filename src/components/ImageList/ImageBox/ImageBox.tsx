import * as React from "react";
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import Icon from "../../Icon/Icon";
import {Path, Svg} from "react-native-svg";

type PropsType = {
    data?: {
        url: string,
        favorite: boolean
        click: (id: number) => void
        id: number
    },

}

const ImageBox = (props: PropsType) => {
    if (!props.data) return <View style={styles.empty}/>

    const onClick = () => {
        props.data.click(props.data.id)
    }

    return props.data ?
        <TouchableOpacity onPress={onClick} style={styles.container}>
            {props.data.favorite && <FavoriteButton />}
            <Image source={{uri: props.data.url}} style={styles.img}/>

        </TouchableOpacity> :
        <View style={styles.empty}/>

}

const styles = StyleSheet.create({
    empty: {
        flex: 1,
        aspectRatio: 1,
        marginHorizontal: 3.5,
        marginTop: 5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        aspectRatio: 1,
        borderRadius: 10,
        marginHorizontal: 3.5,
        marginTop: 5,
        backgroundColor: "#C4C4C4",
    },
    img: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
    },
    button: {
        zIndex: 2,
        height: 20,
        width: 20,
        position: "absolute",
        bottom: 5,
        left: 5,
    }

})
const FavoriteButton = () => (
    <View style={styles.button}>
        <Icon name={"Like"}/>
    </View>

)

export default ImageBox


