const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {
    console.log(4)
    const params = Array(
        request.body.title,
        request.body.description
    )

    const query = "INSERT INTO task(nome, senha) VALUES(?,?)"

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
                    succes: true,
                    message: "sucesso gurizada!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    succes: false,
                    message: "Ops, deu problema!",
                    data: err
                })
        }
    })
}

module.exports = {
    storeTask
}

