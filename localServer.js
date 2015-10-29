var http = require("http");
var fs = require("fs");
var requestHandler = function(req,res){
	if(req.url=='/'){
	res.end(fs.readFileSync("./index.html"));
	}
	else{
		console.log(+req.url)
		var data = fs.readFileSync('.'+req.url)
	}
	res.end(data);
};
var server = http.createServer(requestHandler);
server.listen(8000);