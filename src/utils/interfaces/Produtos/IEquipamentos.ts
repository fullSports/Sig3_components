import IFornecedor from "../IFornecedor"
import Iimagem from "../Iimagem"
export default interface IEquipamentos{
    _id: string,
    nomeProduto: string,
    fornecedor: IFornecedor,
    corProduto: string,
    preco: string,
    quantidade: number,
    imagemProduto: [
    Iimagem
    ]
}