var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/results", function(req, res) {
	var query = req.query;
	var url = "http://omdbapi.com/?";
	
	url += "s=" + query.search;
	
	if (query.year.length != 0) {
		url += "&y=" + query.year;
	}
	
	if (query.type.length != 0) {
		url += "&type=" + query.type;
	}
	
	if (query.page.length != 0) {
		url += "&page=" + query.page;
	}
	
	url += "&apikey=thewdb";
	request(url, function(error, response, body) {
		if (!error & response.statusCode == 200) {
			var data = JSON.parse(body);
			console.log(data);
			if (data["Response"] == 'True') {
				res.render("results", {data: data,});
			}
			else {
				res.render("error");
			}
		}
	})
})

app.listen(process.env.PORT, process.env.IP, function () {
	console.log("Movie App has started on PORT " + process.env.PORT + "!!!");
});