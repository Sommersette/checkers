# _Checkers_

#### _Basic checkers board games, April 10, 2017_

#### By _**Trevor Fast, Sean Pierce, Sowmya Dinavahi , Jin Camou**_

## Description

_Checkers board game is a web app to play a simple checkers game between two players. User is able to manipulate position of their colored pieces in accordance to the traditional USA rules of the game._

## Setup/Installation Requirements

* Clone to computer or download repository from https://github.com/Sommersette/checkers.git.
* Open index in browser by clicking on folder and index files.


## Specs/Tests
* The program creates board with 64 squares.
* The program will create 1 or 2 player object.
* front end player: text input field for each player next to pieces color designation.
   * **Input**: text input next to piece color.
    * **Output**: text field for player one is automatically assigned black which is next to input field.
* The program creates a single piece for that player for which the user may move according to the rules of checkers.
   * **Input**: Piece is located at index/square: 41
   * **Output**: Piece can only move to space 32 or 34 (-9 or -7 from originating point)

* user interaction with piece... click piece active player wants to move and then clicks the square they would like to move it to.
   * **Input**: click event of the piece that is intended to be moved.
    * **Output**: highlights square that was clicked of piece intended to be moved
* user clicks index square that they intend to move the piece to.
   * **Input**: click square with mouse
   * **Output**: highlight new index/square prompt asks to confirm move that space that will be moved to.
<!-- * Potential moves: The program will highlight all of a players potential moves for their selected piece. -->
* two players
* If the piece is currently positioned on a left edge the program will implement a condition limiting it's available movements.
    * **Input**: Pieces in 'left edge' index can only move -7 from 'left edge', or pieces in index of 56, 40, 24, & 8.
    * **Output**: Piece in index of 56 only able to move to index of 49.
* If the piece is currently positioned on a right edge will implement a condition limiting it's available movements.
    * **Input**: Pieces in 'index right' edge can only move -9 from 'right edge', or pieces in index of 55, 37, 23, & 7.
    * **Output**: Piece in index of 55 only able to move to index of 46.
* define space as occupied. If space is occupied another piece can not also move to it.
* Jumping: The program will allow a player to jump an opponent's piece, according to the rules of checkers
  * **Input**: Current player's piece is on index 44, giving it 2 available moves, however, opponent has piece on index 35 (-/+9 positions from current player's start point).
  * **Output**: If index -/+9 spaces from opponent's piece is not occupied, current player can jump opponent by moving piece -/+18 from starting point, in this example ending at index 26.
  (conversely, if opponent occupied index -/+7 of starting point, the program will check if index -/+7 of that opponent's piece is available, and the same above logic will apply.)
* Jumping (on edge): If the opponent's piece is occupying and index that is either on the left or right edge, a jump cannot occur.
  * **Input**: Current player's piece is on index 30, and opponents's piece is on index 23 (-7 spaces from starting point).
  * **Output**: Current player cannot jump opponent, because opponent's piece is 'on edge.'

* jump multiple pieces move can be made in different directions: (this is an expansion on our original "jump spec")
* Captured piece: jumped piece decremented from board. Space becomes available for other pieces to move to and occupy.
* Piece reaches opposite edge from starting position it can now be moved in both directions.
* piece icon is changed to represent royalty.
* Winning: A player wins the game when the opponent cannot make a move. In most cases, this is because all of the opponent's pieces have been captured, or it could be because all of their pieces are blocked in.



## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**
