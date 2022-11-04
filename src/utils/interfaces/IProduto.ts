import IFornecedor from "./IFornecedor";
import Iimagem from "./Iimagem";

export default interface IProduto{
    _id: string,
    nomeProduto: string,
    tipoProduto: string,
    corProduto: string,
    preco: string,
    quantidade: number,
    dataCadastro: string,
    fornecedor: IFornecedor,
    imagemProduto: [
    Iimagem
    ]
}