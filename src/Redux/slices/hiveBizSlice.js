import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filteredKeyWord: 'All',
    searchTerm: null
}

const hiveBizSlice = createSlice({
    name: 'hiveBizSlice',
    initialState: initialState,
    reducers:{
        filter: (state , action) => {
            state.filteredKeyWord = action.payload;
        },

        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        }
    }
})

export default hiveBizSlice.reducer
export const {filter, setSearchTerm} =  hiveBizSlice.actions