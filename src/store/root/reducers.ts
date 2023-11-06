import { testApi } from "@app/store/rtk_query/test/testApi";
import { testReducer } from "@app/store/slice/test";
import { combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

//  All slice reducers
const sliceReducer = {
    testReducer,
}

// All Query reducers
const queryReducer = {
    // [api.reducerPath]: api.reducer,
    [testApi.reducerPath]: testApi.reducer,
}

// Combine all reducers and export
export const reducers = combineReducers(
    Object.assign(
        {},
        sliceReducer,
        queryReducer
    )
);

//  All Query Middlewares
export const queryMiddlewares = [
    testApi.middleware,
];

//  Common middlewares
export const middlewares = [
    // logger
];
