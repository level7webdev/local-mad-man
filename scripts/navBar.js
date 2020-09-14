function navMenu() {
    var hamburger = document.getElementById("topNavBar");
    if (hamburger.className === "topNav") {
      hamburger.className += " responsive";
    } else {
      hamburger.className = "topNav";
    }
  }

  function navLogo() {
    var navLogo = document.getElementById("navHomeLogo");
    if (navLogo.className === "navHomeLogo") {
      navLogo.className += " smallNavLogo"
      navLogo.src = "/images/LMM text logo-cropped.png";
    } else {
      navLogo.className = "navHomeLogo"
      navLogo.src = "/images/LMM full logo-cropped.png";
    }
  }