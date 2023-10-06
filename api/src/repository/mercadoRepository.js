import conexao from './connection.js'

export async function inserir(produto) {
    let comando = 'insert into tb_mercado(nm_produto, tp_produto, vl_preco, cd_produto, qtd_estoque, dt_validade) values(?, ?, ?, ?, ?, ?)'

    let [resp] = await conexao.query(comando,
        [
            produto.nome,
            produto.tipo,
            produto.preco,
            produto.codigo,
            produto.estoque,
            produto.validade
        ])

    produto.id = resp.insertId;
    return produto
}

export async function alterar(id, produto) {
    let comando = `update tb_mercado
    set nm_produto = ?,
    tp_produto = ?, 
    vl_preco = ?,
    cd_produto = ?, 
    qtd_estoque = ?,
    dt_validade = ?
    where id_produto = ?`

    let [resp] = await conexao.query(comando,
        [
            produto.nome,
            produto.tipo,
            produto.preco,
            produto.codigo,
            produto.estoque,
            produto.validade,
            id
        ])

        return resp.affectedRows;
}


export async function deletar(id) {
    let comando = `
        delete from tb_mercado
                where id_produto = ?
    `

    let [resp] = await conexao.query(comando, [id])
    return resp.affectedRows;
}


export async function consultar(nome) {
    let comando = `
        select id_produto    as id,
               nm_produto   as nome,
               tp_comida    as tipo,
               vl_preco     as preco,
               cd_produto   as codigo,
               qtd_estoque  as estoque,
               dt_validade  as validade
               
        from tb_mercado
       where nm_produto like ?
    `

    let [dados] = await conexao.query(comando, ['%' + nome + '%'])
    return dados;
}