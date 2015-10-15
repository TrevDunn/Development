// Battleship

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



// First attempt at div constructor loop for spaces
var buildOcean = function(){
	for (var i = 0; i < oceanBoardArray.length; i++) {
		var tempRow = document.createElement('div');		
		tempRow.classList.add('latitude');
		tempRow.id = ('row' + i)  //Look up classList() use on MDN: Can we pass a variable (i) here? YES
		document.querySelector('div.game-board').appendChild(tempRow);

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

buildOcean();




// constructor function that makes divs for each Board Space
// var BuildSpaces = function(){

// }

// For loop to utilize BuildSpaces
















