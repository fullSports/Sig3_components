import { useEffect, useState, Fragment } from 'react';
import '../../../../dashboard/styles.css';
import { GoTrashcan } from 'react-icons/go';
import { FiEdit } from 'react-icons/fi';
import IFornecedor from '../../../../../utils/interfaces/IFornecedor';
import apiFullSports from '../../../../../api/apiFullSports';
import { Box, Button, Modal } from '@mui/material';
import DashboardSidenav from '../../../Components/Sidenav';
import DashboardHeader from '../../../Components/Header';
import SvgCarregando from '../../../../../assets/icons/caarregando.svg';
const ConsultarFornecedores = () => {
	interface EsolherFornecedor {
		_id: string;
		nome: string;
	}
	const [open, setOpen] = useState(false);
	const [fornercertoEscolhido, setFornercertoEscolhido] =
		useState<EsolherFornecedor | null>(null);
	const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
	const [menssagemErro, setMenssagemErro] = useState('');
	const [spinner, setSpinner] = useState(false);
	const [fornecedores, setFornecedores] = useState<IFornecedor[]>([]);

	const handleOpen = (idFornecedor: EsolherFornecedor) => {
		setFornercertoEscolhido(idFornecedor);
		setOpen(true);
	};
	const handleClose = () => {
		setFornercertoEscolhido(null);
		setOpen(false);
	};
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

	const deletar = (DeletarFornecedor: string | undefined) => {
		setSpinner(true);
		apiFullSports
			.delete(`deletar-fornecedor/${DeletarFornecedor}`)
			.then(() => {
				setSpinner(false);
				setFornercertoEscolhido(null);
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
						{spinner ? (
							<div style={{ display: 'flex', justifyContent: 'center' }}>
								<img src={SvgCarregando} alt="imagem de spinner, carregando" />
							</div>
						) : (
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
																<button
																	onClick={() =>
																		handleOpen({
																			_id: item._id,
																			nome: item.nomeEmpresa,
																		})
																	}
																>
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
																			{fornercertoEscolhido?.nome}
																		</h2>
																		<div className="btns-confirma-cont">
																			<Button
																				onClick={() =>
																					deletar(fornercertoEscolhido?._id)
																				}
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
									{mensagemErroBolean && (
										<span id="menssagem-erro">{menssagemErro}</span>
									)}
								</table>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
export default ConsultarFornecedores;
