const mongoose = require('mongoose');

const aluno = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    ra: {
        type: String,
        required: true
    },
    nascimento: Date
}, {
    timestamps: true
})

module.exports = mongoose.model(`aluno`, aluno);