var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("home");
});

// The default friends list to start with
var friendsList = ["Tim", "Gordon", "Reese", "Dennis", "Joe", "Manson"];

app.get("/friends", function(req, res) {
	res.render("friends", {
		friends: friendsList
	})
});

// Submit a post request to add a new friend to the list
app.post("/addFriend", function(req, res) {
	var newFriendName = req.body.name;
	friendsList.push(newFriendName);
	res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server started on port " + process.env.PORT);
})