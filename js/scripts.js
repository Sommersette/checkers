// --------------------------------- BUSINESS LOGIC
// --------------------------------- BUSINESS LOGIC
// --------------------------------- BUSINESS LOGIC

// create object constructors
function Board(totalSquares, occupiedSquares) {
  this.totalSquares = totalSquares;
  this.occupiedSquares = occupiedSquares;
}
function Player(team, numOfPieces) {
  this.team = team;
  this.numOfPieces = numOfPieces;
}
function Piece(team, currentPos) {
  this.team = team;
  this.currentPos = currentPos;
}
// create loop for writing num of squares (because hand typing this is nuts)
var squares = [];
var makeSquares = function() {
  for (var i = 0; i < 64; i++) {
    squares.push(i);
  }
}
makeSquares();

// instaniate new instance of a board
// parameter 1 contains an array of nums 0-63, and parameter 2 contains empty array
var gameBoard = new Board(squares, []);

// instantiate a single piece, and in this example start it at index 41
var red1 = new Piece("red", 41);

// example push piece to occupiedSquares
gameBoard.occupiedSquares.push(red1);

// example move
red1.currentPos = red1.currentPos - 7;































// --------------------------------- UI LOGIC
// --------------------------------- UI LOGIC
// --------------------------------- UI LOGIC

$(document).ready(function() {


























});



// end
