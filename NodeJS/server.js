var http = require("http");
var fs = require("fs");
var os = require("os");
var ip = require("ip");

var server = http.createServer(function(req, res){
    if (req.url === "/"){
        fs.readFile("./public/index.html", "UTF-8", function(err, body){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(body);
        })
    }
    else if (req.url.match("/sysinfo")){
        myHostName=os.hostname();
        var cpuCores=os.cpus();
        var cpuCount = os.cpus().length;
        
        var totalMemory = os.totalmem();
        var totalMemoryMB = totalMemory/1024;
        totalMemoryMB = Math.floor(totalMemoryMB);
        totalMemoryMB = totalMemoryMB%1024;
        
        var freeMemory = os.freemem();
        var freeMemoryMB = freeMemory/1024;
        freeMemoryMB = Math.floor(freeMemoryMB);
        freeMemoryMB = freeMemoryMB%1024;
        
        var ut_sec = os.uptime(); 
        var ut_min = ut_sec/60; 
        var ut_hour = ut_min/60; 
        
        ut_sec = Math.floor(ut_sec); 
        ut_min = Math.floor(ut_min); 
        ut_hour = Math.floor(ut_hour); 
        
        ut_hour = ut_hour%60; 
        ut_min = ut_min%60; 
        ut_sec = ut_sec%60; 
        
        var sUpTime = (ut_hour + " Hour(s) " 
        + ut_min + " minute(s) and " 
        + ut_sec + " second(s)"); 
        
        html=`
        <!DOCTYPE html>
            <html>
                <head>
                    <title>System Information</title>
                </head>
            <body>
                <p>Hostname: ${myHostName}</p>
                <p>IP: ${ip.address()}</p>
                <p>Server Uptime: ${sUpTime}</p>
                <p>Total Memory: ${totalMemoryMB} MB</p>
                <p>Free Memory: ${freeMemoryMB} MB</p>
                <p>Number of CPU's: ${cpuCount}</p>
            </body>
            </html>
        `
    res.writeHead(200, {"Content-Type":"text/html  "});
    res.end(html);
    }
    else {
        res.writeHead(404, {"Content-Type":"text/html"});
        res.end(`404 File not found at ${req.url}`);
    }
    //res.writeHead(200, {"Content-type": "text/html"});
    //res.end();
});

server.listen(3000);

console.log("Server listening on port 3000");