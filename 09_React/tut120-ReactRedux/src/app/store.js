import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})


// STORE VS REDUCER VS ACTION 
// -------------------------------

// Store - is what holds all the data your application uses.
// Reducer - is what manipulates that data when it receives an action.
// Action - is what tells reducer to manipulate the store data, it carries the name and (optionally) some data.