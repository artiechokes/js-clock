/* jshint esversion: 6 */

var weatherInterval = setInterval(weatherDisplay, 900000)
let info //eslint-disable-line

// weather
function weatherDisplay() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			/* eslint-disable no-undef */
			longitude = position.coords.longitude
			latitude = position.coords.latitude
			const api = `https://api.weather.gov/points/${latitude},${longitude}`
			/* eslint-enable no-undef */
			console.log(latitude, longitude, api)

			fetch(api) //fetching weather api
				.then((response) => {
					return response.json()
				})
				.then((data) => {
					// console.log(data)
					const { forecastHourly } = data.properties
					const { city, state } = data.properties.relativeLocation.properties

					document.querySelector(".city").innerHTML = `${city}, `
					document.querySelector(".state").innerHTML = state
					// console.log(forecastHourly)

					fetch(forecastHourly) //fetching weather
						.then((res) => {
							return res.json()
						})
						.then((weather) => {
							console.log(weather)
							info = weather.properties.periods[0]

							const {
								temperature,
								temperatureUnit,
								shortForecast,
								isDaytime,
								icon,
							} = weather.properties.periods[0]

							let farenheit = temperature
							let celsius = Math.floor(((farenheit - 32) * 5) / 9)

							if (
								document.querySelector(".temp-unit").innerHTML ===
								temperatureUnit
							) {
								document.querySelector(
									".temperature span:first-child"
								).innerHTML = `${temperature}&#176;`
								document.querySelector(".temp-unit").innerHTML = temperatureUnit
							} else {
								document.querySelector(".temp-unit").innerHTML = "C"
								document.querySelector(
									".temperature span:first-child"
								).innerHTML = `${celsius}&#176;`
							}

							if (document.body.classList[0] === "bgc-no-weather") {
								document.body.classList.remove === "bgc-no-weather"
							}

							if (
								(isDaytime === true &&
									document.body.classList[0] === undefined) ||
								(isDaytime === true &&
									document.body.classList[0] === "bgc-night-default")
							) {
								document.body.classList.add("bgc-day-default")
							} else if (
								(isDaytime === false &&
									document.body.classList[0] === undefined) ||
								(isDaytime === false &&
									document.body.classList[0] === "bgc-day-default")
							) {
								document.body.classList.add("bgc-night-default")
							}

							document.querySelector("img.forecast").src = icon
							document
								.querySelector("img.forecast")
								.setAttribute("alt", shortForecast)
							document
								.querySelector("img.forecast")
								.setAttribute("title", shortForecast)

							let temperatureContainer = document.querySelector(
								".temperature-container"
							)

							temperatureContainer.addEventListener("click", () => {
								if (
									document.querySelector(".temp-unit").innerHTML ===
									temperatureUnit
								) {
									document.querySelector(".temp-unit").innerHTML = "C"
									document.querySelector(
										".temperature span:first-child"
									).innerHTML = `${celsius}&#176;`
								} else {
									if (document.querySelector(".temp-unit").innerHTML === "C") {
										document.querySelector(".temp-unit").innerHTML =
											temperatureUnit
										document.querySelector(
											".temperature span:first-child"
										).innerHTML = `${farenheit}&#176;`
									}
								}
							})
						})
						/* eslint-disable no-console */
						.catch((err) => {
							console.log(`Fetch Problem(forecastHourly): ${err.message} 
							timestamp: ${new Date()}`)
							console.log(new Date()) // eslint-disable-line
							clearInterval(weatherInterval)
						})
				})
				.catch((err) => {
					console.log(`Fetch Problem(API): ${err.message} 
					Coordinates should be inside U.S.
					Reload to Retry
					timestamp: ${new Date()}`)
					document.querySelector(".temperature-container").style.display =
						"none"
					document.body.classList.add("bgc-no-weather")
					clearInterval(weatherInterval)
					/* eslint-enable no-console */
				})
		})
	}
}

window.addEventListener("load", weatherDisplay)
