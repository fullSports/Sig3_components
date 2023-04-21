import { useEffect, useState, Fragment } from 'react';
import '../../../../dashboard/styles.css';
import { GoTrashcan } from 'react-icons/go';
import { FiEdit } from 'react-icons/fi';
import IFornecedor from '../../../../../utils/interfaces/IFornecedor';
import apiFullSports from '../../../../../api/apiFullSports';
import { Box, Button, Modal } from '@mui/material';
import DashboardSidenav from '../../../Components/Sidenav';
import DashboardHeader from '../../../Components/Header';

const ConsultarFornecedores = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
	const [menssagemErro, setMenssagemErro] = useState('');
	const [spinner, setSpinner] = useState(false);
	const [fornecedores, setFornecedores] = useState<IFornecedor[]>([]);

	useEffect(() => {
		setSpinner(true);
		apiFullSports
			.get<IFornecedor[]>('listar-fornecedores/')
			.then((resposta) => {
				setFornecedores(resposta.data);
				setSpinner(false);
			})
			.catch((err) => {
				console.log(err);
				setMensagemErroBolean(true);
				setMenssagemErro('Erro ao buscar o cep');
			});
	}, []);

	const deletar = (DeletarFornecedor: IFornecedor) => {
		setSpinner(true);
		apiFullSports
			.delete(`deletar-fornecedor/${DeletarFornecedor._id}`)
			.then(() => {
				setSpinner(false);
				window.location.reload();
			})
			.catch((err) => {
				console.log(err);
				setMensagemErroBolean(true);
				setMenssagemErro('Erro ao buscar o cep');
			});
	};

	return (
		<>
			<div className="flex">
				<DashboardSidenav />
				<div className="page-body">
					<DashboardHeader />
					<div className="table-container">
						<div className="table-title">
							<span id="exibe-titulo" className="consulta-titulo">
								Lista de Fornecedores
							</span>
						</div>
						<div className="panel-table">
							<table className="table-consulta">
								<thead>
									<tr>
										<th>CNPJ</th>
										<th>Nome da Empresa</th>
										<th>Cep</th>
										<th>Endereço</th>
										<th>Data de Cadastro</th>
										<th>Ações</th>
									</tr>
								</thead>
								<tbody>
									{fornecedores.map((item) => {
										const dataCadastro = new Date(item.dataCadastro);
										const dia =
											dataCadastro.getUTCDate().toLocaleString().length == 1
												? '0' +
												  dataCadastro.getUTCDate().toLocaleString().length
												: dataCadastro.getUTCDate();
										const mes =
											(dataCadastro.getMonth() + 1).toString().length == 1
												? '0' + (dataCadastro.getMonth() + 1).toString()
												: (dataCadastro.getMonth() + 1).toString();
										const ano = dataCadastro.getFullYear().toString();
										return (
											<tr key={item._id.toString()}>
												<td>{item.cnpj}</td>
												<td>{item.nomeEmpresa}</td>
												<td>{item.cep}</td>
												<td>{item.endereco}</td>
												<td>{`${dia}/${mes}/${ano}`}</td>
												<td>
													<div className="acoes-btn-group">
														<a
															href={`/dashboard/atualizar-fornecedor/${item._id}`}
														>
															<button className="btn-edit">
																{' '}
																<FiEdit />{' '}
															</button>
														</a>
														<Fragment>
															<button onClick={handleOpen}>
																<GoTrashcan />
															</button>
															<Modal
																className="modal-container"
																hideBackdrop
																open={open}
																onClose={handleClose}
																aria-labelledby="child-modal-title"
																aria-describedby="child-modal-description"
															>
																<Box className="confirma-menesagem">
																	<h2 id="child-modal-title">
																		Deseja mesmo excluir a empresa{' '}
																		{item.nomeEmpresa} ?
																	</h2>
																	<div className="btns-confirma-cont">
																		<Button
																			onClick={() => deletar(item)}
																			variant="outlined"
																			color="error"
																			className="btn-exclui"
																		>
																			Excluir
																		</Button>
																		<Button
																			onClick={handleClose}
																			variant="outlined"
																			className="btnCancel"
																		>
																			Cancelar
																		</Button>
																	</div>
																</Box>
															</Modal>
														</Fragment>
													</div>
												</td>
											</tr>
										);
									})}
								</tbody>
								{spinner && <p>carregando...</p>}
								{mensagemErroBolean && (
									<span id="menssagem-erro">{menssagemErro}</span>
								)}
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ConsultarFornecedores;
