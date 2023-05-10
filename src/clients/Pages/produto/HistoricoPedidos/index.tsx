import { useState, useEffect, Suspense } from 'react';
import Footer from '../../../Components/Footer';
import Cabecalho from '../../../Components/Menu/Header';
import IPedido from '../../../../utils/interfaces/IPedido';
import apiFullSports from '../../../../api/apiFullSports';
import SvgCarregando from '../../../../assets/icons/caarregando.svg';
import SvgLoddingDarkMode from '../../../../assets/icons/SvgCarregandoDarkMode.svg';
const HistoricoPedidos = () => {
	const [pedido, setPedido] = useState<IPedido[]>([]);
	const [spinner, setSpinner] = useState(false);
	const [spinnerPedido, setSpinnerPedido] = useState(false);
	const [itemEscolhido, setItemEscolhido] = useState('');
	const user = JSON.parse(localStorage.getItem('user') as string);
	useEffect(() => {
		setSpinner(true);
		apiFullSports
			.get<IPedido[]>(`listar-pedidos`)
			.then((resposta) => {
				setPedido(resposta.data);
				setSpinner(false);
			})
			.catch((err) => {
				setSpinner(false);
				console.log(err);
			});
	}, []);
	function cancelarPedido(_id: string) {
		setSpinnerPedido(true);
		pedido.map((item) => {
			if (item.cliente._id === user._id && item._id === _id) {
				setItemEscolhido(item._id);
				apiFullSports
					.delete(`deletar-pedido/${item._id}`)
					.then(() => {
						setSpinnerPedido(false);
						setTimeout(() => {
							alert('Pedido cancelado com sucesso');
							location.reload();
						}, 100);
					})
					.catch((err) => {
						console.log(err);
						setSpinnerPedido(false);
					});
			}
		});
		setSpinner(false);
	}
	function MostraProduto() {
		if (pedido.length > 0) {
			return (
				<>
					{pedido.map((item) => {
						if (item.cliente._id === user._id) {
							const categoria = item.produto.categoriaProduto;
							const obj = Object.keys(categoria)[0].toString() as
								| 'roupa'
								| 'equipamento'
								| 'suplemento';
							return (
								<>
									<tr>
										<th>
											<img
												src={categoria[obj].imagemProduto[0].url}
												alt="iamgem do produto"
												width="100"
											/>
										</th>
										<th>{item.quantidadePedido}</th>
										<th>R$ {item.total.toFixed(2).replace('.', ',')}</th>
										<th>
											{!spinnerPedido && (
												<button
													style={{
														padding: '10px',
														backgroundColor: '#dbdbdb',
														borderRadius: '10px',
													}}
													className="btn-exclui"
													onClick={() => cancelarPedido(item._id)}
												>
													Cancelar Pedido
												</button>
											)}

											{spinnerPedido && item._id == itemEscolhido ? (
												<div
													id="contenner-lodding"
													className="contenner-logging"
												>
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
												<></>
											)}
										</th>
									</tr>
								</>
							);
						}
					})}
				</>
			);
		} else {
			return <h3>Histórico de Pedido Vazio</h3>;
		}
	}
	return (
		<>
			<Cabecalho />
			<div className="table-container">
				<div className="table-title">
					<div className="table-container">
						<div className="table-title">
							<span className="consulta-titulo">Histórico de Pedidos</span>
						</div>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<table className="table-consulta">
								<thead>
									<tr>
										<th>Produto</th>
										<th>Quantidade</th>
										<th>Total do Pedido</th>
									</tr>
								</thead>
								<tbody>
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
										<MostraProduto />
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
export default HistoricoPedidos;
