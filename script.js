function onoff(value) {
  var val;
  if (value == 0) {
    val = "./images/lightoff.png";
  } else {
    val = "./images/lighton.png";
  }
  document.getElementById("img").src = val;
}
