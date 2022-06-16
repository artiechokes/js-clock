/* jshint esversion: 6 */

const timerHours = document.querySelector(".hours-timer")
const timerMinutes = document.querySelector(".minutes-timer")
const timerSeconds = document.querySelector(".seconds-timer")

const submitTimer = document.getElementById("form")
const cancelTimer = document.getElementById("cancel")

window.addEventListener("load", () => {
	timerHours.setAttribute("name", "fhours-timer")
	timerHours.setAttribute("maxlength", 2)
	timerHours.setAttribute("minlength", 2)
	timerHours.setAttribute("title", "HH 00-23")
	timerHours.setAttribute("type", "text")
	timerHours.setAttribute("value", "00")

	timerMinutes.setAttribute("name", "fminutes-timer")
	timerMinutes.setAttribute("maxlength", 2)
	timerMinutes.setAttribute("minlength", 2)
	timerMinutes.setAttribute("title", "MM 00-59")
	timerMinutes.setAttribute("type", "text")
	timerMinutes.setAttribute("value", "00")

	timerSeconds.setAttribute("name", "fseconds-timer")
	timerSeconds.setAttribute("title", "SS 00-59")
	timerSeconds.setAttribute("minlength", 2)
	timerSeconds.setAttribute("maxlength", 2)
	timerSeconds.setAttribute("type", "text")
	timerSeconds.setAttribute("value", "00")
})

function getInputValue() {
	// Selecting the input element and get its value
	//  timerHours = timerHours.value;
	// timerMinutes = timerMinutes.value;
	// timerSeconds = timerSeconds.value;

	// Displaying the value
	alert(`${timerHours.value}:${timerMinutes.value}:${timerSeconds.value}`)
}
