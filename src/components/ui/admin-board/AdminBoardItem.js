import '../../../App.css'
import { useActions } from '../../../hooks/useActions'
import styles from './AdminBoard.module.scss'

const AdminBoardItem = ({ index, el, saveCoordinates, toggleEdit }) => {
	const { toChangeMapState } = useActions()

	const handleShowWorkArea = () => {
		toChangeMapState(el.polygonCoord[0][3])
	}

	const handleEdit = () => {
		toggleEdit(index)
		toChangeMapState(el.polygonCoord[0][3])
	}
	return (
		<div key={index} className={styles.middleCont}>
			<h4 onClick={() => handleShowWorkArea()} className={styles.areaName}>
				{el.workArea}
			</h4>
			{el.isEdit ? (
				<button onClick={() => saveCoordinates(index, el.newCoord)}>
					save
				</button>
			) : (
				<button onClick={() => handleEdit()}>редактировать</button>
			)}
		</div>
	)
}

export default AdminBoardItem
