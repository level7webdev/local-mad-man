function navMenuLoad() {
    var hamburger = document.getElementById("topNavBar");
    if (hamburger.className === "topNav") {
      hamburger.className += " responsive";
    } else {
      hamburger.className = "topNav";
    }
  }

  function navMenuUnload() {
    document.getElementById("topNavBar").className = "topNav";
    }