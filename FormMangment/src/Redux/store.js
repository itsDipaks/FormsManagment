import {legacy_createStore,applyMiddleware,compose,combineReducers} from "redux"
import thunk from "redux-thunk"
import { AuthReducer } from "./Auth/Auth.reducer"

let RootReducers=combineReducers({
Auth:AuthReducer
})

export const Store=legacy_createStore(RootReducers,compose(applyMiddleware(thunk)))