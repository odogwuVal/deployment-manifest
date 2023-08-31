const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
res.send('Hello from Hydrogen!')
})

var server = app.listen(port, () => {
console.log("Example app listening on port" + server.address().port)
})
module.exports = server;