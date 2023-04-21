import { useState, useEffect } from 'react';
import apiFullSports from '../../../../api/apiFullSports';
import IProduto from '../../../../utils/interfaces/IProduto';
import styled from 'styled-components';
import './styles.css';
import VerticalCardProduct from '../../../Components/Cards/VerticalCardP';
import Cabecalho from '../../../Components/Menu/Header';
import Footer from '../../../Components/Footer';
const Main = styled.main`
	width: 100%;
	min-height: 600px;
`;

const VizualizacaoDeProdutos = () => {
	const [produtos, setProdutos] = useState<IProduto[]>([]);
	const [, setSpinner] = useState(false);
	const urlParams = new URLSearchParams(window.location.search);
	const categoriaParam = urlParams.get('categoria');
	useEffect(() => {
		setSpinner(true);
		apiFullSports
			.get<IProduto[]>('listar-produtos')
			.then((resposta) => {
				setProdutos(resposta.data);
				setSpinner(false);
			})
			.catch((err) => console.log(err));
	}, []);

	if (categoriaParam) {
		return (
			<>
				<Cabecalho />
				<Main>
					<div className="produtos-grid-container">
						{produtos.map((item) => {
							const categoriaDeproduto = item.categoriaProduto;
							const obj = Object.keys(categoriaDeproduto)[0].toString() as
								| 'roupa'
								| 'equipamento'
								| 'suplemento'
								| 'calcado';
							if (obj == categoriaParam) {
								const newPrecoProduto = parseFloat(
									categoriaDeproduto[obj].preco.replace(',', '.')
								);
								const parcela = newPrecoProduto / 12;
								const newParcela = parcela.toFixed(2);
								return (
									<VerticalCardProduct
										key={item._id}
										tamanho={categoriaDeproduto[obj].tamanho}
										precoParcelado={newParcela.toString().replace('.', ',')}
										produtoId={categoriaDeproduto[obj]._id}
										src={categoriaDeproduto[obj].imagemProduto[0].url}
										produtoName={categoriaDeproduto[obj].nome}
										PrecoAnterior={''}
										PrecoAtual={categoriaDeproduto[obj].preco}
									/>
								);
							}
						})}
					</div>
				</Main>
				<Footer />
			</>
		);
	} else {
		return (
			<>
				<Cabecalho />
				<Main>
					<div className="produtos-grid-container">
						{produtos.map((item) => {
							const categoriaDeproduto = item.categoriaProduto;
							const obj = Object.keys(categoriaDeproduto)[0].toString() as
								| 'roupa'
								| 'equipamento'
								| 'suplemento'
								| 'calcado';
							const newPrecoProduto = parseFloat(
								categoriaDeproduto[obj].preco.replace(',', '.')
							);
							const parcela = newPrecoProduto / 12;
							const newParcela = parcela.toFixed(2);
							return (
								<VerticalCardProduct
									key={item._id}
									tamanho={categoriaDeproduto[obj].tamanho}
									precoParcelado={newParcela.toString().replace('.', ',')}
									produtoId={item._id}
									src={categoriaDeproduto[obj].imagemProduto[0].url}
									produtoName={categoriaDeproduto[obj].nome}
									PrecoAnterior={''}
									PrecoAtual={categoriaDeproduto[obj].preco}
								/>
							);
						})}
					</div>
				</Main>
				<Footer />
			</>
		);
	}
};
export default VizualizacaoDeProdutos;
