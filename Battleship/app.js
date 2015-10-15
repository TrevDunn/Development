// Battleship

//standar window onload to-do list
window.onload = function () {
	console.log('Loaded up.');

	//Start button to generate board. Will refactor later to decide how many players (comp vs 2p)
	document.querySelector('button#game-starter').addEventListener('click', (function() {
		 drainOcean();
		 buildOcean();

	}));

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






// constructor function that makes divs for each Board Space
// var BuildSpaces = function(){

// }

// For loop to utilize BuildSpaces
















