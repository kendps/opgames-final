const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))




app.listen(port, () => console.info('Listening on port 3000 | CTRL + C to stop the server'))