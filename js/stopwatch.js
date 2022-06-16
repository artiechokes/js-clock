function msToTime(time) {
	function pad(n, z) {
		z = z || 2
		return ("00" + n).slice(-z)
	}

	var ms = s % 1000
	s = (s - ms) / 1000
	var secs = s % 60
	s = (s - secs) / 60
	var mins = s % 60
	var hrs = (s - mins) / 60

	return pad(hrs) + ":" + pad(mins) + ":" + pad(secs) + "." + pad(ms, 3)
}

msToTime(30000)
