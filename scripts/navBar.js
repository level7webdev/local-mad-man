function navMenu() {
    var x = document.getElementById("topNavBar");
    if (x.className === "topNav") {
      x.className += " responsive";
    } else {
      x.className = "topNav";
    }
  }