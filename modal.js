// Modal
let modal = document.getElementById(".modal");
// Button that will open modal
let btn = document.getElementById("#modalBtn");
// Close button inside modal
let closeBtn = document.getElementById(".closeBtn")
// On click function to open modal
btn.onclick = function() {
  modal.style.display = "block";
}
// Close modal
closeBtn.onclick = function () {
  modal.style.display = "none";
}
// If user clicks outside of modal, will close
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}