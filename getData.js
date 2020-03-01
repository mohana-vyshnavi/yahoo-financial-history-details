var app = require('express');
var router = app.Router();

var unirest = require("unirest");

router.get('/getData', function (resp, requ) {
	var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-histories");

	req.query({
		"region": "US",
		"lang": "en",
		"symbol": "NBEV",
		"from": "1231866000",
		"to": "1547524844",
		"events": "div",
		"interval": "1d"
	});

	req.headers({
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "12c969ef39msh2f1457a5fad281dp1824c0jsn6327fc38b570"
	});


	req.end(function (res) {
		if (res.error) throw new Error(res.error);
		resp.send(res.body)
		console.log(res.body);
	});
});
module.exports = router;