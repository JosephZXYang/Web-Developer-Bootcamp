var express = require("express");
var app = express();

app.use(express.static("public")); // Tell express to search the public folder
app.set("view engine", "ejs"); // Set default render file type to ejs

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
	var thing = req.params.thing;
	res.render("love", {
		thingVar: thing
	});
})

app.get("/posts", function(req, res) {
	var posts = [
		{title: "Post 1", author: "John Doe"}, 
		{title: "Post 2", author: "Jane Doe"}, 
		{title: "Post 3", author: "Son of The Doe's"}, 
		{title: "Post 4", author: "Daughter of The Doe's"}
	];
	res.render("posts.ejs", {posts: posts});
});

// Start the server
app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server is listening on port " + process.env.PORT);
});