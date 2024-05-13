import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    index: 1,
    data: []
}

export const counterSlice = createSlice({
    name: "Phone_accessories",
    initialState,
    reducers: {
        setIndex: (state, action)=> {
            state.index = action.payload
        },
        setData: (state, action)=> {
            state.data = action.payload
        }

    }
})
export const {setIndex, setData} = counterSlice.actions;
export default counterSlice.reducer
