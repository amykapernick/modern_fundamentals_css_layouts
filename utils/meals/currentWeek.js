import { setDay, addDays, getDay } from 'date-fns'

const getCurrentWeek = (props) => {
	const { date = new Date } = props || {}
	const startWeek = addDays(setDay(date, 6), -7)
	const currentDate = (getDay(date) < 4 && getDay(date) !== 6) ? startWeek : addDays(startWeek, 7) 

	return currentDate

}

export default getCurrentWeek