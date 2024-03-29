import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
	Button,
	TextField,
	FormControl,
	Select,
	InputLabel,
	MenuItem,
	Box,
	Modal,
} from '@mui/material';
import apiFullSports from '../../../../../api/apiFullSports';
import ApiCep from '../../../../../api/apiCep';
import { useParams } from 'react-router-dom';
import ICliente from '../../../../../utils/interfaces/ICliente';
import DashboardHeader from '../../../Components/Header';
import DashboardSidenav from '../../../Components/Sidenav';
import SinalMais from '../../../../../assets/icons/sinalMais.png';
import UpdateToken from '../../../../../api/updateToken';
import { AxiosError } from 'axios';

const Icone = styled.div`
	background-color: #a49898;
	height: 50px;
	width: 50px;
	cursor: pointer;
	border-radius: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		height: 50px;
		width: 50px;
		border-radius: 100px;
	}
	.sinal-mais-imagem {
		display: none;
	}
`;
const IconePage = styled.div`
	background-color: #a49898;
	height: 50px;
	width: 50px;
	cursor: pointer;
	border-radius: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		height: 50px;
		width: 50px;
		border-radius: 100px;
	}
	.sinal-mais-imagem {
		display: none;
	}
	:hover {
		.sinal-mais-imagem {
			display: inline;
			width: 50%;
			height: 50%;
		}
		.texto-imagem-pergil {
			display: none;
		}
		.foto-perfil-page {
			display: none;
		}
	}
`;
const AtualizarImagemLabel = styled.label`
	cursor: pointer;
	text-transform: uppercase;
	color: #fff;
	border: solid 1px #ffffff;
	margin-top: 4%;
	margin-bottom: 4%;
	display: flex;
	padding: 10px 10px;
`;
const AtualizarAdministrador = () => {
	const parametros = useParams();
	const [cpf, setCpf] = useState('');
	const [nome, setNome] = useState('');
	const [dataNascimento, setDataNascimento] = useState('');
	const [sexo, setSexo] = useState('');
	const [cep, setCep] = useState('');
	const [rua, setRua] = useState('');
	const [bairro, setBairro] = useState('');
	const [estado, setEstado] = useState('');
	const [cidade, setCidade] = useState('');
	const [complemento, setComplemento] = useState('');
	const [numero, setNumero] = useState('');
	const [file, setImagem] = useState<File | null>(null);
	const [spinner, setSpinner] = useState(false);
	const [imagemId, setImagemID] = useState('');
	const [imagemPerfilurl, setImagemPerfilurl] = useState('');
	const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
	const [menssagemErro, setMenssagemErro] = useState('');
	const [cadastrarNovaFoto, setCadastrarNovaFoto] = useState(false);
	const [carregandoCep, setCarregandoCep] = useState(false);
	const [carregandoCepMenssagem, setCarregandoCepMessagem] = useState(false);
	const [nomePerfilPage, setNomePerfilPage] = useState('');
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	useEffect(() => {
		if (parametros.id) {
			apiFullSports
				.get<ICliente>(`listar-cliente/${parametros.id}`)
				.then((resposta) => {
					setCpf(resposta.data.cpf);
					setNome(resposta.data.nome);
					setNomePerfilPage(resposta.data.nome);
					setDataNascimento(resposta.data.dataNascimento);
					setSexo(resposta.data.sexo);
					setCep(resposta.data.cep);
					const enderecoSplit = resposta.data.endereco.split('-');
					setComplemento(enderecoSplit[1]);
					const numeroSlit = enderecoSplit[0].split(',');
					setNumero(numeroSlit[numeroSlit.length - 1]);
					if (!resposta.data.imagemPerfil) {
						setImagemID('');
						setImagemPerfilurl('');
					} else {
						setImagemID(resposta.data.imagemPerfil._id);
						setImagemPerfilurl(resposta.data.imagemPerfil.url);
					}
				})
				.catch((err) => {
					console.log(err);
					setMensagemErroBolean(true);
					setMenssagemErro(err.response?.data.message[0].toString());
					if (err.response?.status === 401) {
						UpdateToken();
					}
				});
		}
	}, [parametros]);

	const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
		if (evento.target.files?.length) {
			setImagem(evento.target.files[0]);
			setCadastrarNovaFoto(true);
		} else {
			setImagem(null);
		}
	};
	function cadastrarFotoPerfil() {
		if (imagemId === '') {
			const formData1 = new FormData();
			if (file) {
				formData1.append('file', file);
			}
			setSpinner(true);
			apiFullSports
				.request({
					url: 'imagem/',
					method: 'POST',
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Content-Type': 'multipart/form-data',
					},
					data: formData1,
				})
				.then((evento) => {
					apiFullSports
						.request({
							method: 'PUT',
							url: `atualizar-cliente/${parametros.id}`,
							data: {
								imagemPerfil: evento.data.image._id,
							},
						})
						.then((response) => {
							setSpinner(false);
							setCadastrarNovaFoto(false);
							setImagemID(response.data.user.imagemPerfil._id);
							setImagemPerfilurl(response.data.user.imagemPerfil.url);

							window.location.reload();
						})
						.catch((err: AxiosError) => {
							console.log(err);
							if (err.response?.status === 401) {
								UpdateToken();
							}
						});
				})
				.catch((err) => {
					console.log(err);
					if (err.response?.status === 401) {
						UpdateToken();
					}
				});
		} else {
			apiFullSports
				.delete(`imagem/${imagemId}`)
				.then(() => {
					setSpinner(true);
					setImagemID('');

					const formData1 = new FormData();
					if (file) {
						formData1.append('file', file);
					}
					apiFullSports
						.request({
							url: 'imagem/',
							method: 'POST',
							headers: {
								'Access-Control-Allow-Origin': '*',
								'Content-Type': 'multipart/form-data',
							},
							data: formData1,
						})
						.then((evento) => {
							apiFullSports
								.request({
									method: 'PUT',
									url: `atualizar-cliente/${parametros.id}`,
									data: {
										imagemPerfil: evento.data.image._id,
									},
								})
								.then((response) => {
									setSpinner(false);
									setCadastrarNovaFoto(false);
									setImagemID(response.data.user.imagemPerfil._id);
									setImagemPerfilurl(response.data.user.imagemPerfil.url);

									window.location.reload();
								})
								.catch((err) => {
									console.log(err);
									if (err.response?.status === 401) {
										UpdateToken();
									}
								});
						})
						.catch((err) => {
							console.log(err);
							if (err.response?.status === 401) {
								UpdateToken();
							}
						});
				})
				.catch((err) => {
					console.log(err);
					if (err.response?.status === 401) {
						UpdateToken();
					} else {
						window.location.reload();
					}
				});
		}
	}

	const deletarFoto = () => {
		apiFullSports.delete(`imagem/${imagemId}`).then(() => {
			setImagemID('');
			setTimeout(function () {
				window.location.reload();
			}, 100);
		});
	};
	function buscaCep() {
		setCarregandoCep(true);
		setCarregandoCepMessagem(false);
		if (cep === '') {
			setCarregandoCep(false);
			setRua('');
			setBairro('');
			setEstado('');
			setCidade('');
		} else {
			ApiCep.request({
				method: 'GET',
				url: cep,
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
			})
				.then((evento) => {
					setCarregandoCep(false);
					setRua(evento.data.street.split('-')[0]);
					setBairro(evento.data.neighborhood);
					setEstado(evento.data.state);
					setCidade(evento.data.city);
				})
				.catch((err) => {
					if (err.response?.status === 401) {
						UpdateToken();
					}
					setCarregandoCep(false);
					setCarregandoCepMessagem(true);
					console.log(err);
				});
		}
	}
	function buscaCepCarregarPage() {
		ApiCep.request({
			method: 'GET',
			url: cep,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		}).then((evento) => {
			setRua(evento.data.street.split('-')[0]);
			setBairro(evento.data.neighborhood);
			setEstado(evento.data.state);
			setCidade(evento.data.city);
		});
	}
	setTimeout(buscaCepCarregarPage, 222);

	const IconePerfil = () => {
		if (imagemId === '') {
			return (
				<Icone
					className="icone"
					onClick={handleOpen}
					key={'icone-perfil-letra'}
				>
					<p className="texto-imagem-pergil">{nome.charAt(0)}</p>
				</Icone>
			);
		} else {
			return (
				<Icone className="icone" onClick={handleOpen} key={'icone-perfil-foto'}>
					<img src={imagemPerfilurl} alt="imagem de perfil" />
				</Icone>
			);
		}
	};
	const IconePerfilPage = () => {
		if (imagemId === '') {
			return (
				<IconePage className="icone" onClick={handleOpen} key={'icone-perfil'}>
					<p className="texto-imagem-pergil">{nome.charAt(0)}</p>
					<img
						src={SinalMais}
						className="sinal-mais-imagem"
						alt="imagem de sinal de mais"
					/>
				</IconePage>
			);
		} else {
			return (
				<IconePage className="icone" onClick={handleOpen} key={'icone-perfil'}>
					<img
						src={imagemPerfilurl}
						className="foto-perfil-page"
						alt="imagem de perfil"
					/>
					<img
						src={SinalMais}
						className="sinal-mais-imagem"
						alt="imagem de sinal de mais"
					/>
				</IconePage>
			);
		}
	};
	const OpcoesFotoPerfil = () => {
		if (imagemId === '' || imagemPerfilurl === '') {
			return (
				<Box
					component={'div'}
					sx={{ marginTop: '5.5%', marginRight: '3%' }}
					key={'div-upload-imagem'}
				>
					<Box
						component={'div'}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							paddingBottom: '1%',
						}}
					>
						<IconePerfil />
					</Box>
					<Box
						component={'div'}
						sx={{ display: 'grid' }}
						id="tela-imagem-opcoes"
					>
						<div>
							<AtualizarImagemLabel htmlFor="file">
								Escolher foto...
							</AtualizarImagemLabel>
							<input
								onChange={selecionarArquivo}
								className="txt-form"
								id="file"
								type="file"
								name="file"
								accept="image/jpeg, image/pjpeg, image/png, image/gif"
							/>
						</div>
						{cadastrarNovaFoto && (
							<Button
								variant="outlined"
								sx={{ border: '2px solid' }}
								onClick={cadastrarFotoPerfil}
							>
								Cadastrar Nova Foto
							</Button>
						)}

						{mensagemErroBolean && (
							<span id="menssagem-erro">{menssagemErro}</span>
						)}
						<Button
							variant="outlined"
							sx={{ border: '2px solid' }}
							onClick={handleClose}
						>
							Fechar
						</Button>
					</Box>
				</Box>
			);
		} else {
			return (
				<Box
					component={'div'}
					sx={{ marginTop: '5.5%', marginRight: '3%' }}
					key={'div-upload-imagem'}
				>
					<Box
						component={'div'}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							paddingBottom: '1%',
						}}
					>
						<IconePerfil />
					</Box>
					<Box
						component={'div'}
						sx={{ display: 'grid' }}
						id="tela-imagem-opcoes"
					>
						<Button
							color="error"
							variant="outlined"
							sx={{ border: '2px solid alert' }}
							onClick={deletarFoto}
						>
							Excluir Foto
						</Button>
						<div>
							<AtualizarImagemLabel htmlFor="file">
								Escolher foto...
							</AtualizarImagemLabel>
							<input
								onChange={selecionarArquivo}
								className="txt-form"
								id="file"
								type="file"
								name="file"
								accept="image/jpeg, image/pjpeg, image/png, image/gif"
							/>
						</div>
						{cadastrarNovaFoto && (
							<Button
								variant="outlined"
								sx={{ border: '2px solid' }}
								onClick={cadastrarFotoPerfil}
							>
								Cadastrar Nova Foto
							</Button>
						)}
						<Button
							variant="outlined"
							sx={{ border: '2px solid' }}
							onClick={handleClose}
						>
							Fechar
						</Button>
					</Box>
				</Box>
			);
		}
	};
	function aoSubmeterForm(evento: React.FormEvent<HTMLFormElement>) {
		evento.preventDefault();
		setSpinner(true);
		if (parametros.id) {
			apiFullSports
				.put(`atualizar-cliente/${parametros.id}`, {
					cpf,
					nome,
					dataNascimento,
					sexo,
					cep,
					endereco: `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`,
					imagemPerfil: imagemId,
				})
				.then(() => {
					setSpinner(false);
					// alert("cliente atualizado com suceeso");
					window.location.href = '/dashboard/consultar-admin';
				})
				.catch((err) => {
					if (err.response?.status === 401) {
						UpdateToken();
					}
					setCarregandoCep(false);
					setCarregandoCepMessagem(true);
					console.log(err);
				});
		}
	}

	return (
		<>
			<div className="flex" key={'atualizar-admin-flex'}>
				<DashboardSidenav key={'subMenu-atualizar-admin'} />
				<div id="main" className="dashboard-body">
					<DashboardHeader key={'Header-atualizar-admin'} />
					<div className="my-16">
						<div className="profile-details-title">
							<span className="exibe-titulo">
								Atualizar dados de {nomePerfilPage} <IconePerfilPage />
							</span>
						</div>
						<div id="form-cadastro-cliente" className="form-cadastro-cliente">
							<Box
								component={'form'}
								onSubmit={aoSubmeterForm}
								encType="multipart/form-data"
							>
								<div className="row-grid">
									<label className="col-form-label">
										CPF
										<TextField
											sx={{
												boxSizing: 'border-box',
												margin: '0 0 15px',
												width: '100%',
											}}
											onChange={(evento) => setCpf(evento.target.value)}
											className="txt-form"
											id="cpf"
											type="text"
											placeholder={'00.000.000-00'}
											fullWidth
											required
											value={cpf}
										/>
									</label>

									<label className="col-form-label">
										Nome
										<TextField
											sx={{
												boxSizing: 'border-box',
												margin: '0 0 15px',
												width: '100%',
											}}
											onChange={(evento) => setNome(evento.target.value)}
											className="txt-form"
											id="nome"
											type="text"
											placeholder={'Digite seu nome'}
											fullWidth
											required
											value={nome}
										/>
									</label>
								</div>
								<div className="row-grid">
									<label className="col-form-label">
										Data de Nascimento
										<TextField
											sx={{
												boxSizing: 'border-box',
												margin: '0 0 15px',
												width: '100%',
											}}
											onChange={(evento) =>
												setDataNascimento(evento.target.value)
											}
											className="txt-form"
											id="data"
											type="text"
											placeholder={'__/__/____'}
											fullWidth
											required
											value={dataNascimento}
										/>
									</label>
									<label className="col-form-label">
										Sexo
										<FormControl fullWidth margin="dense">
											<InputLabel id="sexo">Sexo</InputLabel>
											<Select
												className="txt-form"
												labelId="sexo"
												sx={{
													boxSizing: 'border-box',
													margin: '0 0 15px',
													width: '100%',
												}}
												value={sexo}
												onChange={(evento) => setSexo(evento.target.value)}
												required
											>
												<MenuItem key={''} value={''}></MenuItem>
												<MenuItem key={'M'} value={'M'}>
													Masculino
												</MenuItem>
												<MenuItem key={'F'} value={'F'}>
													Feminino
												</MenuItem>
												<MenuItem key={'O'} value={'O'}>
													Outros
												</MenuItem>
												<MenuItem key={'-'} value={'-'}>
													Prefiro não dizer
												</MenuItem>
											</Select>
										</FormControl>
									</label>
								</div>
								<div className="row-grid">
									<label className="col-form-label">
										Cep {carregandoCep && <p>buscando cep...</p>}
										{carregandoCepMenssagem && (
											<p id="menssagem-erro">cep invalido</p>
										)}
										<TextField
											onChange={(evento) => setCep(evento.target.value)}
											sx={{
												boxSizing: 'border-box',
												margin: '0 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="cep"
											type="text"
											placeholder={'00000-000'}
											fullWidth
											required
											onBlur={buscaCep}
											value={cep}
										/>
									</label>
									<label className="col-form-label">
										Rua
										<TextField
											onChange={(evento) => setRua(evento.target.value)}
											sx={{
												boxSizing: 'border-box',
												margin: '0 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="rua"
											type="text"
											placeholder={'Digite sua rua'}
											fullWidth
											required
											value={rua}
										/>
									</label>
								</div>
								<div className="row-grid">
									<label className="col-form-label">
										Bairro
										<TextField
											onChange={(evento) => setBairro(evento.target.value)}
											sx={{
												boxSizing: 'border-box',
												margin: '0 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="bairro"
											type="text"
											placeholder={'Digite seu Bairro'}
											fullWidth
											required
											value={bairro}
										/>
									</label>

									<label className="col-form-label">
										Estado
										<TextField
											onChange={(evento) => setEstado(evento.target.value)}
											sx={{
												boxSizing: 'border-box',
												margin: '0 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="estado"
											type="text"
											placeholder={'Digite seu estado'}
											fullWidth
											required
											value={estado}
										/>
									</label>
								</div>
								<div className="row-grid">
									<label className="col-form-label">
										Cidade
										<TextField
											onChange={(evento) => setCidade(evento.target.value)}
											sx={{
												boxSizing: 'border-box',
												margin: '0 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="cidade"
											type="text"
											placeholder={'Digite sua Cidade'}
											fullWidth
											required
											value={cidade}
										/>
									</label>
									<label className="col-form-label">
										Número
										<TextField
											onChange={(evento) => setNumero(evento.target.value)}
											sx={{
												boxSizing: 'border-box',
												margin: '0 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="numero"
											type="number"
											fullWidth
											required
											value={parseInt(numero)}
										/>
									</label>

									<label className="col-form-label">
										Complemento
										<TextField
											onChange={(evento) => setComplemento(evento.target.value)}
											sx={{
												boxSizing: 'border-box',
												margin: '0 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="complemento"
											type="text"
											placeholder={'casa/apartamento'}
											fullWidth
											required
											value={complemento}
										/>
									</label>
								</div>

								{spinner && <p>carregando...</p>}
								{mensagemErroBolean && (
									<span id="menssagem-erro">{menssagemErro}</span>
								)}

								<div className="btn-group">
									<button
										type="submit"
										id="btn-cad-forms"
										className="btn-cad-forms full-btn"
									>
										Atualizar Admin
									</button>
									<button
										onClick={() =>
											(window.location.href = '/dashboard/consultar-admin')
										}
										type="button"
										id="btn-cad-forms"
										className="btn-cad-forms hallow-btn"
									>
										Consulta de Admins
									</button>
								</div>
							</Box>
						</div>
					</div>
					<Modal
						hideBackdrop
						open={open}
						onClose={handleClose}
						id="model"
						key={'model-perfil'}
					>
						<Box
							component={'div'}
							id="tela-imagem"
							className="tela-imagem"
							sx={{
								width: '30%',
								height: '60%',
								position: 'absolute' as const,
								top: '20%',
								left: '35%',
								display: 'flex',
								justifyContent: 'center',
								backgroundColor: '#4e4a4a',
								border: '3px solid #000',
								borderRadius: '20px',
								pt: 2,
								px: 4,
								pb: 3,
							}}
						>
							<OpcoesFotoPerfil />
							<Box component={'div'}>{spinner && <p>carregando...</p>}</Box>
						</Box>
					</Modal>
				</div>
			</div>
		</>
	);
};
export default AtualizarAdministrador;
