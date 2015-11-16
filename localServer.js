var http = require("http");
var fs = require("fs");
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
today = mm+'/'+dd+'/'+yyyy;
var requestHandler = function(req,res){
	console.log(req.url);
	if(req.method=="POST"){
		req.on('data',function(data){
			data = data.toString();
			data = data.replace(/&/," ")
			var fileData = fs.readFileSync("./guestBook.html","UTF-8").split("\n");
			console.log(data,today,fileData);
			var writtenComment = fileData.splice(32,0,data+today+"<br>");
			console.log(writtenComment.join("\n"),fileData.splice(32,0,data+today+"<br>").join("\n"));
			res.write(fi)

		})
	}
	req.url=='/'?res.end(fs.readFileSync("./index.html"))
	:res.end(fs.readFileSync('.'+req.url));


};
var server = http.createServer(requestHandler);
server.listen(8000);