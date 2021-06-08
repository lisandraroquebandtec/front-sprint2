class ProdutoController {

  constructor() {
    let $ = document.querySelector.bind(document);

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($("#mensagemView")),
      "texto"
    );

    this.carregaProdutos();
  }

  carregaProdutos() {

    // TODO: implementar

    // let service = new ProdutoService();
    // service
    //   .obterProdutos()
    //   .then()
    //   .catch();

    this._mensagem.texto = 'ProdutosController ainda não foi implementado.';

  }

}
