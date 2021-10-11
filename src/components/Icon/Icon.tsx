import * as React from 'react'
import GalleryActive from "../../../assets/GalleryActive.svg"
import GalleryInactive from "../../../assets/GalleryInactive.svg"
import FavoriteActive from "../../../assets/FavoriteActive.svg"
import FavoriteInactive from "../../../assets/FavoriteInactive.svg"
import Delete from "../../../assets/Delete.svg"
import Like from "../../../assets/Like.svg"
import UnLike from "../../../assets/UnLike.svg"


export type IconType =
    "GalleryActive"
    | "GalleryInactive"
    | "FavoriteActive"
    | "FavoriteInactive"
    | "Delete"
    | "Like"
    | "UnLike"


const Icon = (props: { name: IconType }) => {
    switch (props.name) {
        case "GalleryActive":
            return <GalleryActive/>
        case "GalleryInactive":
            return <GalleryInactive/>
        case "FavoriteActive":
            return <FavoriteActive/>
        case "FavoriteInactive":
            return <FavoriteInactive/>
        case "Delete":
            return <Delete/>
        case "Like":
            return <Like/>
        case "UnLike":
            return <UnLike/>
    }
}

export default Icon
