import { useState, useEffect } from 'react';
import Footer from '../../../Components/Footer';
import Cabecalho from '../../../Components/Menu/Header';
import IProduto from '../../../../utils/interfaces/IProduto';
import apiFullSports from '../../../../api/apiFullSports';
import styled from 'styled-components';
import SvgCarregando from '../../../../assets/icons/caarregando.svg';
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
	margin-left: 13px;
`;
const ThTabela = styled.th`
	display: grid;
	grid-template-columns: repeat(3, 50px);
	height: auto;
	input {
		width: 50px;
		text-align: center;
	}
`;
const Botoes = styled.div`
	margin-top: 3%;
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(2, 250px);
	button {
		padding: 3px;
		border: 1px solid #000;
		margin-left: 25px;
		margin-right: 25px;
		border-radius: 5px;
	}
`;
const CarrinhoDeCompra = () => {
	const [produto, setProduto] = useState<IProduto>();
	let carrinho = JSON.parse(localStorage.getItem('carrinho') as string);
	const [spinner, setSpinner] = useState(false);
	const [quantidadeProd, setQuantidadeProd] = useState('');
	useEffect(() => {
		if (carrinho) {
			setSpinner(true);
			apiFullSports
				.get<IProduto>(`listar-produto/${carrinho.pedido.produtoID}`)
				.then((resposta) => {
					setProduto(resposta.data);
					setSpinner(false);
				})
				.catch((err) => console.log(err));
			setQuantidadeProd(carrinho.pedido.quantidade);
			setSpinner(false);
		} else {
			carrinho = null;
			setSpinner(false);
		}
	}, []);

	function MostraProduto() {
		if (produto) {
			const categoria = produto?.categoriaProduto;
			const obj = Object.keys(categoria)[0].toString() as
				| 'roupa'
				| 'equipamento'
				| 'suplemento';
			const precoProd = parseFloat(quantidadeProd);
			const precoCategoria = parseFloat(categoria[obj].preco.replace(',', '.'));
			const quantidadeCategoria = parseFloat(quantidadeProd);
			return (
				<tr>
					<th>
						<img
							src={categoria[obj].imagemProduto[0].url}
							alt="imagem do produto"
							width="100"
						/>
					</th>
					<ThTabela>
						<BotaoNumber
							onClick={() => {
								if (quantidadeCategoria > 1) {
									const newquantidade = quantidadeCategoria - 1;
									console.log(newquantidade);
									setQuantidadeProd(newquantidade.toString());
								}
							}}
						>
							<button type="button">-</button>
						</BotaoNumber>
						<input
							type="number"
							value={quantidadeProd}
							placeholder="Nº"
							min="1"
							max={categoria[obj].quantidade}
							onChange={(e) => setQuantidadeProd(e.target.value)}
						/>
						<BotaoNumber
							onClick={() => {
								const newquantidade = quantidadeCategoria + 1;
								console.log(newquantidade);
								setQuantidadeProd(newquantidade.toString());
							}}
						>
							<button type="button">+</button>
						</BotaoNumber>
					</ThTabela>
					<th>{(precoCategoria * precoProd).toFixed(2).replace('.', ',')}</th>
				</tr>
			);
		} else return <></>;
	}

	function cancelarPedido() {
		localStorage.removeItem('carrinho');
		window.location.href = '/';
	}
	function realizarPedido() {
		setSpinner(true);
		apiFullSports
			.request({
				method: 'POST',
				url: 'realizar-pedido',
				data: {
					quantidadePedido: parseInt(quantidadeProd),
					produto: carrinho.pedido.produtoID,
					cliente: carrinho.clienteID,
				},
			})
			.then(() => {
				setSpinner(false);
				localStorage.removeItem('carrinho');
				window.location.href = '/historico-de-pedido';
			})
			.catch((err) => console.log(err));
	}

	if (!carrinho) {
		return (
			<>
				<Cabecalho />

				<div className="table-container">
					<div className="table-title">
						<Botoes>
							<span className="consulta-titulo">O Carrinho estar Vazio</span>
							<button
								className="btn-edit"
								onClick={() => (window.location.href = '/')}
							>
								Voltar Para Home
							</button>
						</Botoes>
					</div>
				</div>

				<Footer />
			</>
		);
	} else {
		if (produto?.categoriaProduto !== undefined) {
			return (
				<>
					<Cabecalho />

					<div className="table-container">
						<div className="table-title">
							<span className="consulta-titulo">Meu Carrinho</span>
							<div className="panel-table">
								<table className="table-consulta">
									<thead>
										<tr>
											<th>Produto</th>
											<th>Quantidade</th>
											<th>Total do Pedido</th>
										</tr>
									</thead>
									<tbody>
										<MostraProduto />
									</tbody>
								</table>
							</div>
							<Botoes>
								<button className="btn-exclui" onClick={cancelarPedido}>
									Cancelar Pedido
								</button>
								<button className="btn-edit" onClick={realizarPedido}>
									Realizar Pedido
								</button>
							</Botoes>
							{spinner && (
								<div style={{ display: 'flex', justifyContent: 'center' }}>
									<img
										src={SvgCarregando}
										alt="imagem de spinner, carregando"
									/>
								</div>
							)}
						</div>
					</div>

					<Footer />
				</>
			);
		} else return <></>;
	}
};
export default CarrinhoDeCompra;
