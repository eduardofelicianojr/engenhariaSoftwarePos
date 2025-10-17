const Produto = require('../src/produto/Produto');

describe("Produto", () => {
    it("Deve criar um produto com as propriedades corretas", () => {
        const produto = new Produto("Caneta", "Caneta preta", 1.5, 100);
        expect(produto.nome).toBe("Caneta");
        expect(produto.descricao).toBe("Caneta preta");
        expect(produto.preco).toBe(1.5);
        expect(produto.estoque).toBe(100); 
    })

    test("Deve aumentar o estoque corretamente", () => {
        const produto = new Produto("Caderno", "Caderno espiral", 15.0, 50);
        produto.aumentarEstoque(20);
        expect(produto.estoque).toBe(70);
    });

    test("Deve reduzir o estoque corretamente", () => {
        const produto = new Produto("Lápis", "Lápis preto", 1.0, 30);
        produto.reduzirEstoque(10);
        expect(produto.estoque).toBe(20);
    });     
}); 
