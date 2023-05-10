import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import apiFullSports from '../../../../api/apiFullSports';
import IProduto from '../../../../utils/interfaces/IProduto';
import Footer from '../../../Components/Footer';
import Cabecalho from '../../../Components/Menu/Header';
import SvgLodding from '../../../../assets/icons/caarregando.svg';
import SvgLiddingDarkMode from '.././../../../assets/icons/SvgCarregandoDarkMode.svg';
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
				${estiloImgProd1Array.map(
					(item) =>
						`#${item.styles}{display: ${item.display ? 'block' : 'none'}};` +
						`#${item.styles}{border: ${
							item.display ? '1px' : '0px'
						} solid rgb(128, 202, 44);}`
				)}
			`;
			return (
				<>
					<Cabecalho />
					{!spinner && (
						<div
							id="visualizacaoPrd"
							className="visualizacaoPrd"
							style={{ display: `${spinner ? 'none' : 'block'}` }}
						>
							<div id="gridVisuPrd" className="gridVisuPrd">
								<div id="fotosAdcPrd" className="fotosAdcPrd">
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
								</div>
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
								<form
									onSubmit={comprarItem}
									style={{ margin: '0', width: '100%', height: 'auto' }}
									className="descAnunPrd"
								>
									<div>
										<div
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
												<div
													id="thTable-comprar-produto"
													className="thTable-comprar-produto"
												>
													<div
														id="butao-number-comprar-produto"
														className="butao-number-comprar-produto"
														onClick={() => {
															if (quantidadeCategoria !== 1) {
																const newquantidade = quantidadeCategoria - 1;

																setQuantidade(newquantidade.toString());
															}
														}}
													>
														<button type="button">-</button>
													</div>
													<input
														type="number"
														value={quantidade}
														className="input-number-comprar-produto"
														disabled
														min="1"
														max={categoria[obj].quantidade}
														onChange={(evento) =>
															setQuantidade(evento.target.value)
														}
														id="quantidade-produto-input"
													/>
													<div
														id="butao-number-comprar-produto"
														className="butao-number-comprar-produto"
														onClick={() => {
															const newquantidade = quantidadeCategoria + 1;
															setQuantidade(newquantidade.toString());
														}}
													>
														<button type="button">+</button>
													</div>
												</div>
											</div>
											<div id="btnLinkPrd" className="btnLinkPrd">
												<input type="submit" value="Comprar" />
												<a href={'#'}>Calcular frete</a>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					)}
					{spinner && (
						<div id="contenner-lodding" className="contenner-logging">
							<img
								src={SvgLodding}
								className="svg-loddin-lingt"
								alt="animação de carregando"
							/>
							<img
								src={SvgLiddingDarkMode}
								className="svg-loddin-dark-mode"
								alt="animação de carregando"
							/>
						</div>
					)}
					<Footer />
					<img
						src={SvgLiddingDarkMode}
						className="svg-loddin-dark-mode"
						alt="animação de carregando"
					/>
				</>
			);
		} else {
			return <>{(window.location.href = '/login')}</>;
		}
	} else return <></>;
};
export default ComprarProduto;
