import { createSlice } from "@reduxjs/toolkit";
import { Navbar } from "../../components/index";
import Path from "../../pages/Path";

const initialState = {
     default: 'MainSettings'
}

const SettingsSlice = createSlice({
    initialState: initialState,
    name:'settingsSlice',
    reducers: {
        switchSettings : (state, action)  => {
            state.default = action.payload
            console.log('switched')
        }
    }


})

export default SettingsSlice.reducer
export const SettingPage = SettingsSlice.getInitialState().default
export const {switchSettings} = SettingsSlice.actions