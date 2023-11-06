/*
 * The following file serves the purpose of providing a clean slate
 * to listen for certain query dispatches.
 */

import { AppListenerEffectAPI, AppStartListening } from '../listenerMiddleware';
import { testApi } from './testApi';

import {
    Unsubscribe
} from '@reduxjs/toolkit';
/**
 * Subscribes counter listeners and returns a `teardown` function.
 * @example
 * ```ts
 * useEffect(() => {
 *   const unsubscribe = setupCounterListeners();
 *   return unsubscribe;
 * }, []);
 * ```
 */


async function onCountriesFulfilled(
    {
        payload,
    }: AppDispatch,
    { condition, dispatch, getState }: AppListenerEffectAPI
) {
    let token = ''
    if (!token) {
        console.error(`token not found`)
        return
    } else {
        // dispatch(anyAction)
    }

}


export function setupCounterListeners(
    startListening: AppStartListening
): Unsubscribe {
    const subscriptions = [
        startListening({
            // actionCreator: counterActions.updateByPeriodically,
            matcher: testApi.endpoints.getCountries.matchFulfilled,
            effect: onCountriesFulfilled,
        }),
        startListening({
            matcher: testApi.endpoints.createPost.matchFulfilled,
            effect: onCountriesFulfilled,
        }),
    ]

    return () => {
        subscriptions.forEach((unsubscribe) => unsubscribe())
    }
}