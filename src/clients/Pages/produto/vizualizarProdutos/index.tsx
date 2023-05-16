import { useState, useEffect } from 'react';
import apiFullSports from '../../../../api/apiFullSports';
import IProduto from '../../../../utils/interfaces/IProduto';
import VerticalCardProduct from '../../../Components/Cards/VerticalCardP';
import Cabecalho from '../../../Components/Menu/Header';
import Footer from '../../../Components/Footer';
import SvgCarregando from '../../../../assets/icons/caarregando.svg';
import SvgLoddingDarkMode from '../../../../assets/icons/SvgCarregandoDarkMode.svg';
const VizualizacaoDeProdutos = () => {
	const [produtos, setProdutos] = useState<IProduto[]>([]);
	const [buscaProduto, setBuscaProduto] = useState<IProduto[]>([]);
	const [spinner, setSpinner] = useState(false);
	const urlParams = new URLSearchParams(window.location.search);
	const categoriaParam = urlParams.get('categoria');
	const buscaParm = urlParams.get('busca');
	useEffect(() => {
		setSpinner(true);
		apiFullSports
			.get<IProduto[]>('listar-produtos')
			.then((resposta) => {
				setProdutos(resposta.data);
				setSpinner(false);
			})
			.catch((err) => console.log(err));
		if (buscaParm) {
			apiFullSports
				.get<IProduto[]>(`/buscar-produto/${buscaParm}`)
				.then((res) => {
					setBuscaProduto(res.data);
					setSpinner(false);
				})
				.catch((err) => console.log(err));
		}
	}, []);

	if (categoriaParam) {
		return (
			<>
				<Cabecalho />
				<main>
					{spinner ? (
						<div id="contenner-lodding" className="contenner-logging">
							<img
								src={SvgCarregando}
								className="svg-loddin-lingt"
								alt="animação de carregando"
							/>
							<img
								src={SvgLoddingDarkMode}
								className="svg-loddin-dark-mode"
								alt="animação de carregando"
							/>
						</div>
					) : (
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
											produtoId={item._id}
											src={categoriaDeproduto[obj].imagemProduto[0].url}
											produtoName={categoriaDeproduto[obj].nome}
											PrecoAnterior={''}
											PrecoAtual={categoriaDeproduto[obj].preco}
										/>
									);
								}
							})}
						</div>
					)}
				</main>
				<Footer />
			</>
		);
	} else if (buscaProduto.length == 0) {
		return (
			<>
				<Cabecalho />
				<main>
					{spinner ? (
						<div id="contenner-lodding" className="contenner-logging">
							<img
								src={SvgCarregando}
								className="svg-loddin-lingt"
								alt="animação de carregando"
							/>
							<img
								src={SvgLoddingDarkMode}
								className="svg-loddin-dark-mode"
								alt="animação de carregando"
							/>
						</div>
					) : (
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
					)}
				</main>
				<Footer />
			</>
		);
	} else {
		return (
			<>
				<Cabecalho />
				<main>
					{spinner ? (
						<div id="contenner-lodding" className="contenner-logging">
							<img
								src={SvgCarregando}
								className="svg-loddin-lingt"
								alt="animação de carregando"
							/>
							<img
								src={SvgLoddingDarkMode}
								className="svg-loddin-dark-mode"
								alt="animação de carregando"
							/>
						</div>
					) : (
						<div className="produtos-grid-container">
							{buscaProduto.map((item) => {
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
					)}
				</main>
				<Footer />
			</>
		);
	}
};
export default VizualizacaoDeProdutos;
