



// When the factButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of facts in the booFactsArray)
	var number = Math.floor((Math.random() * fishFactsArray.length));
// We display the fact from the booFactsArray that is in the random position we just generated.
	$("#factText").text(fishFactsArray[number])
})

// This array holds all of our Boo facts!
var fishFactsArray = ["Morning is great time to land a pig", "Bass spawn in the spring", "Make sure to set the hook before you reel it in", "Great time to catch a bass? Right after a rain storm", "Make sure to catch and release!" ]
