import { useState, useEffect } from 'react';
import Footer from '../../../Components/Footer';
import Cabecalho from '../../../Components/Menu/Header';
import IPedido from '../../../../utils/interfaces/IPedido';
import apiFullSports from '../../../../api/apiFullSports';

const HistoricoPedidos = () => {
	const [pedido, setPedido] = useState<IPedido[]>([]);
	const [, setSpinner] = useState(false);
	const user = JSON.parse(localStorage.getItem('user') as string);
	useEffect(() => {
		setSpinner(true);
		apiFullSports
			.get<IPedido[]>(`listar-pedidos`)
			.then((resposta) => {
				setPedido(resposta.data);
				setSpinner(false);
			})
			.catch((err) => console.log(err));
	}, []);
	function cancelarPedido(_id: string) {
		setSpinner(true);
		pedido.map((item) => {
			if (item.cliente._id === user._id && item._id === _id) {
				apiFullSports
					.delete(`deletar-pedido/${item._id}`)
					.then(() => {
						alert('Pedido cancelado com sucesso');
						location.reload();
					})
					.catch((err) => console.log(err));
			}
		});
		setSpinner(false);
	}
	function MostraProduto() {
		return (
			<>
				{pedido.map((item) => {
					if (item.cliente._id === user._id) {
						const categoria = item.produto.categoriaProduto;
						const obj = Object.keys(categoria)[0].toString() as
							| 'roupa'
							| 'equipamento'
							| 'suplemento';
						console.log(item);

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
									<th>{item.total}</th>
									<button
										className="btn-exclui"
										onClick={() => cancelarPedido(item._id)}
									>
										Cancelar Pedido
									</button>
								</tr>
							</>
						);
					}
				})}
			</>
		);
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
								<MostraProduto />
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
