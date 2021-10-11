import * as React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import Icon, {IconType} from "../Icon/Icon";

type PropsType = {
    onFavorite: () => void
    onDelete: () => void
    isFavorite: boolean
}

const FavoriteDeleteButton = (props: PropsType) => (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.upperButton} onPress={props.onFavorite}>
                {props.isFavorite ? <UpperButton text={"Удалить из избранного"} icon={"UnLike"}/> :
                    <UpperButton text={"Добавить в избранное"} icon={"Like"}/>}
            </TouchableOpacity>
            <View style={styles.separator}/>
            <TouchableOpacity style={styles.bottomButton} onPress={props.onDelete}>
                <BottomButton/>
            </TouchableOpacity>
        </View>
    </View>
)
const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    buttonContainer: {
        zIndex: 3,
        height: 85,
        backgroundColor: "#FFFFFF",
        margin: 15,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    separator: {
        width: "100%",
        border: "solid",
        borderBottomWidth: 1,
        borderColor: " #C4C4C4",
    },
    bottomButton: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderBottomLeftRadius: 30,
        borderBottomEndRadius: 30,
        flex: 1,
        width: "100%",
        backgroundColor: "#FFFFFF",
    },
    upperButton: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30,
        flex: 1,
        width: "100%",
        backgroundColor: "#FFFFFF",
    },
    text: {
        margin: 5,
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 22,
        color: "#000"
    }
})

const UpperButton = (props: { text: string, icon: IconType }) => (
    <>
        <Icon name={props.icon}/>
        <Text style={styles.text}>{props.text}</Text>
    </>
)
const BottomButton = () => (
    <>
        <Icon name={"Delete"}/>
        <Text style={styles.text}>Удалить изображение</Text>
    </>
)

export default FavoriteDeleteButton

