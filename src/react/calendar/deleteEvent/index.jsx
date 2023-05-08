import { useState } from "react";
import Close from '@img/icons/close.svg?url'
import SVG from 'react-inlinesvg';
import styles from './styles.module.css'

const DeleteEvent = (props) => {
	const { events, updateEvents, event } = props
	const [open, setOpen] = useState(false);
	const handleDeleteEvent = (e) => {
		e.preventDefault();

		updateEvents(events.filter((t) => event.id !== t.id))

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
					<h3 className={styles.heading}>Delete Event</h3>
					<form className={styles.form} onSubmit={handleDeleteEvent}>
						<legend>Are you sure you want to delete <em>{event.name}</em>?</legend>
						<footer>
							<button type="button" onClick={() => setOpen(false)}>
								Cancel
							</button>
							<button type="submit">Delete Event</button>
						</footer>
					</form>
				</div>
			)}
		</>
	)
}


export default DeleteEvent