document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("message").textContent = "The text has been updated!";
});

document.getElementById("changeStyleBtn").addEventListener("click", () => {
  document.getElementById("main-heading").style.color = "crimson";
  document.body.style.backgroundColor = "#eef";
});

document.getElementById("toggleBoxBtn").addEventListener("click", () => {
  const container = document.getElementById("boxContainer");
  const existingBox = document.querySelector(".box");

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    container.appendChild(newBox);
  }
});