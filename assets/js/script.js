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

    //activate close game guide function when click on 'x'
    document.getElementsByClassName("close")[0].addEventListener("click", closeGuide);

     

    // need to think how to trigger checkwin

    // Default game is 3X3 puzzle when DOM is loaded
    runGame("3");
    
});

/**Display game guide when user clicking on 'Game Guide' button*/
function openGuide() {
    let guideModal = document.getElementById("guide-modal");
    let guideBtn = document.getElementById("guide-btn");
    guideModal.style.display = "block";
    }

/**Close the game guide*/
function closeGuide() {
    document.getElementById("guide-modal").style.display = "none";
}

// After user choose the puzzle to play, the default puzzle will be 
// cleared and repaced with the selected one
/** To display the puzzle game chosen by user */
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

// Create table and fill in the tiles with numbers from 1 to their Type X Type (eg:3x3)
/**Create puzzel tables by type */
function createTable(type) {
    let numArray= [];
    const myTable = document.createElement("table"); // create table and insert it to puzzel div
    myTable.id = "myTable";
    document.getElementById("puzzle").appendChild(myTable);
    
    // create table tr and tb content and add id to each tile
    let Count = 0; 
    for (let i = 0; i < type; i++) {
        const row = document.createElement("tr");
        for (j = 0; j < type; j++) {
            const tile = document.createElement("td");
            tile.id = Count;
            tile.addEventListener("click", checkMoveTile);
            row.appendChild(tile);
            Count++;          
        }
        myTable.appendChild(row);
    }
       
    //asign number to each tile in ascending numeric order when loading the game
    for (let i = 0; i < type * type -1; i++) {
        numArray[i] = i+1;
        let tile = document.getElementById(i);
            tile.innerHTML = numArray[i];
            tile.className = "tile";
    }
}      
// shuffle the numbers randomly to start the game
/**Randomly pick the numbers from array and asign them to puzzel tiles*/
function shuffle() {
    let cell = document.getElementsByTagName("td");
    let numArray = new Array(parseInt(cell.length));
    
    for (let i = 0; i < cell.length; i++) {
        numArray[i] = i+1;
    }

    //This piece of code is taken from 'stackoverflow' to randomise an array
    for (let i = numArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numArray[i], numArray[j]] = [numArray[j], numArray[i]];
    }
    
    
    for (let i = 0; i < cell.length; i++) {
        let tile = document.getElementById(i);
        if (numArray[i] !== numArray.length) {
            tile.innerHTML = numArray[i];
            tile.className = "tile";
            tile.style.backgroundColor = "whitesmoke";            
        } else {
            tile.innerHTML = "";
            tile.className = "empty"
            tile.style.backgroundColor = "#0f0f0f";
        }
    }
}
    
/**display 3x3puzzle*/
function display3puzzle() {
    let type=3;
    createTable(type);
}

/**display 4x4puzzle*/
function display4puzzle() {
    let type=4;
    createTable(type);
}

/**display 5x5puzzle*/
function display5puzzle() {
    let type=5;
    createTable(type);
}

function start() {

}
function checkMoveTile() {
    let tiles = document.getElementsByTagName('td')
    //**Check adjacent cell if it is empty  */
    function canMove(tile){
        const tileColumn = tile.cellIndex;
        const tileRow = tile.parentElement.rowIndex;
        const emptyTile = document.getElementById('empty');
        const emptyTileColumn = emptyTile.cellIndex;
        const emptyTileRow = emptyTile.parentElement.rowIndex;
      
        return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
               (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) ||
               (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
               (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1);
      };
      
    /**Move the tile when it is next to the empty cell */
    function moveTile(element){
        // Select the empty place
        const emptyTile = document.getElementById('empty');
        emptyTile.innerHTML = element.innerHTML;
        emptyTile.classList.remove('empty');
        emptyTile.classList.add('tile');
        element.innerHTML = '';
        emptyTile.classList.remove('tile');
        element.classList.add('empty');
      };

      for (let tile of tiles) {
        tile.addEventListener('click', () => {
          if (canMove(tile)) {
            moveTile(tile);
           }
          });
      };  

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


