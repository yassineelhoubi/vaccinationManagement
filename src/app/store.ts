import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import managerReducer from "./features/managerSlice"
import adminReducer from "./features/adminSlice"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedManagerReducer = persistReducer(persistConfig, managerReducer)
const persistedAdminReducer = persistReducer(persistConfig, adminReducer)
export const store = configureStore({
    reducer: {
        manager: persistedManagerReducer,
        admin: persistedAdminReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


