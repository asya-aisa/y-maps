import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	mapState: {
		center: [55.751574, 37.573856],
		zoom: 10,
	},
	polygons: [
		{
			isEdit: false,
			newCoord: [],
			polygonCoord: [
				[
					[55.75, 37.3],
					[55.9, 37.6],
					[55.74, 37.9],
					[55.6, 37.6],
				],
			],
			workArea: 'Москва + МО',
		},
		{
			isEdit: false,
			newCoord: [],
			polygonCoord: [
				[
					[51.48, 39.2],
					[51.64, 38.94],
					[51.81, 39.16],
					[51.65, 39.42],
				],
			],
			workArea: 'Воронеж',
		},
		{
			isEdit: false,
			newCoord: [],
			polygonCoord: [
				[
					[59.94, 30.2],
					[60.01, 30.33],
					[59.94, 30.43],
					[59.88, 30.33],
				],
			],
			workArea: 'Санкт-Петербург',
		},
	],
}

export const polygonSlice = createSlice({
	name: 'polygon',
	initialState,
	reducers: {
		toggleEdit: (state, { payload }) => {
			state.polygons[payload].isEdit = !state.polygons[payload].isEdit
		},
		changeNewCoord: (state, { payload }) => {
			state.polygons[payload.index].newCoord = payload.newCoord
		},
		saveCoord: (state, { payload }) => {
			state.polygons[payload.index].polygonCoord = payload.newCoord
		},
		toChangeMapState: (state, { payload }) => {
			state.mapState.center = payload
			state.mapState.zoom = 9.9
		},
		toAddNewPolygon: (state, { payload }) => {
			state.polygons.push({
				isEdit: true,
				newCoord: [],
				polygonCoord: [],
				workArea: payload,
			})
		},
	},
})

export const {
	toggleEdit,
	changeNewCoord,
	saveCoord,
	toChangeMapState,
	toAddNewPolygon,
} = polygonSlice.actions
export const { reducer } = polygonSlice
