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
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = ` ${losAngelesTime.format(
      `h:mm:ss`
    )} <small>${losAngelesTime.format("A")}</small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "Current") {
    cityTimeZone = moment.tz.guess();
  }

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
