const button = document.querySelectorAll("#user-bottom button");
n = 1;
console.log(button[n]);
function clickedButton(n) {
  for (let i = 0; i < button.length; i++) {
    button[i].classList.remove("active");
  }
  button[n].classList.add("active");
  const currentTimeframes = document.querySelectorAll(".current-timeframe");
  const previousTimeframes = document.querySelectorAll(".previous-timeframe");
  dataJson[0];
  console.log(dataJson[0]);
  for (let i = 0; i < dataJson[0].length; i++) {
    if (n == 0) {
      currentTimeframes[i].innerText =
        dataJson[0][i].timeframes.daily.current + "hrs";
      previousTimeframes[i].innerText =
        "Previous - " + dataJson[0][i].timeframes.daily.previous + "hrs";
    } else if (n == 1) {
      currentTimeframes[i].innerText =
        dataJson[0][i].timeframes.weekly.current + "hrs";
      previousTimeframes[i].innerText =
        "Previous - " + dataJson[0][i].timeframes.weekly.previous + "hrs";
    } else {
      currentTimeframes[i].innerText =
        dataJson[0][i].timeframes.monthly.current + "hrs";
      previousTimeframes[i].innerText =
        "Previous - " + dataJson[0][i].timeframes.monthly.previous + "hrs";
    }
  }
}
let dataJson = [];
function fetchJSONData() {
  fetch("./data.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      return res.json();
    })
    .then((data) => dataJson.push(data))
    .catch((error) => console.error("Unable to fetch data:", error));
}
fetchJSONData();
