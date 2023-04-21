import React, { useEffect, useState } from 'react';
import IProduto from '../../../../../utils/interfaces/IProduto';
import apiFullSports from '../../../../../api/apiFullSports';
import './../../../styles.css';
import { Box, Button, Modal } from '@mui/material';
import { GoTrashcan } from 'react-icons/go';
import { FiEdit } from 'react-icons/fi';

const TabelaProduto = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const urlParams = new URLSearchParams(window.location.search);
	const categoriaParam = urlParams.get('categoria');
	const handleClose = () => {
		setOpen(false);
	};
	const [, setSpinner] = useState(false);
	const [produto, setProduto] = useState<IProduto[]>([]);
	useEffect(() => {
		setSpinner(true);
		apiFullSports
			.get<IProduto[]>('listar-produtos/')
			.then((response) => {
				setProduto(response.data);
				setSpinner(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const deletar = (DeletarProduto: IProduto) => {
		apiFullSports
			.delete(`deletar-produto/${DeletarProduto._id}/`)
			.then(() => {
				window.location.reload();
			})
			.catch((err) => console.log(err));
	};

	if (!categoriaParam) {
		return (
			<>
				{produto.map((item) => {
					const categoriaDeproduto = item.categoriaProduto;
					const obj = Object.keys(categoriaDeproduto)[0].toString() as
						| 'roupa'
						| 'equipamento'
						| 'suplemento'
						| 'calcado';
					let urImg;

					if (categoriaDeproduto[obj].imagemProduto.length === 0) urImg = '';
					else urImg = categoriaDeproduto[obj].imagemProduto[0].url;
					const dataCadastro = new Date(item.dataCadastro);
					const dia =
						dataCadastro.getUTCDate().toLocaleString().length == 1
							? '0' + dataCadastro.getUTCDate().toLocaleString().length
							: dataCadastro.getUTCDate();
					const mes =
						(dataCadastro.getMonth() + 1).toString().length == 1
							? '0' + (dataCadastro.getMonth() + 1).toString()
							: (dataCadastro.getMonth() + 1).toString();
					const ano = dataCadastro.getFullYear().toString();
					return (
						<tr key={item._id.toString()}>
							<td>{categoriaDeproduto[obj].fornecedor.cnpj}</td>
							<td>{categoriaDeproduto[obj].nome}</td>
							<td>{obj}</td>
							<td>{categoriaDeproduto[obj].sexo}</td>
							<td>{categoriaDeproduto[obj].cor}</td>
							<td>{categoriaDeproduto[obj].preco}</td>
							<td>{categoriaDeproduto[obj].tamanho as number}</td>
							<td>{categoriaDeproduto[obj].quantidade as number}</td>
							<td>{`${dia}/${mes}/${ano}`}</td>
							<td className="img-consulta">
								<img src={urImg} width="100" alt="primeira imagem de produto" />
							</td>
							<td>
								<div className="acoes-btn-group">
									<a href={`/dashboard/atualizar-produto/${item._id}`}>
										<button className="btn-edit">
											{' '}
											<FiEdit />{' '}
										</button>
									</a>
									<React.Fragment>
										<button className="btn-exclui" onClick={handleOpen}>
											<GoTrashcan />
										</button>
										<Modal
											hideBackdrop
											open={open}
											onClose={handleClose}
											aria-labelledby="child-modal-title"
											aria-describedby="child-modal-description"
											className="modal-container"
										>
											<Box className="confirma-menesagem">
												<h2 id="child-modal-title">
													Deseja mesmo esse produto{' '}
													{categoriaDeproduto[obj].nome} ?
												</h2>
												<div className="btns-confirma-cont">
													<Button
														onClick={() => deletar(item)}
														variant="outlined"
														color="error"
													>
														Excluir
													</Button>
													<Button onClick={handleClose} variant="outlined">
														Cancelar
													</Button>
												</div>
											</Box>
										</Modal>
									</React.Fragment>
								</div>
							</td>
						</tr>
					);
				})}
			</>
		);
	} else {
		return (
			<>
				{produto.map((item) => {
					const categoriaDeproduto = item.categoriaProduto;
					const obj = Object.keys(categoriaDeproduto)[0].toString() as
						| 'roupa'
						| 'equipamento'
						| 'suplemento'
						| 'calcado';
					console.log(obj);
					let urImg;
					if (obj === categoriaParam) {
						if (categoriaDeproduto[obj].imagemProduto.length === 0) urImg = '';
						else urImg = categoriaDeproduto[obj].imagemProduto[0].url;
						const dataCadastro = new Date(item.dataCadastro);
						const dia =
							dataCadastro.getUTCDate().toLocaleString().length == 1
								? '0' + dataCadastro.getUTCDate().toLocaleString().length
								: dataCadastro.getUTCDate();
						const mes =
							(dataCadastro.getMonth() + 1).toString().length == 1
								? '0' + (dataCadastro.getMonth() + 1).toString()
								: (dataCadastro.getMonth() + 1).toString();
						const ano = dataCadastro.getFullYear().toString();
						return (
							<tr key={item._id.toString()}>
								<td>{categoriaDeproduto[obj].fornecedor.cnpj}</td>
								<td>{categoriaDeproduto[obj].nome}</td>
								<td>{obj}</td>
								<td>{categoriaDeproduto[obj].sexo}</td>
								<td>{categoriaDeproduto[obj].cor}</td>
								<td>{categoriaDeproduto[obj].preco}</td>
								<td>{categoriaDeproduto[obj].tamanho as number}</td>
								<td>{categoriaDeproduto[obj].quantidade as number}</td>
								<td>{`${dia}/${mes}/${ano}`}</td>
								<td className="img-consulta">
									<img
										src={urImg}
										width="100"
										alt="primeira imagem de produto"
									/>
								</td>
								<td>
									<div className="acoes-btn-group">
										<a href={`/dashboard/atualizar-produto/${item._id}`}>
											<button className="btn-edit">
												{' '}
												<FiEdit />{' '}
											</button>
										</a>
										<React.Fragment>
											<button className="btn-exclui" onClick={handleOpen}>
												<GoTrashcan />
											</button>
											<Modal
												hideBackdrop
												open={open}
												onClose={handleClose}
												aria-labelledby="child-modal-title"
												aria-describedby="child-modal-description"
												className="modal-container"
											>
												<Box className="confirma-menesagem">
													<h2 id="child-modal-title">
														Deseja mesmo esse produto{' '}
														{categoriaDeproduto[obj].nome} ?
													</h2>
													<div className="btns-confirma-cont">
														<Button
															onClick={() => deletar(item)}
															variant="outlined"
															color="error"
														>
															Excluir
														</Button>
														<Button onClick={handleClose} variant="outlined">
															Cancelar
														</Button>
													</div>
												</Box>
											</Modal>
										</React.Fragment>
									</div>
								</td>
							</tr>
						);
					}
				})}
			</>
		);
	}
};
export default TabelaProduto;
