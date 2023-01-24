const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector(".close-btn");
const modalBackgroundElement = document.querySelector(".modal-background");
const formModalElement = document.querySelector(".modal");

const showModal = () => {
  modalBackgroundElement.style.display = "block";
  formModalElement.style.display = "flex";
};
const closeModal = () => {
  modalBackgroundElement.style.display = "none";
  formModalElement.style.display = "none";
};

addBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);
