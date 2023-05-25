import './styles.css';
import '../../../../../src/styles.css';
import { node, number, string } from 'prop-types';
import { click } from '@testing-library/user-event/dist/click';
import apiFullSports from '../../../../api/apiFullSports';
import IRecomendacao from '../../../../utils/interfaces/Recomendacaao/IRecomendacao';
import IBuscaRecomendacao from '../../../../utils/interfaces/Recomendacaao/IBuscaaRecomendacao';
interface Props extends React.HTMLProps<HTMLElement> {
	nome: string | undefined;
	preco: string | undefined;
	precoParcelado: string | undefined;
	src: string | undefined;
	produtoID: string | undefined;
	obj: 'calcado' | 'suplemento' | 'roupa' | 'equipamento';
	tamanho: number | undefined;
}

const HorizontalCardProduct: React.FC<Props> = ({
	tamanho,
	produtoID,
	nome,
	preco,
	src,
	precoParcelado,
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
									console.log(err);
									return false;
								});
							break;
						}
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} else return (window.location.href = '/comprar-produto/' + produtoID);
	};
	return (
		<div className="Hcard-product">
			<a
				className="Hcard-link"
				onClick={() => AtualizaRecomendacao(obj, produtoID)}
			>
				<div className="Hcard-cover">
					<img src={src} alt="imagem do produto" onClick={() => click} />
				</div>
				<div className="Hcard-body">
					<div className="Hcard-product-spec">
						<span className="card-product-name">{nome}</span>
						<span className="card-old-price"></span>
						<span className="card-product-price">R$ {preco}</span>
						<span className="card-product-parce">
							12x de R${precoParcelado}
						</span>
					</div>
					<span className="card-product-price">tamanho: {tamanho}</span>
				</div>
			</a>
		</div>
	);
};
HorizontalCardProduct.propTypes = {
	children: node,
	tamanho: number,
	produtoID: string,
	nome: string,
	preco: string,
	src: string,
	precoParcelado: string,
};
export default HorizontalCardProduct;
