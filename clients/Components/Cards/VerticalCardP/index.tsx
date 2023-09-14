import React from 'react';
import './styles.css';
import '../../../../styles.css';
import apiFullSports from '../../../../api/apiFullSports';
import IRecomendacao from '../../../../utils/interfaces/Recomendacaao/IRecomendacao';
import IBuscaRecomendacao from '../../../../utils/interfaces/Recomendacaao/IBuscaaRecomendacao';
import UpdateToken from '../../../../api/updateToken';
interface Props {
	src: string;
	produtoName: string;
	PrecoAnterior: string;
	PrecoAtual: string;
	produtoId: string;
	precoParcelado: string;
	tamanho: number;
	obj: 'calcado' | 'suplemento' | 'roupa' | 'equipamento';
}
// const VerticalCardProduct = () =>{
const VerticalCardProduct: React.FC<Props> = ({
	tamanho,
	precoParcelado,
	produtoId,
	src,
	produtoName,
	PrecoAnterior,
	PrecoAtual,
	obj,
}) => {
	const AtualizaRecomendacao = (
		categoria: 'calcado' | 'suplemento' | 'roupa' | 'equipamento',
		produto: string | undefined
	) => {
		const user = JSON.parse(localStorage.getItem('user') as string);
		if (user) {
			return apiFullSports
				.get<IRecomendacao[]>('listar-recomendacoes')
				.then((resRecomendacao) => {
					for (const recomendacao of resRecomendacao.data) {
						if (recomendacao.user._id === user._id) {
							apiFullSports
								.put<IBuscaRecomendacao>(
									`atualizar-recomendacao/${recomendacao._id}`,
									{
										[`click_${categoria}s`]:
											recomendacao[`click_${categoria}s`] + 1,
									}
								)
								.then(() => {
									return (window.location.href = '/comprar-produto/' + produto);
								})
								.catch((err) => {
									if (err.response?.status === 401) {
										UpdateToken();
									}
									console.log(err);
									return false;
								});
							break;
						}
					}
				})
				.catch((err) => {
					if (err.response?.status === 401) {
						UpdateToken();
					}
					console.log(err);
				});
		} else return (window.location.href = '/comprar-produto/' + produtoId);
	};
	return (
		<div className="Vcard-product">
			<a
				className="Vcard-link"
				onClick={() => AtualizaRecomendacao(obj, produtoId)}
			>
				<div className="card-cover">
					<img src={src} alt="Imagem Teste" />
				</div>
				<div className="Vcard-body">
					<span className="card-product-name"> {produtoName} </span>
					<span className="card-old-price">{PrecoAnterior}</span>
					<div className="card-product-price-container">
						<span className="card-product-price"> R${PrecoAtual} </span>
						<span className="card-product-parce">
							12x de R${precoParcelado}
						</span>
					</div>
					<span className="card-product-price">
						tamanho: {tamanho.toString()}
					</span>
					{/* <span className="card-product-parce ml-24">Em até 6x sem juros</span> */}
				</div>
			</a>
		</div>
	);
};
export default VerticalCardProduct;
