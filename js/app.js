// Battleship

//standar window onload to-do list
window.onload = function () {
	console.log('Loaded up.');

	//Start button to generate board. Will refactor later to decide how many players (comp vs 2p)
	$('button#game-starter').click(function(){
		drainOcean();
		buildOcean();
	});

};


// Make board (not necessarily the guess or select board right now)
var oceanBoardArray = [	['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',]]



// First attempt at div constructor loop for spaces; creates board inside game-board div
var buildOcean = function(){

	//creates the div game-board
	var tempBoard = document.createElement('div');
	tempBoard.className = 'game-board';
	tempBoard.id = 'guess-board';
	document.querySelector('div#container').appendChild(tempBoard);

	//creates 'latitude' rows to contain individual square spaces
	for (var i = 0; i < oceanBoardArray.length; i++) {
		var tempRow = document.createElement('div');		
		tempRow.classList.add('latitude');
		tempRow.id = ('row' + i)  //Look up classList() use on MDN: Can we pass a variable (i) here? YES
		tempBoard.appendChild(tempRow);

		//Using nested for functions to create Square divs within each appended row
		for (var j = 0; j < oceanBoardArray[i].length; j++) {  
			var tempSquares = document.createElement('div');
			tempSquares.classList.add('square-space','empty');
			tempSquares.setAttribute('x-lat', i);
			tempSquares.setAttribute('y-lon-', j);
			tempSquares.innerHTML = oceanBoardArray[i][j];
				//Use this random color board for win state - make function celebrationBoard on a loop
			 //tempSquares.setAttribute('style', 'background:rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) +',' + (Math.floor(Math.random() * 256)) + ');');
			tempRow.appendChild(tempSquares);
			console.log(oceanBoardArray[i][j]);
		};
	};
};

//Clear the grid if game is restarted
var drainOcean = function() {
		var tempBoard = document.querySelector('div.game-board');

	if (tempBoard) {
		var tempContainer = document.getElementById('container');
		console.log(tempContainer, tempBoard);
		tempContainer.removeChild(tempBoard);
		
	}
};


// Ship Placement logic - Have to do amost same thing for each type of ship? Can it be dynamic? Should it be?

//Initialize placement of Aircraft Carrier
$('#place-aircraft-carrier').click(function(){
	console.log(this);

	//remove any currently place permenant AND temporary div classifications

});




// Computer Ship placement
	// will utilize the module's hidden array so as to hide ship locations from Player1

var computerPlacement = (function(){

	var compCords A = ['1','2','3','4','5'];       //Aircraft Carrier
	var battleship = ['1','2','3','4'];
	var cruiser = ['1','2','3'];
	var destroyer = ['1','2','3'];
	var frigate = ['1','2'];


	return {




	};



})();

	// create a Counter that will end in lose state if == 0
		//this will be temporary


var placeShip = function(xlat, ylon, xlat2, ylon2, shipArray) {
	if (((xlat == xlat2) || (ylon == ylon2)) && (shipArray.length >= Math.abs(xlat - xlat2) && (shipArray.length >= Math.abs(ylon - ylon2)))) {

	};
}




// HIDES ships on Guess board (player 2 board?)
HideShips = (function(){
	var aircraftCarrier = ['1','2','3','4','5'];
	var battleship = ['1','2','3','4'];
	var cruiser = ['1','2','3'];
	var destroyer = ['1','2','3'];
	var frigate = ['1','2'];

});


// Make divs clickable - compare to ship locations
	//On click, div checks ship location stats (stored in private module) to see if miss or hit, updates "empty" class on clicked div (use 'this?')



















