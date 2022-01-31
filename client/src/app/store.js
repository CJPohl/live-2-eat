import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import loginReducer from '../features/auth/loginSlice';
import profileReducer from '../features/profile/profileSlice';

const reducers = combineReducers({
    login: loginReducer,
    profile: profileReducer,
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
});

export default store;