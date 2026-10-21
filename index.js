
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
//             request, response 
app.get("/api/soma", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)

    res.send({ soma: num1 + num2 })
})

app.get("/api/multi/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1)
    const num2 = Number(req.params.num2)

    res.send({ multi: num1 * num2 })
})

app.get("/api/med/:num1/:num2/:num3/:num4/:num5", (req, res) => {
    const num1 = Number(req.params.num1)
    const num2 = Number(req.params.num2)
    const num3 = Number(req.params.num3)
    const num4 = Number(req.params.num4)
    const num5 = Number(req.params.num5)

    const media = (num1 + num2 + num3 + num4 + num5) / 5

    res.send({ media })
})

app.get("/api/temp/:temp1", (req, res) => {
    const temp1 = Number(req.params.temp1)
    

    const tempfar = (temp1 + 160) / 5

    res.send({ tempfar })
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})