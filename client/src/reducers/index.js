import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {composeWithDevTools } from '@redux-devtools/extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import { newsReducer } from './newsReducer';

import { eventReducer } from './eventReducer';

import aboutReducer from "./aboutReducer";
import contactsReducer from "./contactsReducer";



const rootReducer = combineReducers({
    user: userReducer,
    news: newsReducer,
    event: eventReducer,
    about: aboutReducer,
    contacts: contactsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
