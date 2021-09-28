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
