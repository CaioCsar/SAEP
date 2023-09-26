const express = require('express')
const app = express();

// importando as models
const automoveis = require("./models/automoveis")
const cliente = require("./models/clientes")
const concessionaria = require("./models/concessionaria")
const alocacao = require("./models/alocacao")

//Preparando a app para receber dados JSON
app.use(express.json());

const db = require("./models/db")

app.get("/", async (req, res) => {
    res.send("./index.html")
});

app.post("/cadastrar", async (req, res) => {

    await automoveis.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Cadastrado com Sucesso"
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro ao cadastrar"
            })
        });
    //res.send("Cadastrado com Sucesso")
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
})


// function from HTML

function area(){
    let areaAtual = document.querySelector(".area");
    window.location.href = "./Visuals/venda.html";
}

//function para dar cor na interface a depender da base de dados
app.get("./models/alocacao.js", function(req,res){
        
})