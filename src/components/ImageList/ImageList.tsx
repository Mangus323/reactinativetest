import * as React from "react";
import {StyleSheet, Text, View, FlatList, Button, ActivityIndicator} from 'react-native';
import ImageBox from "./ImageBox/ImageBox";
import {ImageListProps} from "./ImageListContainer";
import {useEffect} from "react";
import {useRoute} from "@react-navigation/native";

const ImageList = (props: ImageListProps & { navigation: any }) => {
    useEffect(() => {
        if (!props.data && !props.loading) {
            props.getImages()
        }
    })

    let imageArray: Array<typeof props.data[0] | "empty">

    if (props.data) {
        imageArray = [...props.data]
        let difference = 4 - props.data.length % 4
        for (let i = 0; i < difference; i++) {
            imageArray.push("empty")
        }
    }
    const onClick = (id: number) => {
        props.setCurrentImage(id)
        props.navigation.navigate("FullImage")
    }

    return (
        <View style={styles.container}>
            {props.data ? <FlatList
                data={imageArray}
                renderItem={({item, index}) => {
                    if (item !== "empty") {
                        let data = {
                            favorite: item.favorite,
                            url: item.urls.small,
                            click: onClick,
                            id: item.id
                        }
                        return <ImageBox data={data} key={index}/>
                    } else {
                        return <ImageBox key={index}/>
                    }
                }}
                numColumns={4}
            /> : <ActivityIndicator/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 0,
        margin: 11.5,
        marginBottom: 0
    },
})

export default ImageList
