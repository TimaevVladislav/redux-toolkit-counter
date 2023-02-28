import {AnyAction, createSlice, Dispatch} from "@reduxjs/toolkit"
import {ICounter} from "../../models/model"
import type {PayloadAction} from "@reduxjs/toolkit"


const initialState: ICounter = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
          increment(state) {
               state.value++
          },
          decrement(state) {
               state.value--
          },
          incrementByAmount(state, action: PayloadAction<number>) {
               state.value += action.payload
          }
    }
})

export const incrementAsync = (amount: number) => (dispatch: Dispatch<AnyAction>) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}

export const selectCount = (state: any) => state.counter.value

export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer

