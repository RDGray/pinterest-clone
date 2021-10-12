let msg = document.querySelector(".add-pin__msg");
let icon_click = document.querySelector(".add-pin__image-btn");

function toggleBotMenu() {
  if (msg.classList.contains("menuOff")) {
    msg.classList.remove("menuOff");
    msg.classList.add("menuOn");
  } else {
    msg.classList.remove("menuOn");
    msg.classList.add("menuOff");
  }
}

document
  .querySelector(".add-pin__upload-pin-create")
  .addEventListener("click", () => {
    msg.classList.add("menuOff");
    msg.classList.remove("menuOn");
  });

//account window
const account_button = document.querySelector(".nav__account");
const account_menu = document.querySelector("#account");

account_button.addEventListener("click", () => {
  if (account_menu.classList.contains("menuOff")) {
    account_menu.classList.remove("menuOff");
    account_menu.classList.add("menuOn");
  } else {
    account_menu.classList.remove("menuOn");
    account_menu.classList.add("menuOff");
  }
});
