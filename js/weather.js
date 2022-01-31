/* jshint esversion: 6 */

// weather
window.addEventListener('load', () => {
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
         longitude = position.coords.longitude;
         latitude = position.coords.latitude;
         const api = `https://api.weather.gov/points/${latitude},${longitude}`;

         //console.log(latitude, longitude, api);

         fetch(api) //fetching weather api
            .then(response => {
               return response.json();
            })
            .then(data => {
               //console.log(data);
               const { forecastHourly } = data.properties;
               const { city, state } = data.properties.relativeLocation.properties;

               document.querySelector(".city").innerHTML = `${city}, `;
               document.querySelector(".state").innerHTML = state;
               // console.log(forecastHourly);

               fetch(forecastHourly) //fetching weather
                  .then(res => {
                     return res.json();
                  })
                  .then(weather => {
                     // console.log(weather);

                     const { temperature, temperatureUnit, shortForecast, isDaytime } = weather.properties.periods[0];


                     document.querySelector(".temperature span:first-child").innerHTML = `${temperature}&#176;`;
                     document.querySelector(".temp-unit").innerHTML = temperatureUnit;
                     document.querySelector(".forecast").innerHTML = shortForecast;


                     let temperatureContainer = document.querySelector(".temperature-container");

                     let farenheit = temperature;
                     let celsius = Math.floor((farenheit - 32) * 5 / 9);

                     temperatureContainer.addEventListener("click", () => {
                        if (document.querySelector(".temp-unit").innerHTML === temperatureUnit) {
                           document.querySelector(".temp-unit").innerHTML = 'C';
                           document.querySelector(".temperature span:first-child").innerHTML = `${celsius}&#176;`;
                        } else {
                           if (document.querySelector(".temp-unit").innerHTML === 'C') {
                              document.querySelector(".temp-unit").innerHTML = temperatureUnit;
                              document.querySelector(".temperature span:first-child").innerHTML = `${farenheit}&#176;`;
                           }
                        }
                     });

                  })
                  .catch(err => {
                     console.log(`Fetch Problem(forecastHourly): ${err.message}`);
                  });
            })
            .catch(err => {
               console.log(`Fetch Problem(API): ${err.message}`);
            });
      });
   }

});
