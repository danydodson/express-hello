const express = require("express")
const app = express()
const port = 80

app.get("/", (req, res) => res.send("Hello there from express ! update 02\n"))
app.listen(port, () => console.log(`App started on http://localhost:${port}`))