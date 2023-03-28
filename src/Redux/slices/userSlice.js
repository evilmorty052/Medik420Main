import { createSelector, createSlice } from "@reduxjs/toolkit";



const logincookie = localStorage.setItem('logincookie', false)
const loggedinstate = localStorage.getItem('logincookie')


const initialState = {
    loggedin: loggedinstate ? true : false,
    userInfo: null
    
}

export const user = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state) => {
            localStorage.setItem('logincookie', true)
            console.log(state.userInfo)
        }
    }
})

export const {loggedin} = user.getInitialState()
export const {login} = user.actions