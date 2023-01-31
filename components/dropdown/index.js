const placeholder = document.getElementById("placeholder");
const optionsContainer = document.getElementById("optionsContainer");
const optionsContainerClasses =
  document.getElementById("optionsContainer").classList;

const optionsObject = {
  1: "Dog",
  2: "Cat",
  3: "Hamster",
};

const getOptionsHTML = function (option) {
  return `<div class="option" ?>${optionsObject[option]}</div>
    `;
};

const renderOptions = function () {
  optionsContainer.innerHTML = "";
  for (let option in optionsObject) {
    optionsContainer.innerHTML += getOptionsHTML(option);
  }
};

const toggleOptions = function () {
  optionsContainer.style.display =
    optionsContainer.style.display === "none" ? "block" : "none";
};

placeholder.addEventListener("click", () => {
  renderOptions();
  toggleOptions();
});
