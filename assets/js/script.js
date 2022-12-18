// Display game guide when user clicking on 'Game Guide' button

let guideModal = document.getElementById("guide-modal");
let guideBtn = document.getElementById("guide-btn");
let close = document.getElementsByClassName("close")[0];
function openGuide() {
    guideModal.style.display = "block";
}
guideBtn.addEventListener("click", openGuide);

// Close the game guide when clicking on (x)

function closeGuide() {
    guideModal.style.display = "none";
}
close.addEventListener("click", closeGuide);
