var http = require("http");
var needrequest = function(req,res){
	if(req.url=="/home")
		res.end("ghar jana hai");
	else if(req.url=="/office")
		res.end("office nahi jana hai");
	else
		res.end("ek din mar jana hai");
}
var server = http.createServer(needrequest);
server.listen(4000);