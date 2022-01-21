import { createSlice } from '@reduxjs/toolkit'

export const catSlice = createSlice({
  name: 'cats',
  initialState: { cats: [], isLoading: false },
  reducers: {
    getCatsFetch: (state) => {
      state.isLoading = true
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload
      state.isLoading = false
    },
    getCatsFailure: (state) => {
      state.isLoading = false
    }
  }
})

export const { getCatsFetch, getCatsSuccess, getCatsFailure } = catSlice.actions

export default catSlice.reducer
