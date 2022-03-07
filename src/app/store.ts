import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import managerReducer from "./features/managerSlice"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, managerReducer)

export const store = configureStore({
    reducer: {
        manager: persistedReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


