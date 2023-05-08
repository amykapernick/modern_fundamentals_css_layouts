import { useState } from "react";
import Close from '@img/icons/close.svg?url'
import SVG from 'react-inlinesvg';
import styles from './styles.module.css'

const DeleteTask = (props) => {
	const { tasks, updateTasks, task } = props
	const [open, setOpen] = useState(false);
	const handleDeleteTask = (e) => {
		e.preventDefault();

		updateTasks(tasks.filter((t) => task.id !== t.id))

		setOpen(false);
	  };

	return (
		<>
			<button className={styles.button} onClick={() => setOpen(true)}>
				<span className="sr-only">Delete</span>
				<SVG src={Close} />
			</button>
			{open && (
				<div className={styles.popup}>
					<h3 className={styles.heading}>Delete Task</h3>
					<form className={styles.form} onSubmit={handleDeleteTask}>
						<legend>Are you sure you want to delete <em>{task.name}</em>?</legend>
						<footer>
							<button type="button" onClick={() => setOpen(false)}>
								Cancel
							</button>
							<button type="submit">Delete Task</button>
						</footer>
					</form>
				</div>
			)}
		</>
	)
}


export default DeleteTask