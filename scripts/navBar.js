var hamburger = document.getElementById("topNavBar");
var darkModeToggle = document.getElementById("dark-mode-switch")

function navMenuLoad() {
    if (hamburger.className === "topNav") {
      hamburger.className += " responsive";
    } else {
      hamburger.className = "topNav";
    };

    if (darkModeToggle.className === "dark-mode-switch responsive") {
      darkModeToggle.className = "dark-mode-switch";
    } else {
      darkModeToggle.className += " responsive";
    };
  }
  
  function navMenuUnload() {
    if (hamburger.className === "topNav responsive") {
      hamburger.className = "topNav";
    };
    
    if (darkModeToggle.className === "dark-mode-switch responsive") {
      darkModeToggle.className = "dark-mode-switch";
    };
    }