// Require express framework
var express = require("express");
var app = express();

// Routes

app.get("/", function (req, res) {
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/pig", function (req, res) {
	res.send("The pig says 'Oink'");
});

app.get("/speak/cow", function (req, res) {
	res.send("The cow says 'Moo'");
});

app.get("/speak/dog", function (req, res) {
	res.send("The dog says 'Woof Woof!'");
});

app.get("/repeat/:repeatContent/:repeatTimes", function (req, res) {
	var repeatContent = req.params.repeatContent;
	var repeatTimes = Number(req.params.repeatTimes);
	var msg = "";
	for (var i = 1; i < repeatTimes; i ++) {
		msg += repeatContent + " ";
	}
	msg += repeatContent;
	res.send(msg);
});

app.get("/*", function(req, res) {
	res.send("Sorry, page not found...What are you doing with your life?");
});

// Start the server
app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server listening on port " + process.env.PORT);
}); 