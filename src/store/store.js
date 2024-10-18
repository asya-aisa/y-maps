import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './polygon/polygon.slice'



export const store = configureStore({
	reducer: reducer
})