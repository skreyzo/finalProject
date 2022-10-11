import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {composeWithDevTools } from '@redux-devtools/extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import { newsReducer } from './newsReducer';
import aboutReducer from "./aboutReducer";


const rootReducer = combineReducers({
    user: userReducer,
    news: newsReducer,
    about: aboutReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
