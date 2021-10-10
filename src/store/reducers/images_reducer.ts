export const LOAD = "IMAGES/LOAD";
export const SET_DATA = "IMAGES/SET_DATA";
export const SET_FAVORITE = "IMAGES/SET_FAVORITE"

export type ImageBlock = {
    name: string,
    urls: { small: string, full: string },
    favorite: boolean
}


type Actions = ActionLoad | ActionSetData | ActionSetFavorite


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
    id: number,
}


type StateType = {
    loading: boolean | null,
    data: Array<ImageBlock> | null,
}
let initialState: StateType = {
    loading: null,
    data: null
};

export const imagesReducer = (state = initialState, action: Actions): StateType => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.data
            }
        case LOAD:
            return {
                ...state,
                loading: action.loading
            };
        case SET_FAVORITE:
            let newData = [...state.data]
            newData[action.id].favorite = !state.data[action.id].favorite

            return {
                loading: state.loading,
                data: newData
            }
        default:
            return state;
    }
}

