const placeholder = document.getElementById("placeholder");
const optionsContainer = document.getElementById("optionsContainer");
const optionsContainerClasses =
  document.getElementById("optionsContainer").classList;

placeholder.addEventListener("click", () => {
  optionsContainer.style.display =
    optionsContainer.style.display === "none" ? "block" : "none";
});
