/* ============================================================================ */
// Packages
var express    = require("express"),
	mongoose   = require("mongoose"),
	bodyParser = require("body-parser"),
	app 	   = express();


/* ============================================================================ */
// APP config
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost/restful_blog_app", 
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	});


/* ============================================================================ */
// MONGOOSE/MODEL config
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {
				type: Date, 
				default: Date.now
			}
})

var Blog = mongoose.model("Blog", blogSchema);


/* ============================================================================ */
// RESTful routes

// INDEX route 
app.get("/blogs", function(req, res) {
	Blog.find({}, function(err, blogs) {
		if (err) {
			console.log(err);
		} else {
			res.render("index", {blogs: blogs});
		}
	})
})


app.listen(process.env.PORT, process.env.IP, function () {
	console.log("SERVER running on PORT " + process.env.PORT + "!!!");
});