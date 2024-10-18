import { useCallback, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'

export const useMap = (items, index) => {
	const { changeNewCoord } = useActions()
	const isEdit = useSelector(state => state.polygons[index].isEdit)
	const polygonCoord = items.polygonCoord

	useEffect(() => {
		changeNewCoord({
			index: index,
			newCoord: polygonCoord,
		})
	}, [changeNewCoord, index, polygonCoord])

	const handleEditPolygon = useCallback(
		polygon => {
			if (polygon) {
				if (isEdit) {
					polygonCoord.length
						? polygon.editor.startEditing()
						: polygon.editor.startDrawing()

					polygon.geometry.events.add('change', e =>
						changeNewCoord({
							index: index,
							newCoord: e.get('newCoordinates'),
						})
					)
				} else {
					polygon.editor.stopEditing()
					polygon.editor.stopDrawing()
				}
			}
		},
		[index, isEdit, changeNewCoord, polygonCoord.length]
	)

	return useMemo(
		() => ({
			handleEditPolygon,
		}),
		[handleEditPolygon]
	)
}
