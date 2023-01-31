var fs = require('fs')
var http = require('http')

// Escribí acá tu servidor
http.createServer(function (req, res) {
	if (req.url === '/arcoiris_doge') {
		res.writeHead(200, {'Content-Type': 'text/html'})
		var html = fs.readFileSync(__dirname + '/html/index.html')
        
        res.end(html)
	} else if (req.url === '/badboy_doge') {
		res.writeHead(200, {'Content-Type': 'text/html'})
		var html = fs.readFileSync(__dirname + '/html/index.html')
        res.end(html)
	}else if (req.url === '/code_doge') {
		res.writeHead(200, {'Content-Type': 'text/html'})
		var html = fs.readFileSync(__dirname + '/html/index.html')
        res.end(html)
	} else if (req.url === '/resaca_doge') {
		res.writeHead(200, {'Content-Type': 'text/html'})
		var html = fs.readFileSync(__dirname + '/html/index.html')
        res.end(html)
	} else if (req.url === '/retrato_doge') {
		res.writeHead(200, {'Content-Type': 'text/html'})
		var html = fs.readFileSync(__dirname + '/html/index.html')
        res.end(html)
	} else if (req.url === '/sexy_doge') {
		res.writeHead(200, {'Content-Type': 'text/html'})
		var html = fs.readFileSync(__dirname + '/html/index.html')
        res.end(html)
	} else {
		res.writeHead(404) //Ponemos el status del response a 404: Not Found
		res.end() //No devolvemos nada más que el estado.
	}
}).listen(1337, '127.0.0.1')
