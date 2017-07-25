var path = require('path'); 

module.exports = function(app) {
	app.get("/questions", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/questions.html"));
	});

	// why do we have to implement app.use instead of app.get("/", function()) ?
	app.use(function(req, res) {
	    res.sendFile(path.join(__dirname, "/../public/index.html"));
	});
}