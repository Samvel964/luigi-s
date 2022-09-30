import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
    name: 'error',
    initialState: {
        data: {}
    },
    reducers: {
        setError: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { setError } = errorSlice.actions

export default errorSlice.reducer
