import { Router } from "express";

const candidatosRoutes = Router();

let usuarios = []

class ClubeDeLeitura {
    constructor(id, nomeClube, statusLeitura, participantes, avaliacaoLivro) {
        this.id = id;
        this.nomeClube = nomeClube;
        this.statusLeitura = statusLeitura;
        this.participantes = participantes;
        this.avaliacaoLivro = avaliacaoLivro;
    }
}


usuariosRoutes.get("/", (req, res) => {
    return res.status(200).json({
        message:
        usuarios.length == 0
        ? "Não há usuários cadastrados" : `Total de usuários: ${usuarios.length}`,
        usuarios,
    });
});

export default candidatosRoutes;