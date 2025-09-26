function updateTime() {
  //Johannesburg
  let joburgElement = document.querySelector("#joburg");
  let joburgDateElement = joburgElement.querySelector(".date");
  let joburgTimeElement = joburgElement.querySelector(".time");
  let joburgTime = moment().tz("Africa/Johannesburg");

  joburgDateElement.innerHTML = joburgTime.format("MMMM Do YYYY");
  joburgTimeElement.innerHTML = ` ${joburgTime.format(
    `h:mm:ss`
  )} <small>${joburgTime.format("A")}</small>`;

  //San Francisco
  let sanFranciscoElement = document.querySelector("#san-francisco");
  let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
  let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
  let sanFranciscoTime = moment().tz("America/Los_Angeles");

  sanFranciscoDateElement.innerHTML = sanFranciscoTime.format("MMMM Do YYYY");
  sanFranciscoTimeElement.innerHTML = ` ${sanFranciscoTime.format(
    `h:mm:ss`
  )} <small>${sanFranciscoTime.format("A")}</small>`;
}

updateTime();
setInterval(updateTime, 1000);
