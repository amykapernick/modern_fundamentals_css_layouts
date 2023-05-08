import { useRef, useState } from "react";
import styles from './styles.module.css'

const AddTask = (props) => {
	const { tasks, updateTasks } = props
	const nameField = useRef(null)
	const dateField = useRef(null)
	const [open, setOpen] = useState(false);
	const handleAddTask = (e) => {
		e.preventDefault();

		if(!nameField?.current) return;

		const newTask = {
			name: nameField.current?.value,
			id: generateId(),
			completed: false,
			due: dateField?.current?.value ? new Date(dateField.current.value) : undefined,
		}
	
		updateTasks([...tasks, newTask]);
		setOpen(false);
	  };

	return (
		<>
			<button onClick={() => setOpen(true)}>Add a Task</button>
			{open && (
				<div className={styles.popup}>
					<h3 className={styles.heading}>Add New Task</h3>
					<form className={styles.form} onSubmit={handleAddTask}>
						<label htmlFor="add_task">Task Name</label>
						<input
							type="text" 
							id="add_task" 
							ref={nameField}
						/>
						<label htmlFor="due_date">Due Date</label>
						<input
							type="date"
							id="due_date"
							ref={dateField}
						/>
						<footer>
							<button type="button" onClick={() => setOpen(false)}>
								Cancel
							</button>
							<button type="submit">Add</button>
						</footer>
					</form>
				</div>
			)}
	  </>
	)
}

// generate a unique id string
const generateId = () =>  Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);


export default AddTask