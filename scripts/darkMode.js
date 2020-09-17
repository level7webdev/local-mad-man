let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-switch');
const allCards = document.querySelectorAll(".card");
const switchOn = document.querySelector('#dark-mode-on');
const switchOff = document.querySelector('#dark-mode-off');

// check if dark mode is enabled
// if it's enabled, turn it off
// if it's disabled, turn it on

const enableDarkMode = () => {
    // add class dark-mode to body
document.body.classList.add('darkModeEnabled');
allCards.forEach(function(el) {
    el.classList.add("bg-dark");
    el.classList.remove("bg-light");
})
switchOn.classList.remove('hidden');
switchOff.classList.add('hidden');

// update dark-mode in local storage
localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    // removes class dark-mode to body
    document.body.classList.remove('darkModeEnabled');
    allCards.forEach(function(el) {
        el.classList.add("bg-light");
        el.classList.remove("bg-dark");
    })
    switchOn.classList.add('hidden');
    switchOff.classList.remove('hidden');

    //update dark-mode in local storage
    localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
    enableDarkMode();
};

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}
});
