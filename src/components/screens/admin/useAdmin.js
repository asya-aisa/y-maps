import { useCallback, useMemo } from 'react'
import { useActions } from '../../../hooks/useActions'

export const useAdmin = (newArea, setIsNewMode) => {
	const { saveCoord, toggleEdit, toAddNewPolygon } = useActions()

	const saveCoordinates = useCallback(
		(index, newCoord) => {
			saveCoord({
				index: index,
				newCoord: newCoord,
			})
			toggleEdit(index)
		},
		[saveCoord, toggleEdit]
	)

	const handleAddNewPolygon = useCallback(() => {
		toAddNewPolygon(newArea)
		alert('нарисуйте новый полигон на карте')
		setIsNewMode(false)
	}, [newArea, toAddNewPolygon, setIsNewMode])

	return useMemo(
		() => ({
			saveCoordinates,
			handleAddNewPolygon,
		}),
		[saveCoordinates, handleAddNewPolygon]
	)
}
