import * as React from "react";
import {AppStateType} from "../../store/store";
import {DELETE_IMAGE, SET_FAVORITE} from "../../store/reducers/images_reducer";
import {connect, ConnectedProps} from "react-redux";
import {View, Image, StyleSheet, Text} from "react-native";
import FavoriteDeleteButton from "../../components/FavoriteDeleteButton/FavoriteDeleteButton";
import Header from "../../components/Header/Header";

const mapStateToProps = (state: AppStateType) => ({
    ...state.images
})

function mapDispatchToProps(dispatch: any) {
    return {
        setFavorite: () => {
            dispatch({type: SET_FAVORITE})
        },
        deleteImage: () => {
            dispatch({type: DELETE_IMAGE})
        }
    }
}

let connector = connect(mapStateToProps, mapDispatchToProps)
export type ImageListProps = ConnectedProps<typeof connector>;

const ImageScreen = (props: ImageListProps & { navigation: any }) => {
    const onDelete = () => {
        props.navigation.goBack()
        props.deleteImage()
    }

    return (
        <View style={styles.title}>
            <Header title={props.currentImage.name}/>
            <View style={styles.container}>
                <Image style={styles.img} source={{uri: props.currentImage.url}}/>
                <FavoriteDeleteButton onFavorite={props.setFavorite} onDelete={onDelete}
                                      isFavorite={props.currentImage.favorite}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        backgroundColor: "#222222"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        zIndex: 2,
        flex: 1,
        width: "100%",
        height: null,
        maxHeight: "100%",
        resizeMode: "contain"
    }
})


export default connector(ImageScreen)
