
  var input = document.getElementById("enter");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const val = document.querySelector("input").value;
    if (val == "KORMOSVILMOS13212") {
        window.location.href = `video.html`;
      }
  }
});
