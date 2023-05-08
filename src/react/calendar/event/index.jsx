import { differenceInCalendarWeeks, format, isBefore, isSameDay } from 'date-fns';
import styles from './styles.module.css'
import EditEvent from '@react/calendar/editEvent';
import DeleteEvent from '@react/calendar/deleteEvent';

const Event = (props) => {
	const {id, name, start, end, updateEvents, events, weeksShown} = props
	const date = end ? new Date(end) : new Date(start)
	const eventIterations = []
	const eventData = {
		date,
		id,
		name,
		past: isBefore(date, new Date()) && !isSameDay(date, new Date()),
		start,
		end
	}

	if(
		!end ||
		differenceInCalendarWeeks(new Date(end), new Date(start), {weekStartsOn: 1}) === 0
	) {
		eventIterations.push({
			...eventData,
			startColumn: format(new Date(start), 'i'),
			endColumn: end ? parseInt(format(new Date(end), 'i')) + 1 : '',
			row: differenceInCalendarWeeks(new Date(start), new Date(props.startWeek), {weekStartsOn: 1}) + 2,
		})
	}
	else {
		const startRow = differenceInCalendarWeeks(
			new Date(start), new Date(props.startWeek), 
			{weekStartsOn: 1}
		) + 2
		let i = 0
		let startColumn = format(new Date(start), 'i')

		while(i < differenceInCalendarWeeks(new Date(end), new Date(start), {weekStartsOn: 1})) {
			eventIterations.push({
				...eventData,
				startColumn: startColumn,
				endColumn: '-1',
				row: startRow + i,
			})

			startColumn = '1'
			i++
		}

		eventIterations.push({
			...eventData,
			startColumn: startColumn,
			endColumn: parseInt(format(new Date(end), 'i')) + 1,
			row: startRow + i,
		})
	}

	return (
		<>
			{eventIterations.map((event) => (
				<div 
					key={JSON.stringify(event)}
					className={[styles.event, props.className].join(' ')}
					style={{
						'--start': event.startColumn,
						'--end': event.endColumn,
						'--row': event.row,
					}}
					data-past={event.past}
					data-hidden={event.row < 2 || event.row > weeksShown + 1}
				>
					<span className={styles.label}>
						{event.name} 
					</span>
					<span className={styles.controls}>
						<EditEvent
							events={events}
							updateEvents={updateEvents}
							event={event}
						/>
						<DeleteEvent
							events={events}
							updateEvents={updateEvents}
							event={event}
						/>
					</span>
				</div>
			))}
		</>
	)
}

export default Event