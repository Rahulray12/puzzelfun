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

      
       
    // Display game guide when user clicking on 'Game Guide' button
    function openGuide() {
    let guideModal = document.getElementById("guide-modal");
    let guideBtn = document.getElementById("guide-btn");
    guideModal.style.display = "block";
    }

    function runGame(gameType) {

        if (gameType === "3") {
            display3puzzle();
        } else if (gameType === "4") {
            display4puzzle();
        } else if (gameType === "5") {
            display5puzzle();
        } else {
            alert(`Game type ${gameType} not found`);
            throw `Erro game type ${gameType}, aborting!`;
        }

    }
      

    // need to think how to trigger checkwin

    // Default game is 3X3 puzzle when DOM is loaded
    runGame("3");
    
});

// creat table
function createTable(type) {
    let numArray=[];
    const myTable = document.createElement("table");
    myTable.id = "myTable";
    document.getElementById("puzzle").appendChild(myTable);
    

    let Count = 0; 
    for (let i = 0; i < type; i++) {
        const row = document.createElement("tr");
        for (j = 0; j < type; j++) {
            const tile = document.createElement("td");
            tile.id = Count;
            tile.addEventListener("click", moveTile);
            row.appendChild(tile);
            Count++;
            
        }
        myTable.appendChild(row);
    }

    for (let i = 0; i < type * type; i++) {
        let tile = document.getElementsByTagName("td");
        if (numArray[i] == type * type) {
            tile.innerHTML = "";
            tile.id = "empty";
            } else {
            tile.innerHTML = numArray[i];
            tile.className = "tile";
            }
        }      
        
}

// display3x3puzzle
function display3puzzle() {
    let type=3;
    createTable(type);
}

// display4x4puzzle
function display4puzzle() {
    let type=4;
    createTable(type);
}

// display4x4puzzle
function display5puzzle() {
    let type=5;
    createTable(type);
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


