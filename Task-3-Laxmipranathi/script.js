// DOM Selection
const message = document.querySelector(".js-message");
const changeBtn = document.querySelector(".js-change-btn");
const themeBtn = document.querySelector(".js-theme-btn");

// State Variable
let textChanged = false;

// Event Listener 1
changeBtn.addEventListener("click", () => {

    if (!textChanged) {
        message.textContent =
            "You successfully updated the content using JavaScript!";
        textChanged = true;
    } else {
        message.textContent =
            "Click the button below to change this text.";
        textChanged = false;
    }
});

// Event Listener 2
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("is-dark");
});