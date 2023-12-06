import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCount } from './counterAPI';

const initialState = {
    value: 0,
    status: 'idle'
}

export const incrementAsyncThunk = createAsyncThunk('counter/fetchCount',
    async (amount) => {
        const response = await fetchCount(amount)
        return response.data;
    })

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsyncThunk.pending, (state) => {
            state.status = 'loading...'
        })
            .addCase(incrementAsyncThunk.fullfilled, (state, action) => {
                state.status = 'idle',
                    state.value += action.payload
            })
    }
})


export const { increment } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;

