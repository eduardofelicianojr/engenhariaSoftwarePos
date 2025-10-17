class Produto {

    constructor(nome, descricao, preco, estoque) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.estoque = estoque;
    }

    aumentarEstoque(quantidade) {
        this.estoque += quantidade;
    }

    reduzirEstoque(quantidade) {
        this.estoque -= quantidade;
    }
}

module.exports = Produto;