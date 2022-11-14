import IFornecedor from "../IFornecedor"
import Iimagem from "../Iimagem"
export default interface IRoupa{
    _id: string,
    nome: string,
    fornecedor: IFornecedor,
    cor: string,
    preco: string,
    quantidade: number,
    imagemProduto: [
    Iimagem
    ]
}