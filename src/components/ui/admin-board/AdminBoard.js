import '../../../App.css'
import AddNewPolygon from './addNewPolygon/AddNewPolygon'
import styles from './AdminBoard.module.scss'
import AdminBoardItem from './AdminBoardItem'

export const AdminBoard = ({
	header,
	polygons,
	saveCoordinates,
	toggleEdit,
}) => {
	return (
		<div className={styles.adminBoardWrapper}>
			<h1>{header}</h1>
			{polygons &&
				polygons.map((el, index) => (
					<AdminBoardItem
						key={index}
						index={index}
						el={el}
						saveCoordinates={saveCoordinates}
						toggleEdit={toggleEdit}
					/>
				))}
			<AddNewPolygon />
		</div>
	)
}
