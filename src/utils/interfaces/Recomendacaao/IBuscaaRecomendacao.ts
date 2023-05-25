import IProduto from '../IProduto';

export default interface IBuscaRecomendacao {
	recommendations: IProduto[];
	producstRemains: IProduto[];
}
