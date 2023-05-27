const clockTitle = document.querySelector("#clock");

function clock() {
  const currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minites = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  clockTitle.innerText = `${hours}:${minites}:${seconds}`;
}

clock();
setInterval(clock, 1000);
