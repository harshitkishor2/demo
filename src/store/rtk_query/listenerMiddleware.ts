// listenerMiddleware.ts
import { createListenerMiddleware, addListener } from '@reduxjs/toolkit'
import type { TypedStartListening, TypedAddListener, ListenerEffectAPI } from '@reduxjs/toolkit'


export const listenerMiddleware = createListenerMiddleware()

export type AppStartListening = TypedStartListening<RootState, AppDispatch>
export type AppListenerEffectAPI = ListenerEffectAPI<RootState, AppDispatch>
export type AppAddListener = TypedAddListener<RootState, AppDispatch>

export const startAppListening =
    listenerMiddleware.startListening as AppStartListening

export const addAppListener = addListener as AppAddListener

