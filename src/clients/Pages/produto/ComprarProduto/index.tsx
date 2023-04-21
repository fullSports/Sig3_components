import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import apiFullSports from '../../../../api/apiFullSports';
import IProduto from '../../../../utils/interfaces/IProduto';
import Footer from '../../../Components/Footer';
import Cabecalho from '../../../Components/Menu/Header';
import SvgLodding from '../../../../assets/icons/caarregando.svg';
const VisualizacaoPrd = styled.section`
	margin: 40px 0;
	margin-left: auto;
	margin-right: auto;
`;
const GridVisuPrd = styled.div`
	margin: 40px 0;
	margin-left: auto;
	margin-right: auto;
	justify-content: center;
	/* POSSIVEL MUDANÇA PARA 1200PX */
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, auto);
	/* grid-gap: 25px; */
	@media screen and (max-width: 1040px) {
		display: grid;
		grid-template-columns: repeat(1, auto);
		margin: 0;
	}
`;
const FotosAdcPrd = styled.div`
	img {
		width: 150px;
		height: 124px;
	}
	@media screen and (max-width: 1040px) {
		display: flex;
		justify-content: center;
		img {
			width: 75px;
			height: 65px;
		}
		display: flex;
		border: 2px solid #000;
	}
	button {
		/* margin: 0 0 0 300px; */
		display: block;
		margin: 10px 0 10px 10px;
		border: 1px solid rgba(5, 5, 5, 0.527);
	}
	button:hover {
		border: 1px solid rgb(128, 202, 44);
	}
	button:focus {
		border: 1px solid rgb(128, 202, 44);
	}
`;
const DescAnunPrd = styled.div`
	color: #313131;
	border: 2px solid rgba(0, 0, 0, 0.123);
	* {
		line-height: 35px;
	}
`;
const ConteudoDescAnunPrd = styled.div`
	margin: 20px 20px 0;
	#titDescPrd {
		font-weight: 600;
		font-size: 20px;
	}
	#frtGrtsCard {
		text-transform: uppercase;
		font-weight: 600;
		font-size: 13px;
		/* width: max-content; */
		color: #62aa0b;
		/* background-color: #a6e65a; */
	}
	#prcPromoPrd {
		text-decoration: line-through;
		font-size: 16px;
	}
	#prcPrd {
		font-weight: 600;
		font-size: 26px;
		color: #7aaa2e;
	}
	#subTitPrd {
		font-size: 17px;
	}
	#tmnhPrd p {
		font-size: 15px;
		font-weight: 600;
	}
	#tmnhQtd p {
		font-size: 15px;
		font-weight: 600;
	}
	#tmnhQtd input {
		width: 45px;
		font-size: 15px;
		text-align: center;
		border: 1px solid rgba(5, 5, 5, 0.527);
	}
	#tmnhQtd input:focus {
		outline: none;
	}
	#tmnhQtd th {
		display: flex;
		justify-content: space-between;
		width: 40%;
	}
	#btnLinkPrd {
		line-height: 50px;
		margin: 15px 0;
		text-align: center;
	}
	#btnLinkPrd input {
		margin-right: auto;
		margin-left: auto;
		display: block;
		border: none;
		background-color: #313131;
		text-transform: uppercase;
		color: #fff;
		font-size: 16px;
		min-width: 180px;
		min-height: 44px;
		cursor: pointer;
	}
	#btnLinkPrd input:hover {
		text-decoration: none;
		background-color: rgb(0, 0, 0);
		transform: translate(0.3s);
	}
	@media screen and (max-width: 1144px) {
		#frtGrtsCard {
			text-transform: uppercase;
			font-weight: 600;
			font-size: 13px;
			/* width: max-content; */
			color: #62aa0b;
			/* background-color: #a6e65a; */
		}
	}
`;
const BotaoNumber = styled.div`
	background-color: #796969;
	height: 20px;
	width: 20px;
	border-radius: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 22px;
	cursor: pointer;
`;
const ThTabela = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 140px;
	height: auto;
	border: 1.8px solid #000;
	padding: 16px 8px;
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
`;
const DivCarregando = styled.div`
	display: flex;
	justify-content: center;
`;
const ComprarProduto = () => {
	const user = JSON.parse(localStorage.getItem('user') as string);
	const parametro = useParams();
	const [produto, setProduto] = useState<IProduto>();
	const [spinner, setSpinner] = useState(true);
	const [estiloImgProd1Array, setEstiloImgProd1Array] = useState(
		Array<{
			styles: string;
			display: boolean;
		}>
	);
	const [quantidade, setQuantidade] = useState('');
	useEffect(() => {
		apiFullSports
			.get<IProduto>(`listar-produto/${parametro.id}`)
			.then((resposta) => {
				setProduto(resposta.data);
				if (estiloImgProd1Array.length === 0) {
					const categoria = resposta.data.categoriaProduto;
					const obj = Object.keys(categoria)[0].toString() as
						| 'roupa'
						| 'equipamento'
						| 'suplemento';
					const estiloImgProd = [];
					for (let i = 0; i < categoria[obj].imagemProduto.length; i++) {
						if (produto?.categoriaProduto[obj].imagemProduto[i]) {
							if (i === 0) {
								estiloImgProd.push({
									styles: `${
										'imgPrd-' +
										produto?.categoriaProduto[obj].imagemProduto[i]._id
									}`,
									display: true,
								});
							} else {
								estiloImgProd.push({
									styles: `${
										'imgPrd-' +
										produto?.categoriaProduto[obj].imagemProduto[i]._id
									}`,
									display: false,
								});
							}
						}
					}
					setEstiloImgProd1Array(estiloImgProd);
				}
				setTimeout(function () {
					setSpinner(false);
				}, 900);
			})
			.catch((err) => {
				console.log(err);
			});
		setQuantidade('1');
	}, [parametro, estiloImgProd1Array]);
	function comprarItem(evento: React.FormEvent<HTMLFormElement>) {
		evento.preventDefault();

		localStorage.setItem(
			'carrinho',
			JSON.stringify({
				pedido: { quantidade, produtoID: produto?._id },
				clienteID: user._id,
			})
		);

		setTimeout(function () {
			window.location.href = '/carrinho-de-compra/';
		}, 100);
	}

	if (produto?.categoriaProduto !== undefined) {
		if (user) {
			const categoria = produto?.categoriaProduto;
			const obj = Object.keys(categoria)[0].toString() as
				| 'roupa'
				| 'equipamento'
				| 'suplemento';

			const newPrecoProduto = parseFloat(
				categoria[obj].preco.replace(',', '.')
			);
			const parcela = newPrecoProduto / 12;
			const newParcela = parcela.toFixed(2);
			const quantidadeCategoria = parseFloat(quantidade);

			const FotoPrd = styled.div`
				overflow: hidden;
				img {
					margin: 10px 0 10px;
					width: 550px;
					height: 460px;
					-moz-transition: all 0.3s;
					-webkit-transition: all 0.3s;
					transition: all 0.3s;
				}
				@media screen and (max-width: 1040px) {
					display: flex;
					justify-content: center;
					img {
						margin: 10px 0 10px;
						width: 100%;
						height: 260px;
						-moz-transition: all 0.3s;
						-webkit-transition: all 0.3s;
						transition: all 0.3s;
					}
				}
				:hover img {
					-moz-transform: scale(1.1);
					-webkit-transform: scale(1.1);
					transform: scale(1.3);
					cursor: zoom-in;
				}
				${estiloImgProd1Array.map(
					(item) =>
						`#${item.styles}{display: ${item.display ? 'block' : 'none'}}`
				)}
			`;

			return (
				<>
					<Cabecalho />
					{!spinner && (
						<VisualizacaoPrd
							id="visualizacaoPrd"
							className="visualizacaoPrd"
							style={{ display: `${spinner ? 'none' : 'block'}` }}
						>
							<GridVisuPrd id="gridVisuPrd" className="gridVisuPrd">
								<FotosAdcPrd id="fotosAdcPrd" className="fotosAdcPrd">
									{produto?.categoriaProduto[obj].imagemProduto.map(
										(item: { _id: string; url: string | undefined }) => {
											if (item._id !== undefined) {
												return (
													<button
														id={'opcImg-' + item._id}
														className="opcImg"
														onClick={() => {
															const estiloImgProd = [];
															for (
																let i = 0;
																i < categoria[obj].imagemProduto.length;
																i++
															) {
																if (
																	produto?.categoriaProduto[obj].imagemProduto[
																		i
																	]
																) {
																	if (
																		produto?.categoriaProduto[obj]
																			.imagemProduto[i]._id === item._id
																	) {
																		estiloImgProd.push({
																			styles: `${
																				'imgPrd-' +
																				produto?.categoriaProduto[obj]
																					.imagemProduto[i]._id
																			}`,
																			display: true,
																		});
																	} else {
																		estiloImgProd.push({
																			styles: `${
																				'imgPrd-' +
																				produto?.categoriaProduto[obj]
																					.imagemProduto[i]._id
																			}`,
																			display: false,
																		});
																	}
																}
															}
															setEstiloImgProd1Array(estiloImgProd);
														}}
														key={'opcImg-' + item._id}
													>
														<img
															src={item.url}
															id={'imgProd-' + item._id}
															alt="imagem produto"
														/>
													</button>
												);
											} else return <></>;
										}
									)}
								</FotosAdcPrd>
								<FotoPrd id="fotoPrd" className="fotoPrd">
									{produto?.categoriaProduto[obj].imagemProduto.map(
										(item: { url: string | undefined; _id: string }) => {
											if (item.url !== undefined) {
												return (
													<FotoPrd
														id="fotoPrd"
														className="fotoPrd"
														key={`fotoPrd-${item._id}`}
													>
														<img
															src={item.url}
															alt="imagem produto"
															id={'imgPrd-' + item._id}
														/>
													</FotoPrd>
												);
											} else return <></>;
										}
									)}
								</FotoPrd>
								<form onSubmit={comprarItem}>
									<DescAnunPrd id="descAnunPrd" className="descAnunPrd">
										<ConteudoDescAnunPrd
											id="conteudoDescAnunPrd"
											className="conteudoDescAnunPrd"
										>
											<p id="titDescPrd" className="titDescPrd">
												{categoria[obj].nome}
											</p>
											<p id="frtGrtsCard" className="frtGrtsCard">
												Frete Grátis
											</p>
											<p id="prcPrd" className="prcPrd">
												R${categoria[obj].preco}
											</p>
											<p id="subTitPrd" className="subTitPrd">
												em até 12x de R$
												{newParcela.toString().replace('.', ',')}
											</p>
											<div id="tmnhQtd" className="tmnhQtd">
												<p>Quantidade</p>
												<ThTabela>
													<BotaoNumber
														onClick={() => {
															if (quantidadeCategoria !== 1) {
																const newquantidade = quantidadeCategoria - 1;

																setQuantidade(newquantidade.toString());
															}
														}}
													>
														<button type="button">-</button>
													</BotaoNumber>
													<input
														type="number"
														value={quantidade}
														placeholder="Nº"
														min="1"
														required
														max={categoria[obj].quantidade}
														onChange={(evento) =>
															setQuantidade(evento.target.value)
														}
														id="quantidade-produto-input"
													/>
													<BotaoNumber
														onClick={() => {
															const newquantidade = quantidadeCategoria + 1;
															setQuantidade(newquantidade.toString());
														}}
													>
														<button type="button">+</button>
													</BotaoNumber>
												</ThTabela>
											</div>
											<div id="btnLinkPrd" className="btnLinkPrd">
												<input type="submit" value="Comprar" />
												<a href={'#'}>Calcular frete</a>
											</div>
										</ConteudoDescAnunPrd>
									</DescAnunPrd>
								</form>
							</GridVisuPrd>
						</VisualizacaoPrd>
					)}
					{spinner && (
						<DivCarregando>
							<img src={SvgLodding} alt="animação de carregando" />
						</DivCarregando>
					)}
					<Footer />
				</>
			);
		} else {
			return <>{(window.location.href = '/login')}</>;
		}
	} else return <></>;
};
export default ComprarProduto;
