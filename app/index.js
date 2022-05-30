const express = require('express')
const cors = require('cors')
const dotEnv = require('dotenv')

const router = require('./routes')

dotEnv.config()

const app = express()
app.use(cors())
const port = process.env.PORT || 3000

app.use(router)

app.listen(port, () => console.log(`Magic happens on port ${port}`))
