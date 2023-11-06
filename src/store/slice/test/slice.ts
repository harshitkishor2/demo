import {
    createEntityAdapter,
    createSlice
} from '@reduxjs/toolkit';

import { apiAction } from './actions';
import { LoadingStatus } from '@app/helper';

const SLICE_FEATURE_KEY = 'test';

//! =============================== Redux : Slice ==================================

// Create entity adapter
const entityAdapter = createEntityAdapter();

// Define Initial State
const initialState: TestState = entityAdapter.getInitialState({
    loginLoadingStatus: LoadingStatus.IDLE,
    userDetails: null,
    loginError: '',
});

/**
 * Slice for all reducres
 */
const reduxSlice = createSlice({
    name: SLICE_FEATURE_KEY,
    initialState: initialState,
    reducers: {
        resetSliceState: () => {
            return initialState
        },
        testAction: (state) => {
            state.loginError = 'Error'
        }
    },
    extraReducers: builder => {
        builder
            .addCase(apiAction.pending, state => {
                state.loginLoadingStatus = LoadingStatus.PENDING;
            })
            .addCase(apiAction.fulfilled, (state, action) => {
                state.loginLoadingStatus = LoadingStatus.FULLFILLED;
                state.userDetails = {}
            })
            .addCase(apiAction.rejected, (state, action) => {
                state.loginLoadingStatus = LoadingStatus.REJECTED;
            });
    },
});

/*
 * Export reducer for store configuration.
 */

export const { resetSliceState, testAction } = reduxSlice.actions;

export const testReducer = reduxSlice.reducer;

