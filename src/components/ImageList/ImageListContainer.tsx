import * as React from "react";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../store/store";
import {GET_IMAGES} from "../../store/saga/saga";
import {ImageBlock, SET_CURRENT_IMAGE, SET_FAVORITE, SET_TITLE} from "../../store/reducers/images_reducer";
import ImageList from "./ImageList";


const mapStateToProps = (state: AppStateType) => ({
    ...state.images
})

function mapDispatchToProps(dispatch: any) {
    return {
        getImages: () => {
            dispatch({type: GET_IMAGES})
        },
        setCurrentImage: (id: number) => {
            dispatch({type: SET_CURRENT_IMAGE, id})
        },
        setTitle: (title: {name: string, route: string}) => {
            dispatch({type: SET_TITLE, title})
        }
    }
}

let connector = connect(mapStateToProps, mapDispatchToProps)
export type ImageListProps = ConnectedProps<typeof connector>;

const ImageListContainer = (props: ImageListProps & { navigation: any } & { route: string }) => {

    if (props.route === "gallery")
        return (
            <ImageList {...props} />
        )
    else if (props.route === "favorite") {
        let data = filterFavorite(props.data)
        return (
            <ImageList {...props} data={data}/>
        )
    }
}


function filterFavorite(arr: Array<ImageBlock>): Array<ImageBlock> {
    let newArray = []
    arr.forEach((item) => {
        if (item.favorite) newArray.push(item)
    })
    return newArray
}

export default connector(ImageListContainer)
