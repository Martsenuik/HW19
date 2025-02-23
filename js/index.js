// 1. Скрипт відкриття та закриття модального вікна по кнопці
const openModalBtn = document.querySelector("#open-modal");
const closeModalBtn = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const backdrop = document.querySelector("#backdrop");

openModalBtn.addEventListener("click", () => modal.classList.add("open"));
closeModalBtn.addEventListener("click", () => modal.classList.remove("open"));

// 2. Закриття модального вікна по кліку на бекдроп
backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    modal.classList.remove("open");
  }
});

// 3. Зміна фону body при виборі радіокнопки
const radios = document.querySelectorAll("input[name='color']");
radios.forEach(radio => {
  radio.addEventListener("change", (event) => {
    document.body.style.backgroundColor = event.target.value;
  });
});

// 4. Підстановка тексту в span#name-output
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  nameOutput.textContent = nameInput.value.trim() || "незнайомець";
});

// Перевірка кількості символів при втраті фокусу
const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const requiredLength = Number(validationInput.dataset.length);
  if (validationInput.value.length === requiredLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});

// 5. Зміна розміру тексту при зміні input#font-size-control
const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
});