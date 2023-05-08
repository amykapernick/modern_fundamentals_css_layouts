import { isBefore } from 'date-fns';

const orderTasks = (props) => {
	const sortedTasks = props.tasks.sort((a, b) => {
		if(!a?.due) return 1;
		if(!b?.due) return -1;
		
		if (a.due && b.due) return isBefore(new Date(a.due), new Date(b.due)) ? -1 : 1;

		return 0;
	})

	return sortedTasks
}

export default orderTasks    