'use strict'

// Allows the user to start a new game once all questions have been answered



// SCORE
var score = 0;

// QUESTION NUMBER
var qN = 0;

$(document).ready(function() {

	// MOVIE QUESTIONS OBJECT
	var movieQs = [
		{
			question: 'What film is the character Maximus from?',
			answers: ['Matrix', 'Toy Story', 'Gladiator', 'Lord of the Rings'],
			correct: 'Gladiator'
		}, 
		{
			question: 'Which character is "The One" in The Matrix?',
			answers: ['Morpheus', 'Agent Smith', 'Maximus', 'Neo'],
			correct: 'Neo'
		}, 
		{
			question: 'Which character is NOT in Toy Story?',
			answers: ['Buzz Lightyear', 'Fuzzy', 'Woody', 'Slinky'],
			correct: 'Fuzzy'
		}, 
		{
			question: 'Which actor played the character Luke Skywalker in Star Wars?',
			answers: ['Harrison Ford', 'James Earl Jones', 'Mark Hamill', 'Steven Seagal'],
			correct: 'Mark Hamill'
		}, 
		{
			question: 'What street did the character Rachel Dawes die on in Batman: Dark Knight?',
			answers: ['Avenue X at Cicero', '1007 Mountain Drive', '250 52nd Street', '401 North Cicero Avenue'],
			correct: '250 52nd Street'
		}
	];

	// LOADED WHEN PAGE STARTS
	movieLoop(movieQs);

	// EVENT UPON CLICKING BUTTONS
	$('.submitButton').click(function() {
		
		// IF USER MAKES THE CHOICE
		if ($('input').is(':checked')) {
			// IF USER MAKES [THE RIGHT] CHOICE
			if ($('input[name="radioSize"]:checked').val() === movieQs[qN].correct) {
				score++;
			}
			// ADD 1 TO QUESTION NUMBER(PROCEED NEXT)
			qN++;

			// DISPLAY FINAL SCORE WHEN YOU REACH TO THE END
			if (qN > 4) {
				$('.numberBoard').text("You got " + score + " points total");
				$('.submit').hide();
				$('.quiz').hide();
			} 
			// CLEARS CONTENT AND SHOW NEXT QUESTION
			else {
				$('.choices ul').empty();
				movieLoop(movieQs);
			}
		}
		// PREVENTS THE USER FROM SKIPPING WITHOUT SELECT
		// return;		
	})
})

function movieLoop (movieQs) {
	// DISPLAY QUESTIONS
	$('.query').text(movieQs[qN].question);


	for (var i = 0; i < movieQs[qN].answers.length; i++) {
		// DISPLAY CHOICES
		$('.choices ul').append('<li><input type = "radio" name = "radioSize" value = "' + movieQs[qN].answers[i] + '">' + movieQs[qN].answers[i] + '</li>');
		// DISPLAY QUESTION NUMBER
		$('.numberBoard').html('<p>You are on question no. ' + movieQs[qN][i+1] + '</p>');
		// DISPLAY HOW MANY LEFT
		$('.numberBoard').append(movieQs.length - (qN + 1) + ' questions left');
	}

}


