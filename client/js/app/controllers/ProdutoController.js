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

  procurar(evento) {
    let input = evento.target.value;
    const lista = this._listaProduto;

    this._listaProduto =  new Bind(
      new ListaProdutos(),
      new ProdutosView(document.querySelector(".products")),
      "adicionar"
    )


    if(evento.target.value === ''){
      return this.carregaProdutos();
    }
    this._listaFiltrada(lista, input);

  }

    _listaFiltrada(lista, input){
      lista.produtos.forEach((produto) => {
        if(this._contem(produto.descricao, input)){
          this._listaProduto.adicionar(produto);
        }
      });
    }

    _caixaAlta(string){
      return string.toUpperCase();
    }

    _contem(descricao, value){
      return this._caixaAlta(descricao).includes(this._caixaAlta(value));
    }

}
