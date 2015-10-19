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

	$('#empty').on("hover",(function() {
		console.log(this);
	}));
 

// Ship Placement logic - Have to do amost same thing for each type of ship? Can it be dynamic? Should it be?

//Initialize placement of Aircraft Carrier




// Computer Ship placement
	// will utilize the module's hidden array so as to hide ship locations from Player1


	

var GameModule = function(){
	var compCordsA = [0,1,2,2,4];		//Aircraft Carrier
	var compCordsB = [0,1,2,2];			//Battleship
	var compCordsC = [0,1,2];				//Cruiser
	var compCordsD = [0,1,2];				//Destroyer
	var compCordsF = [0,1];					//Frigate
	var countdown = 50;
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

			//creates a countdown timer
			var tempTimer = document.createElement('div');
			tempTimer.id = 'timer';
			tempTimer.innerHTML = (':' + countdown)
			document.querySelector('#container').appendChild(tempTimer);



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
					tempSquares.id = 'empty';
					tempSquares.classList.add('square-space');
					tempSquares.setAttribute('x-lat', i);
					tempSquares.setAttribute('y-lon', j);
					tempSquares.innerHTML = oceanBoardArray[i][j];
					tempSquares.addEventListener('click', (function(){

						//turns divs to buttons
						if ((this.id === 'empty') && (computerBoard[parseInt(this.getAttribute('y-lon'))][parseInt(this.getAttribute('x-lat'))] != '&nbsp')) {
							this.id = 'hit';
							this.innerHTML = 'X';
							var coordinates = computerBoard[parseInt(this.getAttribute('y-lon'))][parseInt(this.getAttribute('x-lat'))]
							switch (coordinates) {
								case 'A':
									compCordsA[0]++;
									break;
								case 'B':
									compCordsB[0]++;
									break;
								case 'C':
									compCordsC[0]++;
									break;
								case 'D':
									compCordsD[0]++;
									break;
								case 'F':
									compCordsF[0]++;
									break;
								default:
									console.log('Something went wrong.')
							};
							GameModule.hitCheck();
							GameModule.winState();							
						} else if (this.id === 'empty') {
							countdown--;
							tempTimer.innerHTML = (':' + countdown);
							this.id = 'miss';
							this.innerHTML = '•';
							GameModule.loseState();
						};

					}));
						//Use this random color board for win state - make function celebrationBoard on a loop
					 //tempSquares.setAttribute('style', 'background:rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) +',' + (Math.floor(Math.random() * 256)) + ');');
					tempRow.appendChild(tempSquares);
					//console.log(oceanBoardArray[i][j]);
				};
			};
		},

		//Clear the grid if game is restarted
		drainOcean : function() {
				var tempBoard = document.querySelector('div.game-board');

			if (tempBoard) {
				var tempContainer = document.getElementById('container');
				var tempTimer = document.getElementById('timer');
				console.log(tempContainer, tempBoard);
				tempContainer.removeChild(tempBoard);
				tempContainer.removeChild(tempTimer);
				
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
			compCordsA = [0,1,2,2,4];		//Aircraft Carrier
			compCordsB = [0,1,2,2];			//Battleship
			compCordsC = [0,1,2];			//Cruiser
			compCordsD = [0,1,2];			//Destroyer
			compCordsF = [0,1];				//Frigate

			if (countdown != 50) {
				for (var i = 0; 0 < document.querySelectorAll('#boat-hits').length; i++) {
					var temp = document.querySelector('#boat-hits');
					temp.id = '';
				};
			};
			countdown = 50;
		},
		hitCheck : function() {
			if (compCordsA.length == compCordsA[0] && (compCordsA[1] !== 0)) {
				compCordsA[1]--;
				for (var i = 0; i < compCordsA.length; i++) {
					var temp = document.querySelectorAll('.boatA')[i];
					temp.id = 'boat-hits';
				};
			};
			if (compCordsB.length == compCordsB[0] && (compCordsB[1] !== 0)) {
				compCordsB[1]--;
				for (var i = 0; i < compCordsB.length; i++) {
					var temp = document.querySelectorAll('.boatB')[i];
					temp.id = 'boat-hits';
				};
				
			};
			if (compCordsC.length == compCordsC[0] && (compCordsC[1] !== 0)) {
				compCordsC[1]--;
				for (var i = 0; i < compCordsC.length; i++) {
					var temp = document.querySelectorAll('.boatC')[i];
					temp.id = 'boat-hits';
				};
				
			};
			if (compCordsD.length == compCordsD[0] && (compCordsD[1] !== 0)) {
				compCordsD[1]--;
				for (var i = 0; i < compCordsD.length; i++) {
					var temp = document.querySelectorAll('.boatD')[i];
					temp.id = 'boat-hits';
				};
				
			};
			if (compCordsF.length == compCordsF[0] && (compCordsF[1] !== 0)) {
				compCordsF[1]--;
				for (var i = 0; i < compCordsF.length; i++) {
					var temp = document.querySelectorAll('.boatF')[i];
					temp.id = 'boat-hits';
				};
				
			};


		},
		loseState : function() {
			if (countdown == 0) {
				alert('Nuclear Launch Detected.\nYou\'ve run out of time, commander.')
				clearShips();
				clearShips();
				GameModule.drainOcean();
				GameModule.buildOcean();
			}
		},
		winState : function() {
			if (document.querySelectorAll('#hit').length == 17) {
				prompt('We are victorious!.\nYou sunk their battleships!')
				GameModule.fireworks();
				clearShips();
				clearShips();
				GameModule.drainOcean();
				GameModule.buildOcean();
			}
		},
		fireworks : function() {
			var tempSquares = document.querySelectorAll('.square-space');
			var flashBoxes = setInterval(tempSquares.setAttribute('style', 'background:rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) +',' + (Math.floor(Math.random() * 256)) + ');'), 50);
		}
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


















