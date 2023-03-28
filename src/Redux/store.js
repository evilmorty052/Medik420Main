import {configureStore} from '@reduxjs/toolkit'
import { user } from './slices/userSlice'
import hivebizSlice from './slices/hivebizSlice'
import settingsSlice from './slices/settingsSlice'



export const store = configureStore({
    reducer: {
        user: user.reducer,
        hivebizSlice: hivebizSlice,
        settingsSlice

    },
})