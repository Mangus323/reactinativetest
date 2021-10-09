import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";


let reducers = combineReducers({

})



const sagaMiddleWare = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleWare))

export default store
