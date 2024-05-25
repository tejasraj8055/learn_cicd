const express = require('express')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Hello World!')
    }
)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
    }
)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    }
)