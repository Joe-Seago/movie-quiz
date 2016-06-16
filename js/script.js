// Requires the user to answer at least five questions

// Shows each question one at a time

// Tells the user each question's number and how many questions remain

// Prevents the user from skipping questions

// Gives the user some way to answer each question

// Compares the user's answer, and the correct answer to determine a score

// Displays the user's final score once all questions have been answered

// Allows the user to start a new game once all questions have been answered

// Uses objects to represent the questions and answers

var score = 0;
var qN = 0;

$(document).ready(function() {

	var movieQs = [
		{
			question: 'What film is the character Maximus from?',
			answers: ['Matrix', 'Toy Story', 'Gladiator', 'Lord of the Rings'],
			correct: 'Gladiator',
			number: 1
		}, 
		{
			question: 'Which character is "The One" in The Matrix?',
			answers: ['Morpheus', 'Agent Smith', 'Maximus', 'Neo'],
			correct: 'Neo',
			number: 2
		}, 
		{
			question: 'Which character is NOT in Toy Story?',
			answers: ['Buzz Lightyear', 'Fuzzy', 'Woody', 'Slinky'],
			correct: 'Fuzzy',
			number: 3
		}, 
		{
			question: 'Which actor played the character Luke Skywalker in Star Wars?',
			answers: ['Harrison Ford', 'James Earl Jones', 'Mark Hamill', 'Steven Seagal'],
			correct: 'Mark Hamill',
			number: 4
		}, 
		{
			question: 'What street did the character Rachel Dawes die on in Batman: Dark Knight?',
			answers: ['Avenue X at Cicero', '1007 Mountain Drive', '250 52nd Street', '401 North Cicero Avenue'],
			correct: '250 52nd Street',
			number: 5,
		}
	];


	movieLoop(movieQs);

	// Upon clicking submit
	$('.submitButton').click(function() {
		// If our choice value is correct
		if ($('input[name="radioSize"]:checked').val() === movieQs[qN].correct) {
			score++;
			console.log("right!");
			console.log(movieQs[qN].correct);
		} else {
			console.log("you suck!");
		}
			// Move to next question

		qN++;
		if (qN > 4) {
			$('.numberBoard').text("You got " + score + " points total");
			$('.submit').hide();
			$('.quiz').hide();
		} else {

			$('.choices ul').empty();

			movieLoop(movieQs);
		}


	})

})

function movieLoop (movieQs) {
	$('.query').text(movieQs[qN].question);
	for (var i = 0; i < movieQs[qN].answers.length; i++) {
		$('.choices ul').append('<li><input type = "radio" name = "radioSize" value = "' + movieQs[qN].answers[i] + '">' + movieQs[qN].answers[i] + '</li>');
		$('.numberBoard').html('<p>You are on question no. ' + movieQs[qN].number + '</p>');
		$('.numberBoard').append(movieQs[movieQs.length - 1].number - movieQs[qN].number + ' questions left');
	}

}


