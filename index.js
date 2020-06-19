var http = require("http");
var stream = require("stream");

http.createServer(function (req, res) {
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("<div style='color:red'>Hello World</div>");
    // setTimeout(()=>{
    //     res.write("23212")
    //     res.end();
    // },5000)
    
    res.writeHead(200, {'content-type':'image/png'});
    var stream =stream.createReadStream('image.png');

    stream.on('data',(data)=>{
        res.write(data)
    })
    stream.on('end',()=>{
        res.end()
    })

}).listen(8888);