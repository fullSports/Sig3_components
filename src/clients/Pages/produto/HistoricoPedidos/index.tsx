import { useState, useEffect } from 'react';
import Footer from '../../../Components/Footer';
import Cabecalho from '../../../Components/Menu/Header';
import IPedido from '../../../../utils/interfaces/IPedido';
import apiFullSports from '../../../../api/apiFullSports';
import SvgCarregando from '../../../../assets/icons/caarregando.svg';
const HistoricoPedidos = () => {
	const [pedido, setPedido] = useState<IPedido[]>([]);
	const [spinner, setSpinner] = useState(false);
	const [spinnerPedido, setSpinnerPedido] = useState(false);
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
				apiFullSports
					.delete(`deletar-pedido/${item._id}`)
					.then(() => {
						alert('Pedido cancelado com sucesso');
						location.reload();
						setSpinnerPedido(false);
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
										<button
											className="btn-exclui"
											onClick={() => cancelarPedido(item._id)}
										>
											Cancelar Pedido
										</button>
										{spinnerPedido ? (
											<div
												style={{ display: 'flex', justifyContent: 'center' }}
											>
												<img
													src={SvgCarregando}
													width="30"
													height="30"
													alt="imagem de spinner, carregando"
												/>
											</div>
										) : (
											<></>
										)}
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
					<span className="consulta-titulo">Histórico de pedidos</span>
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
								{spinner ? (
									<div style={{ display: 'flex', justifyContent: 'center' }}>
										<img
											src={SvgCarregando}
											alt="imagem de spinner, carregando"
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
			<Footer />
		</>
	);
};
export default HistoricoPedidos;
