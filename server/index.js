const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.port || 4005

app.use(express.json())
app.use(cors())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

const {signin, signup} = require('./controllers/auth')
const {getSet} = require('./controllers/sets')

app.post('/sign-in', signin)
app.post('/sign-up', signup)

app.get('/sets/:set', getSet)