// modal function

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

//counter function

const modalContainer = document.querySelector(".modal__body");
const btn = document.querySelector(".section__button");
let buttonReset = document.createElement("button");
buttonReset.className = "modal__reset a-button white";
buttonReset.innerHTML = "Reset";
let counter = 0;

function clickInit() {
  let counterStr = localStorage.getItem("counter");
  if (counterStr == undefined) {
    localStorage.setItem("counter", 0);
    counter = 0;
  } else {
    counter = parseInt(counterStr);
  }
  document.querySelector(".counter").innerHTML = counter;
}

function clickCounter() {
  counter++;
  localStorage.setItem("counter", counter);
  document.querySelector(".counter").innerHTML = counter;
  if (counter > 5) {
    modalContainer.appendChild(buttonReset);
  }
}

btn.addEventListener("click", clickCounter);
clickInit();
function resetCounter() {
  localStorage.clear;
  counter = 0;
  document.querySelector(".counter").innerHTML = counter;
  buttonReset.remove();
}
buttonReset.addEventListener("click", resetCounter);
