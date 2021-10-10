import * as React from "react";
import {StyleSheet, Image, Text, View, FlatList, Button} from 'react-native';
import ImageBox from "./ImageBox/ImageBox";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../store/store";
import {GET_IMAGES} from "../../store/saga/saga";
import {SET_FAVORITE} from "../../store/reducers/images_reducer";

const mapStateToProps = (state: AppStateType) => ({
    ...state.images
})

function mapDispatchToProps(dispatch: any) {
    return {
        getImages: () => {
            dispatch({type: GET_IMAGES})
        },
        setFavorite: (id: number) => {
            dispatch({type: SET_FAVORITE, id})
        }
    }
}

let connector = connect(mapStateToProps, mapDispatchToProps)
type DialogProps = ConnectedProps<typeof connector>;

const ImageList = (props: DialogProps) => {
    if (props.data) {
        let difference = props.data.length % 4
        for (let i = 0; i < difference; i++) {
            props.data.push({urls: {small: "", full: ""}, name: "", favorite: false})
        }
    }

    return (
        <View style={styles.container}>
            <Button onPress={props.getImages} title={"aasdsd"}/>
            {props.data ? <FlatList
                data={props.data}
                renderItem={({item, index}) => <ImageBox url={item.urls.small} key={item.key} id={index} click={props.setFavorite} favorite={item.favorite}/>}
                numColumns={4}
            /> : <Text>nothing</Text>}
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
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        paddingTop: 0
    },
})

export default connector(ImageList)
