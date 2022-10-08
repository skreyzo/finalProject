import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {composeWithDevTools } from '@redux-devtools/extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import { reducers } from '../store/reducers';


const rootReducer = combineReducers({
    user: userReducer,
    news: reducers,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
