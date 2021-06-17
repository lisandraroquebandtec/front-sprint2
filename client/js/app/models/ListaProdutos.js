class ListaProdutos {

  constructor(){
    this._produtos = [];
  }

  adicionar(produto){
    this._produtos.push(produto);
  }

  get produtos(){
    return [].concat(this._produtos);
  }
}
