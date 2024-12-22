const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const clearName = nameInput.value.trim();

  if (clearName === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = clearName;
  }
});
