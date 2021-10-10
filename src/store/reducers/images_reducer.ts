export const LOAD = "IMAGES/LOAD"
export const SET_DATA = "IMAGES/SET_DATA"
export const SET_FAVORITE = "IMAGES/SET_FAVORITE"
export const SET_CURRENT_IMAGE = "IMAGES/SET_CURRENT_IMAGE"
export const DELETE_IMAGE = "IMAGES/DELETE_IMAGE"
export const SET_TITLE = "SET_TITLE"

export type ImageBlock = {
    name: string,
    urls: { small: string, full: string },
    favorite: boolean,
    id: number
}

type Actions =
    ActionLoad
    | ActionSetData
    | ActionSetFavorite
    | ActionSetCurrentImage
    | ActionDeleteImage

type ActionLoad = {
    type: typeof LOAD,
    loading: boolean,
}
type ActionSetData = {
    type: typeof SET_DATA,
    data: Array<ImageBlock>,
}
type ActionSetFavorite = {
    type: typeof SET_FAVORITE
}
type ActionDeleteImage = {
    type: typeof DELETE_IMAGE
}
type ActionSetCurrentImage = {
    type: typeof SET_CURRENT_IMAGE
    id: number
}


type StateType = {
    title: { name: string, route: string } | null
    loading: boolean | null,
    data: Array<ImageBlock> | null,
    currentImage: {
        name: string
        url: string,
        id: number,
        favorite: boolean
    } | null,
}
let initialState: StateType = {
    title: null,
    loading: null,
    data: null,
    currentImage: null
};

export const imagesReducer = (state = initialState, action: Actions): StateType => {
    switch (action.type) {
        case SET_DATA:
            return {
                title: state.title,
                currentImage: state.currentImage,
                loading: state.loading,
                data: action.data
            }
        case LOAD:
            return {
                title: state.title,
                currentImage: state.currentImage,
                data: state.data,
                loading: action.loading
            };
        case SET_FAVORITE: {
            let newData = [...state.data]
            let index = state.data.findIndex(item => item.id === state.currentImage.id)
            newData[index].favorite = !state.data[index].favorite
            return {
                title: state.title,
                currentImage: {...state.currentImage, favorite: newData[index].favorite},
                loading: state.loading,
                data: newData
            }
        }
        case SET_CURRENT_IMAGE:
            let imageBlock = state.data.find(item => item.id === action.id)
            return {
                title: state.title,
                currentImage: {
                    url: imageBlock.urls.full,
                    id: imageBlock.id,
                    favorite: imageBlock.favorite,
                    name: imageBlock.name
                },
                loading: state.loading,
                data: state.data
            }
        case DELETE_IMAGE:
            let index = state.data.findIndex(item => item.id === state.currentImage.id)
            let data = []
            for (let i = 0; i < state.data.length; i++) {
                if (i == index) continue
                data.push(state.data[i])
            }
            return {
                title: state.title,
                currentImage: null,
                loading: state.loading,
                data: data
            }
        default:
            return state;
    }
}

