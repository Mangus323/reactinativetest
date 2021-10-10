import * as React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";

type PropsType = {
    onFavorite: () => void
    onDelete: () => void
    isFavorite: boolean
}

const FavoriteDeleteButton = (props: PropsType) => (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.upperButton} onPress={props.onFavorite}>
                {props.isFavorite ? <Text style={styles.text}>Удалить из избранного</Text> :
                    <Text style={styles.text}>Добавить в избранное</Text>}
            </TouchableOpacity>
            <View style={styles.separator}/>
            <TouchableOpacity style={styles.bottomButton} onPress={props.onDelete}>
                <Text style={styles.text}>Удалить изображение</Text>
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
        borderBottomLeftRadius: 30,
        borderBottomEndRadius: 30,
        flex: 1,
        width: "100%",
        backgroundColor: "#FFFFFF",
    },
    upperButton: {
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30,
        flex: 1,
        width: "100%",
        backgroundColor: "#FFFFFF",
    },
    text: {
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 22,
        color: "#000"
    }
})

export default FavoriteDeleteButton

