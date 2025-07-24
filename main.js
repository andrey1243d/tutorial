/* script.js */
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("userInput");
  const button = document.getElementById("sendBtn");
  const output = document.getElementById("output");

  if (input && button) {
    button.addEventListener("click", () => {
      const value = input.value.trim();
      if (value) {
        localStorage.setItem("formData", value);
        window.location.href = "display.html";
      }
    });
  }

  if (output) {
    const data = localStorage.getItem("formData");
    if (data) {
      output.textContent = data;
      output.style.opacity = 1;
    } else {
      output.textContent = "Нет данных";
      output.style.opacity = 1;
    }
  }
});