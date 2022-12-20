// Run game after window onload 
// Get all the buttons and set listners to take the action when buttons are clicked
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-type") === "guide") {
				openGuide();
			} else if (this.getAttribute("data-type") === "start") {
                    shuffle(); 
            } else if (this.getAttribute("data-type") === "pause") {
                        pause(); 
            } else {let gameType = this.getAttribute("data-type");
				runGame(gameType);
			}
		});
	}

    // Close the game guide when clicking on (x)
    document.getElementsByClassName("close")[0].addEventListener("click", function
        closeGuide() {
            document.getElementById("guide-modal").style.display = "none";
    });

 

});




// Display game guide when user clicking on 'Game Guide' button
function openGuide() {
    let guideModal = document.getElementById("guide-modal");
    let guideBtn = document.getElementById("guide-btn");
    guideModal.style.display = "block";
}


function runGame(gameType) {

}
function shuffle() {

}
function moveTile() {

}
function timer() {

}

function pause() {

}

function stop() {
    
}
function Checkwin() {

}
function ncrementalScore() {

}
function display3puzzel() {

}
function display4puzzel() {

}
function display5puzzel() {
    
}

