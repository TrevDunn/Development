// Battleship

//standar window onload to-do list
window.onload = function () {
	console.log('Loaded up.');

	//Start button to generate board. Will refactor later to decide how many players (comp vs 2p)
	$('button#game-starter').click(function(){
		GameModule.drainOcean();
		GameModule.buildOcean();
		GameModule.clearShips();
		GameModule.generateShipA();
		GameModule.generateShipB();
		GameModule.generateShipC();
		GameModule.generateShipD();
		GameModule.generateShipF();
	});

		// Turns all Divs with 'empty' class into clickable, guessable buttons.


	$('#place-aircraft-carrier').eq(0).click(function(){
		console.log(this);

	});
};

<<<<<<< HEAD
	$('div.empty').on("click",(function() {
=======
	$('.empty').on("click",(function() {
>>>>>>> master
		console.log(this);
		GameModule.divGuess();
	}));


// Ship Placement logic - Have to do amost same thing for each type of ship? Can it be dynamic? Should it be?

//Initialize placement of Aircraft Carrier




// Computer Ship placement
	// will utilize the module's hidden array so as to hide ship locations from Player1


	

var GameModule = function(){
	var compCordsA = ['1','2','3','4','5'];		//Aircraft Carrier
	var compCordsB = ['1','2','3','4'];			//Battleship
	var compCordsC = ['1','2','3'];				//Cruiser
	var compCordsD = ['1','2','3'];				//Destroyer
	var compCordsF = ['1','2'];					//Frigate
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

	var computerBoard = [	['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
							['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
							['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
							['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
							['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
							['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
							['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
							['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
							['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',],
							['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp',]]

	return {

		// First attempt at div constructor loop for spaces; creates board inside game-board div
		buildOcean : function(){

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
		},

		//Clear the grid if game is restarted
		drainOcean : function() {
				var tempBoard = document.querySelector('div.game-board');

			if (tempBoard) {
				var tempContainer = document.getElementById('container');
				console.log(tempContainer, tempBoard);
				tempContainer.removeChild(tempBoard);
				
			}
		},
		//places Aircraft Carrier
		generateShipA : function() {
			var finalize = false;
			while (finalize === false) {
				var orient = Math.round(Math.random());
				var xCord = Math.floor(Math.random() * 10);
				var yCord = Math.floor(Math.random() * 10);
				console.log('Setting A.');
				if ((orient === 1) && (xCord !== 10) && (yCord !== 10) && (computerBoard[yCord][xCord] == '&nbsp')) {
					var checkCount = 0;
					//Check X axis spaces (to the right) for all 'empty' spaces
					for (var i = 0; i < compCordsA.length; i++) {
						if ((xCord+i) <= 9) {
							if (computerBoard[yCord][xCord+i] === '&nbsp') {
								checkCount += 1;
								// console.log(computerBoard[yCord][xCord+i]);
							};
							if (compCordsA.length === checkCount) {
								for (var k = 0; k < compCordsA.length; k++) {
									computerBoard[yCord][xCord+k] = 'A';
								};
								finalize = true;
							};
						};
						
					};					
				} else if ((orient === 0) && (xCord !== 10) && (yCord !== 10) && (computerBoard[yCord][xCord] == '&nbsp')) {
					var checkCount = 0;
					//Check Y axis spaces (to the right) for all 'empty' spaces
					for (var i = 0; i < compCordsA.length; i++) {
						if ((yCord+i) <= 9) {
							if (computerBoard[yCord+i][xCord] === '&nbsp') {
								checkCount += 1;
								// console.log(computerBoard[yCord+i][xCord]);
							};
							if (compCordsA.length === checkCount) {
								for (var k = 0; k < compCordsA.length; k++) {
									computerBoard[yCord+k][xCord] = 'A';
								};
								finalize = true;
							};
						};
					};
				};
			};
		},
		generateShipB : function() {
			var finalize = false;
			while (finalize === false) {
				var orient = Math.round(Math.random());
				var xCord = Math.floor(Math.random() * 10);
				var yCord = Math.floor(Math.random() * 10);
				console.log('Setting B.');
				if ((orient === 1) && (xCord !== 10) && (yCord !== 10) && (computerBoard[yCord][xCord] == '&nbsp')) {
					var checkCount = 0;
					//Check X axis spaces (to the right) for all 'empty' spaces
					for (var i = 0; i < compCordsB.length; i++) {
						if ((xCord+i) <= 9) {
							if (computerBoard[yCord][xCord+i] === '&nbsp') {
								checkCount += 1;
								// console.log(computerBoard[yCord][xCord+i]);
							};
							if (compCordsB.length === checkCount) {
								for (var k = 0; k < compCordsB.length; k++) {
									computerBoard[yCord][xCord+k] = 'B';
								};
								finalize = true;
							};
						};
					};					
				} else if ((orient === 0) && (xCord !== 10) && (yCord !== 10) && (computerBoard[yCord][xCord] == '&nbsp')) {
					var checkCount = 0;
					//Check Y axis spaces (to the right) for all 'empty' spaces
					for (var i = 0; i < compCordsB.length; i++) {
						if ((yCord+i) <= 9) {
							if (computerBoard[yCord+i][xCord] === '&nbsp') {
								checkCount += 1;
								// console.log(computerBoard[yCord+i][xCord]);
							};
							if (compCordsB.length === checkCount) {
								for (var k = 0; k < compCordsB.length; k++) {
									computerBoard[yCord+k][xCord] = 'B';
								};
								finalize = true;
							};
						};
					};
				};
			};
		},
		generateShipC : function() {
			var finalize = false;
			while (finalize === false) {
				var orient = Math.round(Math.random());
				var xCord = Math.floor(Math.random() * 10);
				var yCord = Math.floor(Math.random() * 10);
				console.log('Setting C.');
				if ((orient === 1) && (xCord !== 10) && (yCord !== 10) && (computerBoard[yCord][xCord] == '&nbsp')) {
					var checkCount = 0;
					//Check X axis spaces (to the right) for all 'empty' spaces
					for (var i = 0; i < compCordsC.length; i++) {
						if ((xCord+i) <= 9) {
							if (computerBoard[yCord][xCord+i] === '&nbsp') {
								checkCount += 1;
								// console.log(computerBoard[yCord][xCord+i]);
							};
							if (compCordsC.length === checkCount) {
								for (var k = 0; k < compCordsC.length; k++) {
									computerBoard[yCord][xCord+k] = 'C';
								};
								finalize = true;
							};
						};
					};					
				} else if ((orient === 0) && (xCord !== 10) && (yCord !== 10) && (computerBoard[yCord][xCord] == '&nbsp')) {
					var checkCount = 0;
					//Check Y axis spaces (to the right) for all 'empty' spaces
					for (var i = 0; i < compCordsC.length; i++) {
						if ((yCord+i) <= 9) {
							if (computerBoard[yCord+i][xCord] === '&nbsp') {
								checkCount += 1;
								// console.log(computerBoard[yCord+i][xCord]);
							};
							if (compCordsC.length === checkCount) {
								for (var k = 0; k < compCordsC.length; k++) {
									computerBoard[yCord+k][xCord] = 'C';
								};
								finalize = true;
							};
						};
					};
				};
			};
		},
		generateShipD : function() {
			var finalize = false;
			while (finalize === false) {
				var orient = Math.round(Math.random());
				var xCord = Math.floor(Math.random() * 10);
				var yCord = Math.floor(Math.random() * 10);
				console.log('Setting D.');
				if ((orient === 1) && (xCord !== 10) && (yCord !== 10) && (computerBoard[yCord][xCord] == '&nbsp')) {
					var checkCount = 0;
					//Check X axis spaces (to the right) for all 'empty' spaces
					for (var i = 0; i < compCordsD.length; i++) {
						if ((xCord+i) <= 9) {
							if (computerBoard[yCord][xCord+i] === '&nbsp') {
								checkCount += 1;
								// console.log(computerBoard[yCord][xCord+i]);
							};
							if (compCordsD.length === checkCount) {
								for (var k = 0; k < compCordsD.length; k++) {
									computerBoard[yCord][xCord+k] = 'D';
								};
								finalize = true;
							};
						};
					};					
				} else if ((orient === 0) && (xCord !== 10) && (yCord !== 10) && (computerBoard[yCord][xCord] == '&nbsp')) {
					var checkCount = 0;
					//Check Y axis spaces (to the right) for all 'empty' spaces
					for (var i = 0; i < compCordsD.length; i++) {
						if ((yCord+i) <= 9) {
							if (computerBoard[yCord+i][xCord] === '&nbsp') {
								checkCount += 1;
								// console.log(computerBoard[yCord+i][xCord]);
							};
							if (compCordsD.length === checkCount) {
								for (var k = 0; k < compCordsD.length; k++) {
									computerBoard[yCord+k][xCord] = 'D';
								};
								finalize = true;
							};
						};
					};
				};
			};
		},
		generateShipF : function() {
			var finalize = false;
			while (finalize === false) {
				var orient = Math.round(Math.random());
				var xCord = Math.floor(Math.random() * 10);
				var yCord = Math.floor(Math.random() * 10);
				console.log('Setting F.');
				if ((orient === 1) && (xCord !== 10) && (yCord !== 10) && (computerBoard[yCord][xCord] == '&nbsp')) {
					var checkCount = 0;
					//Check X axis spaces (to the right) for all 'empty' spaces
					for (var i = 0; i < compCordsF.length; i++) {
						if ((xCord+i) <= 9) {
							if (computerBoard[yCord][xCord+i] === '&nbsp') {
								checkCount += 1;
								// console.log(computerBoard[yCord][xCord+i]);
							};
							if (compCordsF.length === checkCount) {
								for (var k = 0; k < compCordsF.length; k++) {
									computerBoard[yCord][xCord+k] = 'F';
								};
								finalize = true;
							};
						};
					};					
				} else if ((orient === 0) && (xCord !== 10) && (yCord !== 10) && (computerBoard[yCord][xCord] == '&nbsp')) {
					var checkCount = 0;
					//Check Y axis spaces (to the right) for all 'empty' spaces
					for (var i = 0; i < compCordsF.length; i++) {
						if ((yCord+i) <= 9) {
							if (computerBoard[yCord+i][xCord] === '&nbsp') {
								checkCount += 1;
								// console.log(computerBoard[yCord+i][xCord]);
							};
							if (compCordsF.length === checkCount) {
								for (var k = 0; k < compCordsF.length; k++) {
									computerBoard[yCord+k][xCord] = 'F';
								};
								finalize = true;
							};
						};
					};
				};
			};
		},
		clearShips : function() {
			for (var i = 0; i < computerBoard.length; i++) {
				for (var j = 0; j < computerBoard.length; j++) {
					computerBoard[i][j] = '&nbsp';
				};
				
			};
		},
		divGuess : function() {
			console.log(this);
			// if (this.) {

			// } else{

			// };
		},
	}; // end return
}();


// var placeShip = function(xlat, ylon, xlat2, ylon2, shipArray) {
// 	if (((xlat == xlat2) || (ylon == ylon2)) && (shipArray.length >= Math.abs(xlat - xlat2) && (shipArray.length >= Math.abs(ylon - ylon2)))) {

// 	};
// }




// // HIDES ships on Guess board (player 2 board?)
// HideShips = (function(){
// 	var aircraftCarrier = ['1','2','3','4','5'];
// 	var battleship = ['1','2','3','4'];
// 	var cruiser = ['1','2','3'];
// 	var destroyer = ['1','2','3'];
// 	var frigate = ['1','2'];

// });


// Make divs clickable - compare to ship locations
	//On click, div checks ship location stats (stored in private module) to see if miss or hit, updates "empty" class on clicked div (use 'this?')


















