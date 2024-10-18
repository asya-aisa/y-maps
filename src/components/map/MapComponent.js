import { Map, SearchControl } from '@pbe/react-yandex-maps'
import React from 'react'
import '../../App.css'
import PolygonItem from './PolygonItem'

const MapComponent = ({ mapState, polygons, polygonOptions }) => {
	return (
		<Map modules={['geoObject.addon.editor']} state={mapState} className='map'>
			<SearchControl
				options={{
					float: 'right',
				}}
			/>
			{polygons &&
				polygons.map((el, index) => (
					<div key={index}>
						<PolygonItem
							items={el}
							polygonOptions={polygonOptions}
							index={index}
						/>
					</div>
				))}
		</Map>
	)
}

export default MapComponent
