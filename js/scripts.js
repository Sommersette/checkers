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

var red1 = new Piece("red", 42);
var red2 = new Piece("red", 44);

// example push piece to occupiedSquares

gameBoard.occupiedSquares.push(red1);
gameBoard.occupiedSquares.push(red2);

// Piece.each(function(){
//   gameBoard.occupiedSquares.push(this);
// });

// example move
red1.currentPos = red1.currentPos - 7;


var updateBoard = function() {
  gameBoard.occupiedSquares.forEach(function(occupiedSquare) {
    var occupied = occupiedSquare.currentPos;
    $("[data-value='" + occupied + "']").html("<div class='red piece'></div>");
  });
}
// Create array for all squares to be colored
var coloredSquares = [1,3,5,7,8,10,12,14,17,19,21,23,24,26,28,30,33,35,37,39,40,42,44,46,49,51,53,55,56,58,60,62];









// --------------------------------- UI LOGIC
// --------------------------------- UI LOGIC
// --------------------------------- UI LOGIC

$(document).ready(function() {
// create new board html, it needs 64 squares
var makeBoard = function() {
  for (var i = 0; i < 64; i++) {
    $("#board").append("<div class='square' data-value='" + i + "'></div>");
  }
  $("#board").append("<div class='reset-button' onClick='window.location.reload()'>New Game</div>");
}
makeBoard();

gameBoard.occupiedSquares.forEach(function(occupiedSquare) {
  var occupied = occupiedSquare.currentPos;
  $("[data-value='" + occupied + "']").html("<div class='red'></div>");
});

var coloredSquares = [1,3,5,7,8,10,12,14,17,19,21,23,24,26,28,30,33,35,37,39,40,42,44,46,49,51,53,55,56,58,60,62];
coloredSquares.forEach(function(coloredSquare){
  $("[data-value='" + coloredSquare + "']").addClass("black");
})
  var player1Name = $("").val();
  var player2Name = $("").val();
  var player1 = new Player(player1Name, 12);
  var player2 = new Player(player2Name, 12);

  // create new board html, it needs 64 squares
  var makeBoard = function() {
    for (var i = 0; i < 64; i++) {
      $("#board").append("<div class='square' data-value='" + i + "'></div>");
    }
    $("#board").append("<div class='reset-button' onClick='window.location.reload()'>New Game</div>");
  }
  makeBoard();
  updateBoard();

  // loop through array and color each div
  coloredSquares.forEach(function(coloredSquare){
    $("[data-value='" + coloredSquare + "']").addClass("black");
  });


    $("#move-button").click(function() {
      var selectPiece = parseInt($("#select").val());
      var moveTo = parseInt($("#move").val());
      var moveFrom = red1.currentPos;
      alert(moveFrom);
      $("[data-value='" + moveFrom + "']").html("");
      red1.currentPos = moveTo;
      updateBoard();
    });

  });





















// end
