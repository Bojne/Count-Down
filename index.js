function buildTimeCounter(divName, inputObj) {
  // instantiate two JavaScript Date objects
  var NowTime = new Date();
  var BedTime = new Date(
    NowTime.getFullYear(),
    NowTime.getMonth(),
    NowTime.getDate(),
    inputObj["hour"],
    inputObj["min"],
    0
  );

  var msPerHour = 1000 * 60 * 60;
  var msPerMin = msPerHour / 60;

  var RemainingTime = BedTime.getTime() - NowTime.getTime();

  var LeftHour = Math.floor(RemainingTime / msPerHour);
  var LeftMin = Math.floor((RemainingTime % msPerHour) / msPerMin);

  // if less than a hour
  if (LeftHour <= -1) {
    TimeStr = "🌝";
  } else if (LeftHour < 0) {
    TimeStr = `${LeftMin.toString()} min left until ${inputObj["event"]} ${
      inputObj["emoji"][1]
    }`;
  } else {
    TimeStr = `${LeftHour.toString()} hr ${LeftMin.toString()} min left until ${
      inputObj["event"]
    } ${inputObj["emoji"][0]}`;
  }

  var popupDiv = document.getElementById(divName);
  popupDiv.innerText = TimeStr;
}

document.addEventListener("DOMContentLoaded", function () {
  buildTimeCounter("sleepTime", {
    event: "bed time ",
    hour: 22,
    min: 45,
    emoji: ["🧠", "😴"],
  });
  buildTimeCounter("sunsetTime", {
    event: "sunset ",
    hour: 15,
    min: 45,
    emoji: ["🌤", "🌅"],
  });
});
