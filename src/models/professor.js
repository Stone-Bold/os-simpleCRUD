const mongoose = require (`mongoose`);

const professor = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    alunos: [{type: mongoose.Schema.Types.ObjectId, ref: "aluno"}],
    ra: {
        type: String,
        required: true
    },
    nascimento: Date
}, {
    timestamps: true
});

module.exports = mongoose.model(`professor`, professor);



