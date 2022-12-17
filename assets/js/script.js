// Display game menu when user clicking on 'Game Guide' button
let guideModal = document.getElementById("guide-modal");
let guideBtn = document.getElementById("guide-btn");
let close = document.getElementsByClassName("close")[0];

function openGuide(){
    guideModal.style.display = "block";
}
guideBtn.addEventListener("click", openGuide);