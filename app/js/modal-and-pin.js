const add_pin_modal = document.querySelector(".main");

document
  .querySelector(".add-pin__upload-pin-create")
  .addEventListener("click", () => {
    add_pin_modal.style.opacity = 1;
    add_pin_modal.style.pointerEvents = "all";
    console.log(`zzz`);
  });
console.log(document.querySelector(".add-pin__upload-pin-container"));
