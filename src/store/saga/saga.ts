import {call, put, takeEvery} from 'redux-saga/effects'
import axios from "axios";
import {ImageBlock, SET_DATA} from "../reducers/images_reducer";

let url = axios.create({
    baseURL: "https://api.unsplash.com/photos",
    headers: {
        Authorization: "Client-ID Yme6ZcumIXpWryQ0DPc249CE0ua2Mxh66Y-4W2gPAAc",
    },
})

function getImages() {
    return url.get("/")
}

function* sagaGetImages(action) {
    try {
        let response = yield call(getImages)
        let data: Array<ImageBlock> = response.data.map((item) => {
            return {
                name: item.created_at,
                urls: {
                    full: item.urls.full,
                    small: item.urls.small
                },
                favorite: false
            }
        })
        yield put({type: SET_DATA, data})
    } catch (e) {
        console.log(e)
    }

}

export const GET_IMAGES = "GET_IMAGES"

function* saga() {
    yield takeEvery(GET_IMAGES, sagaGetImages)
}

export default saga
