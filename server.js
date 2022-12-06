const http = require('http')
const database = require('./db.json')

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'application/json' })
	res.end(JSON.stringify(database))
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
