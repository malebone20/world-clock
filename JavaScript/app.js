function updateTime() {
  //Johannesburg
  let joburgElement = document.querySelector("#joburg");
  if (joburgElement) {
    let joburgDateElement = joburgElement.querySelector(".date");
    let joburgTimeElement = joburgElement.querySelector(".time");
    let joburgTime = moment().tz("Africa/Johannesburg");

    joburgDateElement.innerHTML = joburgTime.format("MMMM Do YYYY");
    joburgTimeElement.innerHTML = ` ${joburgTime.format(
      `h:mm:ss`
    )} <small>${joburgTime.format("A")}</small>`;
  }

  //San Francisco
  let sanFranciscoElement = document.querySelector("#san-francisco");
  if (sanFranciscoElement) {
    let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
    let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
    let sanFranciscoTime = moment().tz("America/Los_Angeles");
    sanFranciscoDateElement.innerHTML = sanFranciscoTime.format("MMMM Do YYYY");
    sanFranciscoTimeElement.innerHTML = ` ${sanFranciscoTime.format(
      `h:mm:ss`
    )} <small>${sanFranciscoTime.format("A")}</small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city">
     <div>
        <h2>${cityName}</h2>
         <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
     <div class="time">${cityTime.format(`h:mm:ss`)} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div> `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", updateCity);
