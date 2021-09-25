//----------------add image functionality----------------\\

document.querySelector("#picture").addEventListener("change", (event) => {
  if (event.target.files && event.target.files[0]) {
    //check the type of the input to load
    if (/image\/*/.test(event.target.files[0].type)) {
      const reader = new FileReader();
      //where the image will be sent to
      reader.onload = function () {
        document.querySelector(".card__image").src = reader.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  document.querySelector("#picture").value = "";
});
