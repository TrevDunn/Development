// Battleship

// Make board (not necessarily the guess or select board right now)
var oceanBoardArray = [	['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',]
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',]
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',]
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',]
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',]
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',]
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',]
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',]
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',]
						['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',]]



// First attempt at div constructor loop for spaces




var buildOcean = function(){
	for (var i = 0; i < oceanBoard.length; i++) {
		var tempRow = document.createElement('div');		
		tempRow.classList.add('x-cord' + i);  //Look up classList() use on MDN: Can we pass a variable (i) here?
		document.querySelector('div#game-board').appendChild(tempRow);
		for (var j = 0; j < oceanBoard[i].length; j++) {
			var tempSquares = document.createElement('div');
			tempSquares.className = 'empty';
			tempSquares.id = ('square' + oceanBoard[i][j]);
			tempRow.appendChild(tempSquares);
			console.log(oceanBoard[i][j]);
		};
	};
},




// constructor function that makes divs for each Board Space
var BuildSpaces = function(){

}

// For loop to utilize BuildSpaces
















