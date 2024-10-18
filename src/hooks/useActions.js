import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import {
	changeNewCoord,
	saveCoord,
	toAddNewPolygon,
	toChangeMapState,
	toggleEdit,
} from '../store/polygon/polygon.slice'

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(
		() =>
			bindActionCreators(
				{
					toggleEdit,
					changeNewCoord,
					saveCoord,
					toChangeMapState,
					toAddNewPolygon
				},
				dispatch
			),
		[dispatch]
	)
}
