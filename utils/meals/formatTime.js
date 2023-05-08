const formatTime = (time) => {
	const hours = Math.floor(time / 1)
	const minutes = (time % 1) * 60

	if(hours > 0) {
		return `${hours}h ${minutes}m`
	}
	else {
		return `${minutes}m`
	}
}

export default formatTime