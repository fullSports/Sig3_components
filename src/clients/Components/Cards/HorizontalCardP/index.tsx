import './styles.css';
import '../../../../../src/styles.css';
import { node, number, string } from 'prop-types';
interface Props extends React.HTMLProps<HTMLElement> {
	nome: string | undefined;
	preco: string | undefined;
	precoParcelado: string | undefined;
	src: string | undefined;
	produtoID: string | undefined;
	tamanho: number | undefined;
}
const HorizontalCardProduct: React.FC<Props> = ({
	tamanho,
	produtoID,
	nome,
	preco,
	src,
	precoParcelado,
}) => {
	return (
		<div className="Hcard-product">
			<a href={`/comprar-produto/${produtoID}`} className="Hcard-link">
				<div className="Hcard-cover">
					<img src={src} alt="imagem do produto" />
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
