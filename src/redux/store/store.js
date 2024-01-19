import { combineReducers, configureStore } from "@reduxjs/toolkit";
import albumReducer from "../reducers/album";

const bigReducer = combineReducers({
	album: albumReducer,
});

const store = configureStore({
	reducer: bigReducer,
});
export default store;
