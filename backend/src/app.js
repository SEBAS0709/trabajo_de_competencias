const express = require("express")
const cors = require ("cors")
const app = express();


app.set("port", process.env.PORT || 4000)


app.use(cors())
app.use(express.json())



app.get("/", (req, res) => {
    res.send("bienvenido cara de mono");
})

app.use("/api/usuarios", require ("./routes/usuario"))


module.exports = app;