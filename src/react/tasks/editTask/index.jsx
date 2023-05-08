import { useRef, useState } from "react";
import Edit from '@img/icons/edit.svg?url'
import SVG from 'react-inlinesvg';
import styles from './styles.module.css'
import { format } from 'date-fns'

const EditTask = (props) => {
	const { tasks, updateTasks, task } = props
	const nameField = useRef(null)
	const dateField = useRef(null)
	const [open, setOpen] = useState(false);
	const handleEditTask = (e) => {
		e.preventDefault();

		if(!nameField?.current) return;

		const updatedtask = {
			...task,
			name: nameField.current?.value,
			due: dateField?.current?.value ? new Date(dateField.current.value) : undefined,
		}
	
		updateTasks(tasks.map(t => {
			if(t.id === task.id) {
				return updatedtask
			}
			return t
		}));
		setOpen(false);
	  };

	return (
		<>
			<button className={styles.button} onClick={() => setOpen(true)}>
				<span className="sr-only">Edit</span>
				<SVG src={Edit} />
			</button>
			{open && (
				<div className={styles.popup}>
					<h3 className={styles.heading}>Edit Task</h3>
					<form className={styles.form} onSubmit={handleEditTask}>
						<label htmlFor="add_task">Task Name</label>
						<input
							type="text" 
							id="add_task" 
							ref={nameField}
							defaultValue={task.name}
						/>
						<label htmlFor="due_date">Due Date</label>
						<input
							type="date"
							id="due_date"
							ref={dateField}
							defaultValue={task?.due && format(new Date(task.due), 'yyyy-MM-dd')}
						/>
						<footer>
							<button type="button" onClick={() => setOpen(false)}>
								Cancel
							</button>
							<button type="submit">Save Changes</button>
						</footer>
					</form>
				</div>
			)}
		</>
	)
}


export default EditTask