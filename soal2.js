`use strict`;
const request = require("request");
const apiKey = "50f7c68078ee2b6dbbc9699f0edaae7e";
const lat = -6.2088;
const lon = 106.8456;
const url = `https://api.openweathermap.org/data/2.5/forecast?lon=${lon}&lat=${lat}&exclude=daily&units=metric&appid=${apiKey}`;

request(url, function (err, response, body) {
  if (err) {
    console.log("error:", err);
  } else {
    // const cuaca = JSON.parse(body);
    // console.log(cuaca.list[4].main.temp);

    let weather = JSON.parse(body);
    if (weather && weather.list) {
      const dailyTemps = weather.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .slice(0, 5);

      console.log("Weather Forecast:");
      dailyTemps.forEach((day) => {
        const date = new Date(day.dt * 1000);
        const dayOfWeek = date.toLocaleDateString("en-US", {
          weekday: "short",
        });
        const formattedDate = `${date.getDate()} ${date.toLocaleString(
          "en-US",
          { month: "long" }
        )} ${date.getFullYear()}`;
        console.log(`${dayOfWeek}, ${formattedDate}: ${day.main.temp}°C`);
      });
    } else {
      console.log("Error: Daily weather data not found.");
    }
  }
});

// "use strict";
// const request = require("request");

// const apiKey = "550f7c68078ee2b6dbbc9699f0edaae7e";
// const city = "bandung";
// const units = "metric";

// // Get the coordinates for Bandung
// const geocodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

// request(geocodeUrl, function (err, response, body) {
//   if (err) {
//     console.log("Error fetching geocode:", err);
//   } else {
//     let location = JSON.parse(body);
//     if (location.length === 0) {
//       console.log("City not found");
//       return;
//     }

//     const lat = location[0].lat;
//     const lon = location[0].lon;
//     const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,current,alerts&units=${units}&appid=${apiKey}`;

//     request(weatherUrl, function (err, response, body) {
//       if (err) {
//         console.log("Error fetching weather:", err);
//       } else {
//         let weather = JSON.parse(body);
//         console.log(weather);
//         if (weather.daily) {
//           weather.daily.slice(0, 5).forEach((day) => {
//             const date = new Date(day.dt * 1000).toLocaleDateString();
//             const temp = day.temp.day;
//             console.log(`Date: ${date}, Temp: ${temp}°C`);
//           });
//         } else {
//           console.log("Error: Daily weather data not found.");
//         }
//       }
//     });
//   }
// });
