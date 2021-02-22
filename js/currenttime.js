/* jshint esversion: 6 */
// Update the count down every 1 second

// Clock
var x = setInterval(function clock() {

   // Get today's date and time
   const date = new Date();
   let currentHour = date.getHours();
   let currentMinute = date.getMinutes();
   let currentSecond = date.getSeconds();

   //formatting time (to include 0X)

   const dayPeriod = currentHour < 12 ? "AM" : "PM";
   currentHour = currentHour === 0 ? 12 : currentHour;
   currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
   currentHour = (currentHour < 10 ? "0" : "") + currentHour;
   currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute;
   currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond;

   // Month info
   let day = date.getDay();
   let month = date.getMonth();
   let year = date.getFullYear();
   let monthDay = date.getDate();

   //weekday values
   switch (day) {
      case 0:
         day = "Sunday";
         break;
      case 1:
         day = "Monday";
         break;
      case 2:
         day = "Tuesday";
         break;
      case 3:
         day = "Wednesday";
         break;
      case 4:
         day = "Thursday";
         break;
      case 5:
         day = "Friday";
         break;
      case 6:
         day = "Saturday";
   }

   //month values
   switch (month) {
      case 0:
         month = "January";
         break;
      case 1:
         month = "February";
         break;
      case 2:
         month = "March";
         break;
      case 3:
         month = "April";
         break;
      case 4:
         month = "May";
         break;
      case 5:
         month = "June";
         break;
      case 6:
         month = "July";
         break;
      case 7:
         month = "August";
         break;
      case 8:
         month = "September";
         break;
      case 9:
         month = "October";
         break;
      case 10:
         month = "November";
         break;
      case 11:
         month = "December";
         break;
   }



   // Output the result in an element with class current-time
   document.querySelector("p.current-time span").firstChild.nodeValue = `${currentHour}`;
   document.querySelector("p.current-time span:nth-child(2)").firstChild.nodeValue = `${currentMinute}`;
   document.querySelector("p.current-time span:nth-child(3)").firstChild.nodeValue = `${currentSecond}`;
   document.querySelector("p.current-time span:nth-child(4)").firstChild.nodeValue = `${dayPeriod}`;


   document.querySelector(".current-date").firstChild.nodeValue = `${day}, ${month} ${monthDay}, ${year}`;


   //mini clock
   document.querySelector(".current-date-small").firstChild.nodeValue = `${day}, ${month} ${monthDay}, ${year}`;
   document.querySelector(".current-time-small").firstChild.nodeValue = `${currentHour}: ${currentMinute} ${dayPeriod}`;




}, 1000);


//Menu Selection

var divs = ['clock', 'timer', 'stopwatch', 'alarm'];
var visibleDivId = null;

function divVisibility(divId) {
   if (visibleDivId === divId) {
      visibleDivId = divId;
   } else {
      visibleDivId = divId;
   }
   hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
   const miniClock = document.getElementById('mini-clock');
   var i, divId, div;


   for (i = 0; i < divs.length; i++) {
      divId = divs[i];
      div = document.getElementById(divId);
      if (visibleDivId === divId) {
         div.style.display = "block";
         div.style.animationDuration = "1s";

      } else {
         div.style.display = "none";
      }
   }
   if (visibleDivId !== 'clock') {
      miniClock.style.display = "block";
   } else {
      miniClock.style.display = "none";
   }
}
