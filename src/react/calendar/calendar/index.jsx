import { useEffect, useState } from 'react';
import AddEvent from '@react/calendar/addEvent';
import Event from '@react/calendar/event'
import Dates from '@react/calendar/dates';
import { addWeeks, format, startOfWeek } from 'date-fns';

import styles from './styles.module.css'
import classes from '@utils/classes.cjs';


const Calendar = () => {
	const [events, setEvents] = useState([]);
	const weeks = 6
	const [startWeek, setStartWeek] = useState(format(startOfWeek(new Date(), {weekStartsOn: 1}), 'yyyy-MM-dd'))
	const [endDate, setEndDate] = useState(format(addWeeks(new Date(startWeek), weeks), 'yyyy-MM-dd'))
	const updateEvents = (newEvents) => {
		setEvents(newEvents);
		localStorage.setItem('events', JSON.stringify(newEvents));
	}
	const handleChangeWeek = (newStartWeek) => {
		const newDate = format(newStartWeek, 'yyyy-MM-dd')
		setStartWeek(newDate);
		localStorage.setItem('calendar_start', newDate);
	}
	
	useEffect(() => {
		const localEvents = localStorage.getItem('events');
		const savedStartDate = localStorage.getItem('calendar_start')

		if (localEvents) {
			setEvents(JSON.parse(localEvents));
		}

		if(savedStartDate) {
			setStartWeek(savedStartDate);
		}
	}, [])

	return (
		<>
			<ul className={styles.controls}>
				<li>View starting <span className={styles.start_date}>{format(new Date(startWeek), 'dd MMM')}</span></li>
				<li>
					<button
						onClick={() => {
							handleChangeWeek(addWeeks(new Date(startWeek), -1))
						}}
					>
						Previous Week
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleChangeWeek(addWeeks(new Date(startWeek), 1))
						}}
					>
						Next Week
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleChangeWeek(startOfWeek(new Date(), {weekStartsOn: 1}))
						}}
					>
						Current Week
					</button>
				</li>
				<li>
					<AddEvent {...{events, updateEvents}} />
				</li>
			</ul>
			<div className={classes(styles.calendar, 'calendar_month')}>
				<Dates 
					startWeek={startWeek} 
					className={classes(styles.date, 'calendar_date')} 
					weeksShown={weeks}
				/>
				{events.map((event) => (
					<Event
						className={classes(styles.event, 'calendar_event')}
						key={event.id}
						{...event}
						updateEvents={updateEvents}
						events={events}
						startWeek={startWeek}
						weeksShown={weeks}
					/>	
				))}
				
			</div>
		</>
	);
}

export default Calendar;
