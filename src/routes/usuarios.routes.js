import { Router } from "express";

const clubeRoutes = Router();

const clubes = [
    {
        id: 4,
        nomeClube: "Ana",
        statusLeitura: true,
        participantes: 20,
        avaliacaoLivro: 2,
    },
    {
        id: 5,
        nomeClube: "Pedro",
        statusLeitura: true,
        participantes: 25,
        avaliacaoLivro: 1,
    }
];

// Defina suas rotas aqui
clubeRoutes.get('/clubes', (req, res) => {
    res.json(clubes);
});

// Classe ClubeDeLeitura
class ClubeDeLeitura {
    constructor(id, nomeClube, statusLeitura, participantes, avaliacaoLivro) {
        this.id = id;
        this.nomeClube = nomeClube;
        this.statusLeitura = statusLeitura;
        this.participantes = participantes;
        this.avaliacaoLivro = avaliacaoLivro;
    }
}

// Rota para criar um novo clube de leitura
clubeRoutes.post("/", (req, res) => {
const {
    nomeClube,
    statusLeitura,
    participantes,
    avaliacaoLivro
} = req.body;

if (!nomeClube) {
    return res.status(400).send({ message: "Coloque um nome para o suspeito" })
}

if (!statusLeitura) {
    return res.status(400).send({ message: "Coloque uma profissão" })
}

if (participantes) {
    return res.status(400).send({ message: "Coloque o nivel de suspeita" })
}

{if (avaliacaoLivro) {
    return res.status(400).send({ message: "Coloque o nivel de suspeita" })
}

}
});



// Outra rota de exemplo
clubeRoutes.get("/", (req, res) => {
    return res.status(200).json({
        message: "Bem-vindo ao Clube de Leitura!",
    });
});

// Exporte o router para ser usado em outros arquivos
export default clubeRoutes;