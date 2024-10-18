import { Polygon } from '@pbe/react-yandex-maps'
import { useMap } from './useMap'

const PolygonItem = ({ items, polygonOptions, index }) => {
	const { handleEditPolygon } = useMap(items, index)

	return (
		<Polygon
			geometry={items.polygonCoord}
			options={polygonOptions}
			modules={['geoObject.addon.balloon']}
			properties={{ balloonContent: items.workArea }}
			instanceRef={polygon => handleEditPolygon(polygon)}
		/>
	)
}

export default PolygonItem
