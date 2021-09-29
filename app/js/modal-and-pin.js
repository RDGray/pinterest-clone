const add_pin_modal = document.querySelector(".main");
const close_modal_click = document.querySelector(".card-container");
document
  .querySelector(".add-pin__upload-pin-create")
  .addEventListener("click", () => {
    add_pin_modal.style.display = "block"; //
    add_pin_modal.style.opacity = 1;
    add_pin_modal.style.pointerEvents = "all";
  });

document.querySelector(".main").addEventListener("click", (event) => {
  if (
    event.target === close_modal_click ||
    event.target === add_pin_modal ||
    event.target === document
  ) {
    reset_modal();
  }
});

// reset the content in the modal
function reset_modal() {
  const modals_pin = document.querySelector(".left-side__image-container");

  document.querySelector("#upload_image_label").style.display = "block";
  modals_pin.style.display = "none";
  modals_pin.style.opacity = 0;

  add_pin_modal.style.display = "none"; //
  add_pin_modal.style.opacity = 0;
  add_pin_modal.style.pointerEvents = "none";

  if (modals_pin.children[0].children[0]) {
    modals_pin.children[0].removeChild(modals_pin.children[0].children[0]);

    document.querySelector("#pin_title").value = "";
    document.querySelector("#pin_description").value = "";
    document.querySelector("#pin_destination").value = "";
    document.querySelector("#pin_size").value = "";
    pin_image_blob = null;
  }
}

//let pin_image_blob = null;

//----------------add image functionality for image add modal----------------\\

document.querySelector("#upload_img").addEventListener("change", (event) => {
  if (event.target.files && event.target.files[0]) {
    //check the type of the input to load
    if (/image\/*/.test(event.target.files[0].type)) {
      const reader = new FileReader();
      //where the image will be sent to
      reader.onload = function () {
        const new_image = new Image();

        new_image.src = reader.result;
        pin_image_blob = reader.result;

        new_image.onload = function () {
          const modals_pin = document.querySelector(
            ".left-side__image-container"
          );

          new_image.classList.add("pin_max_width");

          document
            .querySelector(".left-side__image-inner")
            .appendChild(new_image);

          document.querySelector("#upload_image_label").style.display = "none";

          modals_pin.style.display = "block";

          if (
            new_image.getBoundingClientRect().width <
              new_image.parentElement.getBoundingClientRect().width ||
            new_image.getBoundingClientRect().height <
              new_image.parentElement.getBoundingClientRect().height
          ) {
            new_image.classList.remove("pin_max_width");
            new_image.classList.add("pin_max_height");
          }

          modals_pin.style.opacity = 1;
        };
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  document.querySelector("#upload_img").value = "";
});

// Save the data info

document.querySelector(".add__save").addEventListener("click", () => {
  const users_data = {
    author: "Jack",
    board: "default",
    title: document.querySelector("#pin_title").value,
    description: document.querySelector("#pin_description").value,
    destination: document.querySelector("#pin_destination").value,
    img_blob: pin_image_blob,
    pin_size: document.querySelector("#pin_size").value,
  };
  create_pin(users_data);
  reset_modal();
});

//create and save the pin

function create_pin(pin_details) {
  const new_pin = document.createElement("div");
  const new_image = new Image();

  new_image.src = pin_details.img_blob;
  new_pin.style.opacity = 0;

  new_image.onload = function () {
    new_pin.classList.add("card");

    //new_pin.classList.add("card--large");

    new_image.classList.add("pin_max_width");

    new_pin.innerHTML = `
    <div class="card__title">${pin_details.title}</div>

    <div class="modal">

        <div class="modal__head">
            <div class="modal__profile"> Profile <i class="fas fa-chevron-down modal__profile-icon"></i></div>
            <button type="button" class="modal__save">
                <div class="modal__save-inner">Save</div>
            </button>

        </div>

        <div class="modal__foot">

            <div class="modal__destination ">

                <div class="modal__mock-icon-container trim-text">
                    <i class="fas fa-chevron-right modal__mock-icon"></i>

                    <div class="modal__mock-text trim-text">${pin_details.destination}</div>
                </div>
            </div>

            <div class="modal__social">

                <div class="modal__mock-icon-container">
                    <i class="far fa-share-square card__mock-icon"></i>
                </div>


                <div class="modal__mock-icon-container">
                    <i class="fas fa-ellipsis-h card__mock-icon"></i>
                </div>
            </div>
        </div>
    </div>

    <div class="card__image-container">
        
    </div>
    
    `;

    document.querySelector(".pin__container").appendChild(new_pin);
    new_pin.children[2].appendChild(new_image);

    if (new_image.height >= 450) {
      new_pin.classList.add("card--large");
    } else if (new_image.height >= 330 && new_image.height < 450) {
      new_pin.classList.add("card--medium");
    } else if (new_image.height < 170) {
      new_pin.classList.add("card--xsmall");
    } else if (new_image.height < 130) {
      new_pin.classList.add("card--xxsmall");
    } else {
      new_pin.classList.add("card--small");
    }

    console.log(new_image.height);

    if (
      new_image.getBoundingClientRect().width <
        new_image.parentElement.getBoundingClientRect().width ||
      new_image.getBoundingClientRect().height <
        new_image.parentElement.getBoundingClientRect().height
    ) {
      new_image.classList.remove("pin_max_width");
      new_image.classList.add("pin_max_height");
    }
    new_pin.style.opacity = 1;
  };
}
