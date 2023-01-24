const inputElements = document.querySelectorAll("input");
const [title, imgurl, content] = inputElements;

const menuUlElement = document.querySelector(".vertical-menu");
const albumUlElement = document.querySelector(".album-list");

const addNewItem = (event) => {
  event.preventDefault();
  const newAlbumListElement = document.createElement("li");
  newAlbumListElement.classList.add("album-list-item");
  newAlbumListElement.innerHTML = `
    <img src="${imgurl.value}" alt="${title.value}">
    <span>${content.value}</span>
  `;

  const newMenuListElement = document.createElement("li");
  newMenuListElement.innerHTML = `<span>${title.value}</span>`;

  for (inputElement of inputElements) {
    inputElement.value = "";
  }

  menuUlElement.appendChild(newMenuListElement);
  albumUlElement.appendChild(newAlbumListElement);
  closeModal();
};

formModalElement.addEventListener("submit", addNewItem);
