// Run game after window onload 
// Get all the buttons and set listners to take the action when buttons are clicked
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-type") === "guide") {
				openGuide();
			} else if (this.getAttribute("data-type") === "start") {
                start(); 
            } else if (this.getAttribute("data-type") === "pause") {
                pause(); 
            } else if (this.getAttribute("data-type") === "resume") {
                resume(); 
            }else {let gameType = this.getAttribute("data-type");
				runGame(gameType);
                
			}
		});
	}

    //activate close game guide function when click on 'x'
    document.getElementsByClassName("close")[0].addEventListener("click", closeGuide);

         
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
        clearTimeout(timer);
        startButton.textContent = "Start";
        startButton.style.backgroundColor = "#a6f5a6";        
        clock.innerText = "0";
        document.getElementById("score").innerText = "0";
        
    } else if (gameType === "4") {
        display4puzzle();
        clearTimeout(timer);        
        startButton.textContent = "Start";
        startButton.style.backgroundColor = "#a6f5a6";
        clock.innerText = "0";
        document.getElementById("score").innerText = "0";
        

    } else if (gameType === "5") {
        display5puzzle();
        clearTimeout(timer);        
        startButton.textContent = "Start";
        startButton.style.backgroundColor = "#a6f5a6";
        clock.innerText = "0";
        document.getElementById("score").innerText = "0";
        
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
    
    // create table tr and tb contents and add id to each tile
    let Count = 0; 
    for (let i = 0; i < type; i++) {
        const row = document.createElement("tr");
        for (j = 0; j < type; j++) {
            const tile = document.createElement("td");
            tile.id = Count;            
            row.appendChild(tile);
            Count++;          
        }
        myTable.appendChild(row);
    }
       
    //asign number to each tile in ascending numeric order when loading the game
    for (let i = 0; i < type * type-1; i++) {
        if (numArray[i] = i+1) {
        let tile = document.getElementById(i);
            tile.innerHTML = numArray[i];
            tile.className = "tile";
        }else {
        tile.innerHTML = "";
        tile.className = "empty"
        tile.style.backgroundColor = "#0f0f0f";
        }
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
    
    // asign randomised numbers to each tile and add event listener to 
    // call the check and move tiles function
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
        checkMoveTile();
        tile.addEventListener("click", checkMoveTile);
    }
}
    
/**Display 3x3puzzle*/
function display3puzzle() {
    let type=2;
    createTable(type);
}

/**Display 4x4puzzle*/
function display4puzzle() {
    let type=4;
    createTable(type);
}

/**Display 5x5puzzle*/
function display5puzzle() {
    let type=5;
    createTable(type);
}


/**Satrt a new game and begin to timing. Allow user to restart another game if they want to exit the current game*/
function start() {
    if(startButton.innerHTML = "Restart") {
        clearTimeout(timer);
        startButton.disabled = true;  
        setTimeout(restartBtn,2000);//Disable the restart button for 2 seconds before next click
        function restartBtn() {     //To prevent users keeping on press it and mess up the timers running
            startButton.disabled = false
        }
    }
    shuffle();
    startButton.innerHTML = "Restart";
    startButton.style.backgroundColor = "orange";
    currentTime = 0;
    setTimeout(timing, 1000);    
    clock.textContent = currentTime;
      
}

let startButton = document.getElementById("start");
let clock = document.getElementById("timer");
let currentTime;
let timer;
let active = 0
/**Start timing in seconds  */
function timing() {
    currentTime++;
    clock.textContent = currentTime;
    timer = setTimeout(timing, 1000);
}
/**restart timer */
function resume () {
    if(!active) {
        active = 1;
        timing();
    }
}

/**Pause timer */
function pause() {
    clearTimeout(timer);
    active=0;       
}

/**Find the tiles can be moved and define the way of moving them between numbered tile and empty tile */
function checkMoveTile() {
    let tiles = document.getElementsByTagName('td')
    /**Check if a tiles is adjascent to the empty tile*/
    function canMove(tile){
        const tileColumn = tile.cellIndex;
        const tileRow = tile.parentElement.rowIndex;
        const emptyTile = document.getElementsByClassName('empty')[0];
        const emptyTileColumn = emptyTile.cellIndex;
        const emptyTileRow = emptyTile.parentElement.rowIndex;
        //list all 4 possible positions can be adjascent to empty tile (defined by column and row), 
        // only the tiles sitting on one or more of the below positions will return true, which means 'can be moved'.

        return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
               (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) ||
               (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
               (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1);
      };
      
    /**Move one of the tiles returned true from canMove function and swap it with empty cell when user clcking on it */
    function moveTile(element){
        const emptyTile = document.getElementsByClassName('empty')[0];
        emptyTile.innerHTML = element.innerHTML;
        emptyTile.classList.remove('empty');
        emptyTile.classList.add('tile');
        emptyTile.style.backgroundColor = "whitesmoke";
        element.innerHTML = '';
        element.classList.remove('tile');
        element.classList.add('empty');
        element.style.backgroundColor = "#0f0f0f";
      };

    for (let tile of tiles) {
        tile.addEventListener('click', function() {
            if (canMove(tile)) {
            moveTile(tile);
            setTimeout(checkWin, 500); //checkWin runs faster than moveTile and the winning message appears
            //right after the final click but before the tile moves to the right spot. So checkWin is set half second 
            //delayed after moveTile.
           }
        });
      };  

}




// To check if the puzzle is sorted in the ascending order by matching their tile value to their id(index)+1
/**Check if user solves puzzle and reset game */
function checkWin() {
    win = true;
    let tiles=document.getElementsByTagName("td");
    for(let i=0; i<tiles.length-1; i++){
        var tile = document.getElementById(i);
        if(tile.textContent==i+1){
            continue;
        }else {
            win = false;
        }       
    }
    
    if(win){
        alert("Congratulations, You spend" + clock.innerHTML + "s solve the puzzle!")
        sumScore();
        // location.reload();
        clearTimeout(timer);
        startButton.textContent = "Start";
        startButton.style.backgroundColor = "#a6f5a6";
        
    }
}

/**Count the times of winning at each puzzle type*/
function sumScore() {
    
    let currentScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++currentScore;
}
