
const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req, res) => {
    res.send("Expresss is Up and Working")
})

app.listen(PORT, () => console.log(`🎉 Server Running on http://localhost:${PORT}`))