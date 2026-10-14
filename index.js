
// Aprendendo utilizar o Express
/*import express from 'express'

const app = express()
//            request, response
app.get("/api", (req, res) => {

    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    
    res.send({ soma: num1 + num2})
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})

console.log("Hello world")*/
import express from 'express'

const app = express()

app.get("/api", (req, res) => {

    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    
    res.send({ soma: num1 + num2})
})

app.get("/api/sub/:num1/:num2", (req, res) => {

    const num1 = Number(req.params.num1)
    const num2 = Number(req.params.num2)
    
    res.send({ soma: num1 - num2})
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})

console.log("Hello world")
