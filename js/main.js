//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll(".drop-zone"),
    resetBut = document.querySelectorAll("#resetBut"),
    
   
    //since there are no parameters or js  set for #resetBut, the variable will be set here
  //bug fix 2 will go here
  //const resetBut = document.querySelectorAll("#resetBut"),
    //will use a forEach loop and if statement
    //i want to loop through dropzones and check if there is?
    //check with firstChild
    //if there is a child
    //puzzlePiecesDiv.appendChild(something needs to go here)
    puzzlePiecesDiv = document.querySelectorAll(".puzzle-pieces");

//store the dragged piece in a global variable
//we will need it in the handleDrop function    
let draggedPiece;

function changeBGImage() {
    //console.log("changeBGImage called");
    //url('../images/backGround0.jpg');
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`
}

function handleStartDrag() {
    //console.log("Started dragging this piece:", this)
    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault();
    //this will prevent the default dragover behaviour
    //e is short for event, could be e, evt a well
    console.log("dragged over me");
}

function handleDrop(e) {
    e.preventDefault();
    console.log("dropped something on me");
    //this line moves the dragged piece from the left side of the board
    //into whatever dropzone we choose.
    this.appendChild(draggedPiece);

        //bug fix 1 will go here
    //can also check if there are no children
    if(this.puzzlePieces >=1)  {
        return;
    }
}
function defaultBehaviour(e) {
    console.log ("dropzone here");


this.appendChild(document.querySelector(`#${puzzlePieces}`));
}

function resetPuzzleboard(e) {
    console.log("board has been reset");
    if(this.puzzlePieces){
        return;
    }
}
//this will tell the puzzle pieces to return to the original position

//event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage)); 

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

puzzlePiecesDiv.forEach(zone => zone.addEventListener("abort",defaultBehaviour ));

resetBut.forEach(button => button.addEventListener("click", resetPuzzleboard));

//event listener for resetBut ("click", resetPuzzleboard)