const express = require("express")
const sequelize = require("./config/connection.js")
const routes = require("./routes")

const app = express();
const PORT = process.env.port || 3001

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(routes)

sequelize.sync({force:true}).then(() => {
    app.listen(PORT, async() => {
        console.log("Listening")
    })
})