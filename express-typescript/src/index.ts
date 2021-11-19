import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { countries } from './data';

const app: Express = express();

app.use(express.json())
app.use(cors())

// ENDPOINT DE TESTE
app.get("/test", (req, res) => {
    res.send("Olá do Express")
})

// ENDPOINT DE BUSCAR TODOS OS PAÍSES
app.get("/countries", (req: Request, res: Response) => {
    res.send(countries)
})

app.get("/countries/test", (req, res) => {
    res.send("País das maravilhas")
})

// ENDPOINT DE BUSCAR PAÍS POR ID
app.get("/countries/:id", (req, res) => {
    const id = req.params.id

    console.log(id)

    const result = countries.find((country) => {
        return country.id === Number(id)
    })

    res.send(result)

    if (result)
        res.send(result)
    else
        res.status(404).send("País não encontrado")
})

//ENDPOINT DE EXCLUIR
app.delete("/countries/:id", (req, res) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            throw new Error("Não autorizado")
        }
        const index = countries.findIndex((country) => {
            return country.id === Number(req.params.id)
        })

        if (index === -1) {
            res.statusCode = 404
            throw new Error();
        }

        countries.splice(index, 1)
        
        res.status(204).end()

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).end()
        } else {
            res.end()
        }
    }
})

// SERVIDOR
app.listen(3003, () => {
    console.log("Servidor pronto!")
})

