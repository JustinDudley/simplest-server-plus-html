const http = require('http');
const fs = require('fs');

const htmlData = fs.readFileSync('./overview-copied-from-jonas-project.html', 'utf-8')
console.log(htmlData)

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-type": "text/html"})
    res.end(htmlData)
})
server.listen(8000, '127.0.0.1', () => console.log("Server is listening on Port 8000"))