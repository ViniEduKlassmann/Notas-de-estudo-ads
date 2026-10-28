import express from 'express'
import db from './repository/index.js'

const app = express()
app.use(express.json());
//             request, response 
app.post("/api/v1/pessoa", (req, res) => {
    const { id, cpf, email} = req.body

    if ( !id || !cpf || !email) {
        // Serve para avisar que não foram enviadas todas as informações
        res.send({message: "avisar que é para enviar tudo"})
        return
    }
    db.push({ id, cpf, email })
    res.send({ message: "Pessoa criada com sucesso"})

})

app.get("/api/v1/pessoa/:id", (req, res) =>{
    const id = req.params.id

    const pessoa = db.find(p=> p.id === id)

    if(!pessoa){
        res.status(404).send({message: "Pessoa não encontrada!"})
        return
    }
    res,send({message: "Pessoa encontrada com sucesso", pessoa})
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})