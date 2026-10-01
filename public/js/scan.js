const photo = document.getElementById("photo");
const preview = document.getElementById("preview");
const previewImg = document.getElementById("previewImg");
const fileName = document.getElementById("fileName");
const error = document.getElementById("error");
const analyzeBtn = document.getElementById("analyzeBtn");

photo.addEventListener("change", () => {
  const file = photo.files[0];
  if (!file) return;
  previewImg.src = URL.createObjectURL(file);
  fileName.textContent = file.name;
  preview.hidden = false;
  error.hidden = true;
});

analyzeBtn.addEventListener("click", () => {
  if (!photo.files[0]) {
    error.hidden = false;
    return;
  }
  analyzeBtn.textContent = "Analyzing…";
  // Abhi backend nahi hai, isliye 2 second baad results page par bhejo
  setTimeout(() => (window.location.href = "/results"), 2000);
});