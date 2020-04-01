var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
	res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
	res.send("Goodbye!");	
});

// "/dog" => "WOOF!"
app.get("/dog", function(req, res) {
	res.send("WOOF!");	
});

// "/cat" => "MEOW!"
app.get("/cat", function(req, res) {
	res.send("MEOW!");
});
// reddit'ish routes
app.get("/r/:subredditName/comments/:id/:title", function (req, res) {
	var subredditName = req.params.subredditName;
	var id = req.params.id;
	var title = req.params.title;
	var respondMsg = "You are viewing the " + subredditName + " subreddit.</br>";
	respondMsg += "You are viewing the comments page of post #" + id + ".</br>";
	respondMsg += "The title of the post is " + title + ".</br>";
	res.send(respondMsg);
});


// any other routes that is not defined ABOVE => "Pate NOT FOUND!"
// Notice: order of routes matters!
app.get("/*", function(req, res) {
	res.send("Page NOT FOUND!")
});

// Tell Express to listen for requests (i.e. start the server)
// Notice: PORT and IP are environment variables, determined by the process
app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server listening on port " + process.env.PORT);
}); 