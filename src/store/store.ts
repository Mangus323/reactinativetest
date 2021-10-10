import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "./saga/saga";
import {imagesReducer} from "./reducers/images_reducer";


let reducers = combineReducers({
 images: imagesReducer
})



const sagaMiddleWare = createSagaMiddleware()

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>;
const store = createStore(reducers, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(saga)

export default store
