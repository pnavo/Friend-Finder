var path = require('path'); 
var friendData = require('../data/friend.js')

module.exports = function(app) {
	app.get("/api/friends", function(req,res){
		res.json(friendData);
	}); 

	app.post("/api/friends", function(req,res) {
		var user = req.body 
		friendData.push(user)
		console.log(friendData)
	
		var nameArr = []; 
		var imgArr = [];
		var differenceArr = []; 
		var objectArr = []; 

		// console.log(user)

		var totalDifference = 0 
		for (var i = 0; i < friendData.length - 1 ; i++) {
			nameArr.push(friendData[i].name)
			imgArr.push(friendData[i].img)
			totalDifference = 0

			for (var j = 0 ; j < 10 ; j++) { 
				totalDifference += Math.abs(parseInt(user.answer[j]) - parseInt(friendData[i].answer[j]))
			}; 
			differenceArr.push(totalDifference)
		};
		console.log(nameArr)
		console.log(imgArr)
		console.log(differenceArr)

		for (var i = 0; i < nameArr.length; i++) {
		 	objectArr.push({"nameMatch": nameArr[i], "imgMatch": imgArr[i],  "answerMatch": differenceArr[i]})
		 }

		 objectArr.sort(function(a, b) {return a.answerMatch - b.answerMatch})
		 console.log(objectArr) 

		 res.json(objectArr[0])

	});
}