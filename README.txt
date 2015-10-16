This is a version of the classic game BATTLESHIP. This will develop in three parts. This README will detail the user requirements of each part.

Style Guide:

	When to use JQuery:
		While JQuery can easily add functionality to the program that would otherwise be taxing to code, I will refrain from using it in most cases for the sake of my own familiarity with Javascript.

		Expect JQeury to be used when adding event listeners, especially those that require all elements of a particular type or class to become clickable or "hoverable."


Coding Process:

	1. Be able to guess generated ships
		Ships

		Create the board >>> Guess Array
			Matrix of arrays
				10x10
			Create artistic divs to display sea and ships in board spaces

		Designating Ships and Spaces
			Ship Class
				ex. class="destroyer" or class="D"
			Hit Class
				class="hit" or class="miss"
					Only used for when space is guessed
			Empty tiles
				class="empty" vs battleships
					might be class="filled" vs simply ship class;
						Just as boolean to state if it's filled or not when checking for hits/misses and/or placement of ships during setup			

		Place random ships on Guess Array
			Use randomizer to determine which Space they will be place upon


			Place each ship on the board one at a time
				Ships cannot overlap
				Ship squares must connect in a row or column
				Ships cannot continue off the map
				Ships CAN be placed next to eachother
					Program should only look for same class ships in line, not simply that there ARE ships

			Ship orientation
				Must be allowed to align ship spaces vertically OR horizontally
				Must randomize orientation of ships too
					Boolean variable?

			Display ship key
				
				Aircraft Carrier (5x1)
				Battleship (4x1)
				Cruiser (3x1)
				Destroyer (3x1)
				Frigate (2x1) (or Submarine?)
					May use Frigate to maintain ABCD,F class names
	Win state
		Establish a counter ticking down until your ships are destroyed
			If counter === 0, loss
			If Enemy Ships guessed === win

	Reset
		must have button that enables resets



		Notes:
			Use <div data-position="" (v?) to determine ?>





	2. Be able to set up your own board:

		Allow player to follow Ship Placement Rules
			Places 1 ship at a time
				Select which ship goes first by changing the Ships displayed in the Key into buttons
					Will reset Ship Spaces when clicked,
				To end placement phase, have ready button to finalize placement

		This mode will be useful when bug testing
			set up the board and then play your board.


	3. Computer player
	Placing ships

	Guessing


Sources:
	http://en.battleship-game.org/
		Use of all JS, help primarily with understanding how to force Ships to continue to proper adjacent Squares


Bonuses:
	Salvo: Fire as many shots as you have ships remaining per turn
	2 Players: Two arrays, players take turns
	Online: 2 Players (or more??) online
	Add the 1-10 and A-J row and column identifiers (purely aesthetic)
