/* jshint esversion: 6 */
// Update the count down every 1 second

// Clock
setInterval(currentTime, 1000)

function currentTime() {
	// Get today's date and time
	const date = new Date()
	let currentHour = date.getHours()
	let currentMinute = date.getMinutes()
	let currentSecond = date.getSeconds()

	// formatting time (to include 0X)

	const dayPeriod = currentHour < 12 ? "AM" : "PM"
	currentHour = currentHour === 0 ? 12 : currentHour
	currentHour = currentHour > 12 ? currentHour - 12 : currentHour
	currentHour = (currentHour < 10 ? "0" : "") + currentHour
	currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute
	currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond

	// Month values
	let monthName = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	]

	let month = monthName[date.getMonth()]

	// Weekday values
	let week = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	]
	let weekday = week[date.getDay()]

	const year = date.getFullYear()
	const day = date.getDate()

	// Output the result in an element with class current-time
	document.querySelector(
		"p.current-time span"
	).firstChild.nodeValue = `${currentHour}`
	document.querySelector(
		"p.current-time span:nth-child(2)"
	).firstChild.nodeValue = `${currentMinute}`
	document.querySelector(
		"p.current-time span:nth-child(3)"
	).firstChild.nodeValue = `${currentSecond}`
	document.querySelector(
		"p.current-time span:nth-child(4)"
	).firstChild.nodeValue = `${dayPeriod}`

	document.querySelector(
		".current-date"
	).firstChild.nodeValue = `${weekday}, ${month} ${day}, ${year}`

	// mini clock
	document.querySelector(
		".current-date-small"
	).firstChild.nodeValue = `${weekday}, ${month} ${day}, ${year}`
	document.querySelector(
		".current-time-small"
	).firstChild.nodeValue = `${currentHour}: ${currentMinute} ${dayPeriod}`
}

//Menu Selection
var timeMenuDiv = ["clock", "timer", "stopwatch", "alarm"]
var visibleTimeId = null
const miniClock = document.getElementById("mini-clock")

function divVisibility(divId) {
	visibleTimeId = divId
	let i, div

	for (i = 0; i < timeMenuDiv.length; i++) {
		div = document.getElementById(timeMenuDiv[i])

		if (visibleTimeId === timeMenuDiv[i]) {
			div.style.display = "block"
			div.style.animationDuration = "1s"
		} else {
			div.style.display = "none"
		}
	}
	if (visibleTimeId !== "clock") {
		miniClock.style.display = "block"
	} else {
		miniClock.style.display = "none"
	}
}

document
	.querySelectorAll(".timer-btn")[0]
	.addEventListener("click", () => divVisibility("timer"))
document
	.querySelectorAll(".alarm-btn")[0]
	.addEventListener("click", () => divVisibility("alarm"))
document
	.querySelectorAll(".stopwatch-btn")[0]
	.addEventListener("click", () => divVisibility("stopwatch"))
document
	.querySelectorAll(".clock-btn")[0]
	.addEventListener("click", () => divVisibility("clock"))

document
	.querySelectorAll(".timer-btn")[1]
	.addEventListener("click", () => divVisibility("timer"))
document
	.querySelectorAll(".alarm-btn")[1]
	.addEventListener("click", () => divVisibility("alarm"))
document
	.querySelectorAll(".stopwatch-btn")[1]
	.addEventListener("click", () => divVisibility("stopwatch"))
document
	.querySelectorAll(".clock-btn")[1]
	.addEventListener("click", () => divVisibility("clock"))

/**document
	.querySelector(".theme-block:nth-child(1)")
	.addEventListener(
		"click",
		() =>
			(document.querySelector(".bgc-overlay").style.background =
				"linear-gradient(0deg, #f12711, #f5af19)"),
		(document.querySelector("body").style.color = "#000")
	)

document
	.querySelector(".theme-block:nth-child(2)")
	.addEventListener(
		"click",
		() =>
			(document.querySelector(".bgc-overlay").style.background =
				"linear-gradient(#020024 0%, #090979 35%, #00d4ff 100%)"),
		(document.querySelector("body").style.color = "#ffffff")
	)
**/

document
	.querySelector(".theme-block:nth-child(1)")
	.addEventListener("click", () => {
		document.body.classList.replace(
			document.body.classList[0],
			"bgc-hot-summer"
		)
		document.documentElement.style.setProperty("--weather-bgc-opacity", "0")
	})

document
	.querySelector(".theme-block:nth-child(2)")
	.addEventListener("click", () => {
		document.body.classList.replace(document.body.classList[0], "bgc-cool-blue")
		document.documentElement.style.setProperty("--weather-bgc-opacity", "0")
	})

document
	.querySelector(".theme-block:nth-child(3)")
	.addEventListener("click", () => {
		document.body.classList.replace(
			document.body.classList[0],
			"bgc-girl-power"
		)
		document.documentElement.style.setProperty("--weather-bgc-opacity", "1")
	})

document
	.querySelector(".theme-block:nth-child(4)")
	.addEventListener("click", () => {
		document.body.classList.replace(document.body.classList[0], "bgc-stonewall")
		document.documentElement.style.setProperty("--weather-bgc-opacity", "0")
	})

document
	.querySelector(".theme-block:nth-child(5)")
	.addEventListener("click", () => {
		document.body.classList.remove(document.body.classList[0])
		document.documentElement.style.setProperty("--weather-bgc-opacity", "0")
		weatherDisplay() //eslint-disable-line
		weatherInterval = setInterval(weatherDisplay, 900000) //eslint-disable-line
	})
