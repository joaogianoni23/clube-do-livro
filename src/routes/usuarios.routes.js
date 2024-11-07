import { Router } from "express";

const clubeRoutes = Router();

// Defina suas rotas aqui
clubeRoutes.get('/clubes', (req, res) => {
    // Lógica para obter os clubes de leitura
    res.json([
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
    ]);
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

// Outra rota de exemplo
clubeRoutes.get("/", (req, res) => {
    return res.status(200).json({
        message: "Bem-vindo ao Clube de Leitura!",
    });
});

// Exporte o router para ser usado em outros arquivos
export default clubeRoutes;