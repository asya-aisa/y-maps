import { YMaps } from '@pbe/react-yandex-maps'
import { useSelector } from 'react-redux'
import { useActions } from '../../../hooks/useActions'
import MapComponent from '../../map/MapComponent'
import { AdminBoard } from '../../ui/admin-board/AdminBoard'
import { useAdmin } from './useAdmin'

const AdminPanel = () => {
	const { toggleEdit } = useActions()
	const polygons = useSelector(state => state.polygons)
	const { saveCoordinates } = useAdmin()
	const mapState = useSelector(state => state.mapState)
	const API_KEY = '05f8d2ae-bd94-4329-b9f9-7351e2ec9627'

	const polygonOptions = {
		fillColor: '#00FF00',
		strokeColor: '#0000FF',
		opacity: 0.5,
		strokeWidth: 3,
		strokeStyle: 'solid',
	}

	return (
		<YMaps
			query={{
				load: 'package.full',
				apikey: API_KEY,
			}}
		>
			<div className='wrapper'>
				<AdminBoard
					header='Зоны работы'
					polygons={polygons}
					saveCoordinates={saveCoordinates}
					toggleEdit={toggleEdit}
				/>
				<MapComponent
					mapState={mapState}
					polygons={polygons}
					polygonOptions={polygonOptions}
				/>
			</div>
		</YMaps>
	)
}

export default AdminPanel
