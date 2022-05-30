const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser');
const mysql = require('mysql2')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "13067620",
    database: "crud_contact"
})

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM product_db";
    db.query(sqlGet, (err, result) => {
        res.send(result);
    })
})

app.post("/api/post", (req, res) => {
    const { descricao, valor, unidade, quantidade, marca, localidade, ativo } = req.body;
    const sqlInsert =
        "INSERT INTO product_db (descricao, valor, unidade, quantidade, marca, localidade, ativo) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [descricao, valor, unidade, quantidade, marca, localidade, ativo], (err, result) => {
        if (err) {
            console.log(err)
        }
    })
})
app.delete("/api/remove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove =
        "DELETE FROM product_db WHERE id = ?";
    db.query(sqlRemove, id, (err, result) => {
        if (err) {
            console.log(err)
        }
    })
})

app.get("/api/get/:id", (req, res) => {
    const { id } = req.params;
    const sqlGet = "SELECT * FROM product_db WHERE id = ? ";
    db.query(sqlGet, id, (err, result) => {
        if(err) {
            console.log(err)
        }
        res.send(result);
    });
});

app.put("/api/update/:id", (req, res) => {
    const { id } = req.params;
    const { descricao, valor, unidade, quantidade, marca, localidade, ativo } = req.body
    const sqlUpdate = "UPDATE product_db SET descricao = ?, valor = ?, unidade = ?, quantidade = ?, marca = ?, localidade = ?, ativo = ? WHERE id = ?";
    db.query(sqlUpdate, [descricao, valor, unidade, quantidade, marca, localidade, ativo, id], (err, result) => {
        if(err) {
            console.log(err)
        }
        res.send(result);
    });
});

app.get('/', (req, res) => {
    // const sqlInsert = "INSERT INTO product_db (desc, valor, qnt) VALUES ('Daniel', 100, 20)";
    // const sqlInsert = "INSERT INTO product_db (descricao, valor, quantidade, marca, localidade, ativo) VALUES ('Roda', 100.75, 10, 'BMW', 'Sao Paulo', 'Sim')";
    // db.query(sqlInsert, (err, result) => {
    //     console.log('error', err);
    //     console.log('result', result);
    //     res.send("Hello Express");
    // })
});

app.listen(5000, (req, res) => {
    console.log('Servir is running on port 5000');
});