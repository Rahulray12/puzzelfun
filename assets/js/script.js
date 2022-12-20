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

    // Creat table
    let Type;
    let numArray = [];

    function createTable() {
    const myTable = document.createElement("table");
    myTable.id = "myTable";
    document.getElementById(puzzel).innerHTML=myTable;

    let Count = 0;
    for (let i = 0; i < Type; i++) {
        const row = document.createElement("tr");
        for (j = 0; j < Type; j++) {
            const tile = document.createElement("td");
            tile.id = Count;
            tile.addEventListener("click", moveTile);
            row.appendChild(tile);
            Count++;
        }
        myTable.appendChild(row);
    }

    for (let i = 0; i < Type * Type; i++) {
        let tile = document.getElementsByTagName("td");
        if (numArray[i] == type * type) {
            tile.innerHTML = "";
            tile.className = "empty";
            } else {
            tile.innerHTML = numbers[i];
            tile.className = "tile";
            }
        }      
    }

    // display3x3puzzel
    function display3puzzel () {
        let type=3;
        createTable ();
    }

    // display4x4puzzel
    function display4puzzel () {
        let type=4;
        createTable ();
    }

    // display4x4puzzel
    function display5puzzel () {
        let type=5;
        createTable ();
    }

    // need to think how to trigger checkwin

    // Default game is 3X3 puzzel when DOM is loaded
    runGame("3");
    
});




// Display game guide when user clicking on 'Game Guide' button
function openGuide() {
    let guideModal = document.getElementById("guide-modal");
    let guideBtn = document.getElementById("guide-btn");
    guideModal.style.display = "block";
}


function runGame(gameType) {

    if (gameType === "3") {
		display3puzzel;
	} else if (gameType === "4") {
		display4puzzel;
	} else if (gameType === "5") {
		display5puzzel;
	} else {
		alert(`Game type ${gameType} not found`);
		throw `Erro game type ${gameType}, aborting!`;
	}


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

