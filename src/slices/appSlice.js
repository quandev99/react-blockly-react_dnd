import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isOpen: false,
  },
  reducers: {
    getIsValue: (state) =>{
      // eslint-disable-next-line no-unused-expressions
      state.isOpen
      return 
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload
      return 
    },
  },
})

export const { getIsValue,setIsOpen } = appSlice.actions

export const appReducer = appSlice.reducer