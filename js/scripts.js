// --------------------------------- BUSINESS LOGIC
// --------------------------------- BUSINESS LOGIC
// --------------------------------- BUSINESS LOGIC

// create object constructors
function Board(totalSquares, occupiedSquares) {
  this.totalSquares = totalSquares;
  this.occupiedSquares = occupiedSquares;
}
function Player(name, numOfPieces) {
  this.name = name;
  this.numOfPieces = numOfPieces;
}
function Piece(name, currentPos) {
  this.name = name;
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

// --------------------------------- Frontend LOGIC
// --------------------------------- Frontend LOGIC
// --------------------------------- Frontend LOGIC

$(document).ready(function(){
  var player1Name = $("").val();
  var player2Name = $("").val();
  var player1 = new Player(player1Name, 12);
  var player2 = new Player(player2Name, 12);
  

});































// --------------------------------- UI LOGIC
// --------------------------------- UI LOGIC
// --------------------------------- UI LOGIC

$(document).ready(function() {


























});



// end
