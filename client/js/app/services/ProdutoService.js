class ProdutoService {

  constructor() {
    this._http = new HttpService();
  }

  obterProdutos() {
    return this._http.get('produtos')
    .then((produtos) =>{
      return produtos
    } )
    .catch((err) =>  { throw new Error(err)})
  }

}
