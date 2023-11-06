import storage from '@app/services/storage';
import { configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    Storage,
    persistReducer,
    persistStore,
} from 'redux-persist';
import { middlewares, queryMiddlewares, reducers } from './reducers';
import { listenerMiddleware } from '../rtk_query/listenerMiddleware';


// ! For redux persist with react-native-mmkv
export const reduxStorage: Storage = {
    setItem: (key, value) => {
        storage.set(key, value);
        return Promise.resolve(true);
    },
    getItem: key => {
        const value = storage.getString(key);
        return Promise.resolve(value);
    },
    removeItem: key => {
        storage.delete(key);
        return Promise.resolve();
    },
};


const persistConfig = {
    key: 'root',
    storage: reduxStorage,
    version: 1,
};

const persistedReducer = persistReducer(persistConfig, reducers);



export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
            .prepend(listenerMiddleware.middleware)
            .concat(queryMiddlewares)
            .concat(middlewares),
});

export const persistor = persistStore(store);
