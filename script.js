function uu() {
  if (
    document.getElementById("floatingInput").value == "" ||
    document.getElementById("yay").value == ""
  ) {
    alert("Please Input inside the textbox");
  } else {
    setTimeout(function () {
      alert("Thanks for logging in!");
      location.reload();
    }, 500);
  }
}

function big() {
  document.getElementById("img").width = "210px";
}

d = new Date();
c = d.getHours() - 5;
document.getElementById("time").innerHTML =
  "Deals Of the Day " +
  "<img style='padding-left: 25px;' src='assets/clock.jpg' width='4%'>" +
  c +
  " Hours Left" +
  "<a href='#' style='margin-left: 650px;' class='btn btn-primary'>View All</a>";
