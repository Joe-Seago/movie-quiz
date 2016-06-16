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

$(document).ready(function() {

	var movieQuestions = [
		// Question 1
		{
			question: 'What film is the character Maximus from?',
			answers: ['Matrix', 'Toy Story', 'Gladiator', 'Lord of the Rings'],
			correct: 'Gladiator'
		}, 
		// Question 2
		{
			question: 'Which character is "The One" in The Matrix?',
			answers: ['Morpheus', 'Agent Smith', 'Maximus', 'Neo'],
			correct: 'Neo'
		}, 
		// Question 3
		{
			question: 'Which character is NOT in Toy Story?',
			answers: ['Buzz Lightyear', 'Fuzzy', 'Woody', 'Slinky'],
			correct: 'Fuzzy'
		}, 
		// Question 4
		{
			question: 'Which actor played the character Luke Skywalker in Star Wars?',
			answers: ['Harrison Ford', 'James Earl Jones', 'Mark Hamill', 'Steven Seagal'],
			correct: 'Mark Hamill'
		}, 
		// Question 5
		{
			question: 'What street did the character Rachel Dawes die on in Batman: Dark Knight?',
			answers: ['Avenue X at Cicero', '1007 Mountain Drive', '250 52nd Street', '401 North Cicero Avenue'],
			correct: '250 52nd Street'
		}
	];

	$('.query').append('<p>' + movieQuestions[0].question + '</p>');

	for (var i = 0; i < movieQuestions[0].answers.length; i++) {
		console.log(movieQuestions[0].answers[i])
		$('.choices ul').append('<li><input type = "radio" name = "radioSize" value = "' + movieQuestions[0].answers[i] + '">' + movieQuestions[0].answers[i] + '</li>');
	}

	// Upon clicking submit
	$('.submitButton').click(function () {

		// If our choice value is correct
		if ($('input[name="radioSize"]:checked.value() === "Gladiator"')) {
			console.log("right!");
		}
			//Add to the score

			// Move to next question
	})
		

		


})

