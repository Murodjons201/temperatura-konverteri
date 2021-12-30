let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elResult = document.querySelector(".form__result");

function temperatureKonverteri(number) {
  let farenge = (number * 9) / 5 + 32;
  return farenge;
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = elFormInput.value;

  if (isNaN(inputValue)) {
    elResult.textContent = "Iltimos musbat yoki manfiy son kiriting!";
    elResult.classList.remove("bg-light");
    elResult.classList.add("bg-danger");
    elResult.classList.add("text-light");

    return;
  } else {
    elResult.classList.remove("bg-danger");
    elResult.classList.remove("text-light");
    elResult.classList.add("bg-light");
    elResult.classList.add("text-pimery");
  }

  elResult.textContent = temperatureKonverteri(inputValue);
  console.log(temperatureKonverteri(inputValue));
});
