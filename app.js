const express = require("express")
const hbs = require("hbs")

const app = express()

app.use(express.static(__dirname + "/public"))
app.set('view engine', 'hbs')

app.get("/", (req, res) => {
    res.render("index", {
        title: "Home page",
        class: "page-home"
    })
})
app.get("/about", (req, res) => {
    res.render("about", {
        title: "About",
        class: "page-about"
    })
})
app.get("/works", (req, res) => {
    res.render("works", {
        title: "Works",
        class: "page-works"
    })
})

app.listen(3000, () => console.log("App is runnning on http://localhost:3000"))