import { inserir, alterar, consultar, deletar } from '../repository/mercadoRepository.js'
import { Router } from "express"

let endpoints = Router();

endpoints.post('/produto', async (req, resp) => {
    try {
        let produto = req.body;

        let r = await inserir(produto);
        resp.send(r)
    }

    catch(err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    }
 })

 endpoints.delete('/produto/:id', async (req, resp) => {
    try {
        const produtoId = req.params.id;

        let r = await deletar(produtoId);

        if (r) {
            resp.send({ mensagem: 'Produto deletado com sucesso' });
        } else {
            resp.status(404).send({ erro: 'Produto não encontrado' });
        }
    } catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro interno' });
    }
});

endpoints.put('/produto', async (req, resp) => {
    try {
        let produtoId = req.params.id;
        let novoProduto = req.body;

        const resultado = await alterar(produtoId, novoProduto);

        if (resultado) {
            resp.send({ mensagem: 'Produto atualizado com sucesso' });
        } else {
            resp.status(404).send({ erro: 'Produto não encontrado' });
        }
    } catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro interno' });
    }
});

 endpoints.get('/produto', async (req, resp) => {
    let dados = await consultar();
    resp.send(dados);
})

export default endpoints;