import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { sliderHorizontalCards } from '../../../utils/SliderSettings';
// import styled from 'styled-components';
import './styles.css';
import '../../../styles.css';
import Footer from '../../Components/Footer';
import VerticalCardProduct from '../../Components/Cards/VerticalCardP/index';
import HorizontalCardProduct from '../../Components/Cards/HorizontalCardP';
import HomeHeader from '../../Components/Menu/Home Header';
import IProduto from '../../../utils/interfaces/IProduto';
import apiFullSports from '../../../api/apiFullSports';
import tenisBanner from '../../../assets/images/banners/transparent-shoes-banner.png';
import roupasBanner from '../../../assets/images/banners/transparent-clothes-banner.png';
import SvgCarregando from '../../../assets/icons/caarregando.svg';
import SvgLoddingDarkMode from '../../../assets/icons/SvgCarregandoDarkMode.svg';
import IRecomendacao from '../../../utils/interfaces/Recomendacaao/IRecomendacao';
import IBuscaRecomendacao from '../../../utils/interfaces/Recomendacaao/IBuscaaRecomendacao';
// const Grid = styled.div`
// 	margin: 40px 10px 40px 40px;
// 	display: grid;
// 	grid-template-columns: repeat(6, auto);
// 	grid-gap: 15px;
// `;
const Home = () => {
	//Exemplo de requisição por categorias
	const [spinner, setSpinner] = useState(false);
	const [produtos, setProdutos] = useState<IProduto[]>([]);
	const [produtosRecomendados, setProdutosReomendados] = useState<IProduto[]>(
		[]
	);
	const user = JSON.parse(localStorage.getItem('user') as string);
	useEffect(() => {
		setSpinner(true);
		if (user) {
			apiFullSports
				.get<IRecomendacao[]>('listar-recomendacoes', {})
				.then((resRecomendacao) => {
					for (const recomendacao of resRecomendacao.data) {
						if (recomendacao.user._id === user._id) {
							console.log(recomendacao.click_roupas);
							apiFullSports
								.get<IBuscaRecomendacao>(`recomendacao/${recomendacao._id}`, {})
								.then((res) => {
									setProdutos(res.data.producstRemains);
									setProdutosReomendados(res.data.recommendations);
									setSpinner(false);
								})
								.catch((err) => console.log(err));
							break;
						}
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			apiFullSports
				.get<IProduto[]>('listar-produtos')
				.then((res) => {
					setProdutos(res.data);
					setSpinner(false);
				})
				.catch((err) => console.log(err));
		}
	}, []);

	return (
		<>
			<HomeHeader />
			<div className="body-container">
				<div className="sec-container">
					<div className="product-container">
						<div className="product-banner">
							<img src={tenisBanner} alt="" />
						</div>
					</div>
				</div>
				<div className="sec-container">
					<div className="product-container">
						<div className="product-banner">
							<img src={roupasBanner} alt="" />
						</div>
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
							/* <div className="cards-container overflow-x-auto"> */
							<>
								{produtosRecomendados.length > 0 ? (
									<>
										<div className="Hcard-container">
											<h1 className="titulo-produto">
												Recomendados para Você{' '}
											</h1>
											<Slider {...sliderHorizontalCards}>
												{produtosRecomendados.map((item) => {
													const obj = Object.keys(
														item.categoriaProduto
													)[0].toString() as
														| 'calcado'
														| 'suplemento'
														| 'roupa'
														| 'equipamento';

													const newPrecoProduto = parseFloat(
														item.categoriaProduto[obj].preco.replace(',', '.')
													);
													const parcela = newPrecoProduto / 12;
													const newParcela = parcela.toFixed(2);
													if (item.categoriaProduto[obj].imagemProduto[0].url) {
														return (
															<HorizontalCardProduct
																key={item._id}
																tamanho={item.categoriaProduto[obj].tamanho}
																produtoID={item._id}
																nome={item.categoriaProduto[obj].nome}
																preco={item.categoriaProduto[obj].preco}
																precoParcelado={newParcela
																	.toString()
																	.replace('.', ',')}
																src={
																	item.categoriaProduto[obj].imagemProduto[0]
																		.url
																}
																obj={obj}
															/>
														);
													} else return <></>;
												})}
											</Slider>
										</div>
										<h1 className="titulo-produto">Outros Produtos</h1>
									</>
								) : (
									<></>
								)}
								<div className="produtos-grid-container-home">
									{produtos.map((item: IProduto) => {
										const obj = Object.keys(
											item.categoriaProduto
										)[0].toString() as
											| 'roupa'
											| 'equipamento'
											| 'suplemento'
											| 'calcado';
										const newPrecoProduto = parseFloat(
											item.categoriaProduto[obj].preco.replace(',', '.')
										);
										const parcela = newPrecoProduto / 12;
										const newParcela = parcela.toFixed(2);
										if (
											item.categoriaProduto[obj].imagemProduto.length > 0 &&
											item.categoriaProduto[obj].imagemProduto[0].url
										) {
											return (
												<VerticalCardProduct
													key={item._id}
													tamanho={item.categoriaProduto[obj].tamanho}
													produtoId={item._id}
													produtoName={item.categoriaProduto[obj].nome}
													PrecoAtual={item.categoriaProduto[obj].preco}
													precoParcelado={newParcela
														.toString()
														.replace('.', ',')}
													src={item.categoriaProduto[obj].imagemProduto[0].url}
													PrecoAnterior=""
													obj={obj}
												/>
											);
										} else return <></>;
									})}
								</div>
							</>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
export default Home;
