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

     

    // need to think how to trigger checkwin

    // Default game is 3X3 puzzle when DOM is loaded
    runGame("3");
    
});

// Display game guide when user clicking on 'Game Guide' button
function openGuide() {
    let guideModal = document.getElementById("guide-modal");
    let guideBtn = document.getElementById("guide-btn");
    guideModal.style.display = "block";
    }


// After user choose the puzzle to play, the default puzzle will be 
// cleared and repaced with the selected one
function runGame(gameType) {
    document.getElementById("puzzle").innerHTML = '';
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

// Creat table and fill in the tiles with numbers from 1 to their Type X Type (eg:3x3)
function createTable(type) {
    let numArray= [];
    const myTable = document.createElement("table"); // creat tableand insert it to puzzel div
    myTable.id = "myTable";
    document.getElementById("puzzle").appendChild(myTable);
    
    // creat table tr and tb content and add id to each tile
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
       
    //asign number to each tile in ascending numeric order when loading the game
    for (let i = 0; i < type * type; i++) {
        numArray[i] = i+1;
        let tile = document.getElementById(i);
        if (numArray[i] == type * type) {
            tile.innerHTML = "";
            tile.id = "empty";
        } else {
            tile.innerHTML = numArray[i];
            tile.className = "tile";
        }
    }
}      
    // shuffle the numbers randomly to start the game
function shuffle() {
    let cell = document.getElementsByTagName("td");
    let numArray = new Array(parseInt(cell.length));
    
    for (let i = 0; i < cell.length; i++) {
        numArray[i] = i+1;
    }
    for (let i = numArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numArray[i], numArray[j]] = [numArray[j], numArray[i]];
    }        
    for (let i = 0; i < cell.length; i++) {
        var tile = document.getElementById(i);
        if (numArray[i] == numArray.length) {
            tile.innerHTML = "";
            tile.className = "empty";
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

function start() {

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


