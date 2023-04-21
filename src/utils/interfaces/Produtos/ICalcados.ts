import IFornecedor from '../IFornecedor';
import Iimagem from '../Iimagem';
export default interface ICacados {
	_id: string;
	nome: string;
	fornecedor: IFornecedor;
	cor: string;
	sexo: string;
	tamanho: number;
	preco: string;
	quantidade: number;
	imagemProduto: Iimagem[];
}
