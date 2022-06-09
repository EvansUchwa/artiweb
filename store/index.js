import { combineReducers } from "redux";
import { createStore } from "redux";
import { tutoReducer } from "./reducers";

const store = createStore(combineReducers(
    {
        tuto: tutoReducer
    }
),
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.subscribe(() => console.log(store.getState()))
export default store;