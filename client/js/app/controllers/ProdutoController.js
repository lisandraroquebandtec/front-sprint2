class ProdutoController {

  constructor() {
    let $ = document.querySelector.bind(document);

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($("#mensagemView")),
      "texto"
    );

    this._listaProduto = new Bind(
      new ListaProdutos(),
      new ProdutosView($(".products")),
      "adicionar"
    );

    this.carregaProdutos();
  }

  _adicionarProduto(imagem, descricao, valor){
    return new Produto(
    imagem,
    descricao,
    valor
    )
  }

  carregaProdutos() {

    let service = new ProdutoService();
    service
      .obterProdutos()
      .then((produtos) => {
        console.log(produtos);
        produtos.forEach((produto) =>{
          this._listaProduto.adicionar(this._adicionarProduto(produto.imagem, produto.descricao, produto.valor));
        } )
      })
      .catch((err) => {
        this._mensagem.texto = err;
      });

    

  }

}
