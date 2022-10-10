import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {composeWithDevTools } from '@redux-devtools/extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import { newsReducer } from './newsReducer';
import { eventReducer } from './eventReducer';

const rootReducer = combineReducers({
    user: userReducer,
    news: newsReducer,
    event: eventReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
