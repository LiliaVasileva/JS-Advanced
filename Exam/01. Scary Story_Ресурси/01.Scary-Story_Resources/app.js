window.addEventListener("load", solve);

function solve() {

  let firstNameElement = document.getElementById("first-name");
  let lastNameElement = document.getElementById("last-name");
  let ageElement = document.getElementById("age");
  let storyTitleElement = document.getElementById("story-title");
  let genreElement = document.getElementById("genre");
  let storyElement = document.getElementById("story");
  let publishButtonElement = document.getElementById("form-btn");
  let ulListElement = document.getElementById("preview-list");

  publishButtonElement.addEventListener('click', (e) => {
    e.preventDefault()

    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;
    let age = ageElement.value;
    let storyTitle = storyTitleElement.value;
    let genre = genreElement.value;
    let storyText = storyElement.value;

    if (!firstName || !lastName || !age || !storyTitle || !storyText) {
      return;
    }

    let listElement = document.createElement("li");
    let articleElement = document.createElement("article");
    let h4Element = document.createElement("h4");
    let pAgeElement = document.createElement("p");
    let pTitleElement = document.createElement("p");
    let pGenreElement = document.createElement("p");
    let pTextElement = document.createElement("p");
    let saveButtonElement = document.createElement("button");
    let editButtonElement = document.createElement("button");
    let deleteButtonElement = document.createElement("button");


    listElement.classList.add("story-info");
    saveButtonElement.classList.add("save-btn");
    editButtonElement.classList.add("edit-btn");
    deleteButtonElement.classList.add("delete-btn");

    h4Element.textContent = `Name: ${firstName} ${lastName}`;
    pAgeElement.textContent = `Age: ${age}`;
    pTitleElement.textContent = `Title: ${storyTitle}`;
    pGenreElement.textContent = `Genre: ${genre}`;
    pTextElement.textContent = storyText;
    saveButtonElement.textContent = `Save Story`;
    editButtonElement.textContent = `Edit Story`;
    deleteButtonElement.textContent = `Delete Story`;

    articleElement.appendChild(h4Element);
    articleElement.appendChild(pAgeElement);
    articleElement.appendChild(pTitleElement);
    articleElement.appendChild(pGenreElement);
    articleElement.appendChild(pTextElement);

    listElement.appendChild(articleElement);
    listElement.appendChild(saveButtonElement);
    listElement.appendChild(editButtonElement);
    listElement.appendChild(deleteButtonElement);

    ulListElement.appendChild(listElement);


    firstNameElement.value = "";
    lastNameElement.value = "";
    ageElement.value = "";
    storyTitleElement.value = "";
    genreElement.value = "";
    storyElement.value = "";

    publishButtonElement.disabled = true;

    editButtonElement.addEventListener('click', (e) => {

      firstNameElement.value = firstName;
      lastNameElement.value = lastName;
      ageElement.value = age;
      storyTitleElement.value = storyTitle;
      genreElement.value = genre;
      storyElement.value = storyText;

      listElement.remove();
      publishButtonElement.disabled = false;
    })

    deleteButtonElement.addEventListener('click', (e) => {
      listElement.remove();
      publishButtonElement.disabled = false;
    })

  })
}
