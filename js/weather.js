/* jshint esversion: 6 */

var weatherInterval = setInterval(weatherDisplay, 6000)

// weather
function weatherDisplay() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			longitude = position.coords.longitude
			latitude = position.coords.latitude
			const api = `https://api.weather.gov/points/${latitude},${longitude}`

			//console.log(latitude, longitude, api);

			fetch(api) //fetching weather api
				.then((response) => {
					return response.json()
				})
				.then((data) => {
					//console.log(data);
					const { forecastHourly } = data.properties
					const { city, state } = data.properties.relativeLocation.properties

					document.querySelector(".city").innerHTML = `${city}, `
					document.querySelector(".state").innerHTML = state
					// console.log(forecastHourly);

					fetch(forecastHourly) //fetching weather
						.then((res) => {
							return res.json()
						})
						.then((weather) => {
							// console.log(weather);

							const { temperature, temperatureUnit, shortForecast, isDaytime } =
								weather.properties.periods[0]
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

							document.querySelector(".forecast").innerHTML = shortForecast

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
						.catch((err) => {
							console.log(`Fetch Problem(forecastHourly): ${err.message}
							timestamp: ${new Date()}`)
							console.log(new Date())
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
					clearInterval(weatherInterval)
				})
		})
	}
}

window.addEventListener("load", weatherDisplay)
