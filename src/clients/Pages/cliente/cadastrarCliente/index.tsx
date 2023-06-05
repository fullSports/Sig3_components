import React, { useEffect, useState } from 'react';
import '../../../../styles.css';
import {
	TextField,
	FormControl,
	Select,
	InputLabel,
	MenuItem,
	Box,
} from '@mui/material';
import apiFullSports from '../../../../api/apiFullSports';
import ApiCep from '../../../../api/apiCep';
import Cabecalho from '../../../Components/Menu/Header';
import Footer from '../../../Components/Footer';
import IRESRealizarLogin from '../../../../utils/interfaces/Res/IRESRealizarLogin';
import IRESCastrarCliente from '../../../../utils/interfaces/Res/IRESCastrarCliente';
const CadastroCliente = () => {
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
	const [carregandoCep, setCarregandoCep] = useState(false);
	const [carregandoCepMenssagem, setCarregandoCepMessagem] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
	const [menssagemErro, setMenssagemErro] = useState('');
	const emailCookies = JSON.parse(localStorage.getItem('email') as string);
	useEffect(() => {
		if (emailCookies) {
			setEmail(emailCookies.toString());
		}
	}, [emailCookies]);
	const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
		if (evento.target.files?.length) {
			setImagem(evento.target.files[0]);
		} else {
			setImagem(null);
		}
	};

	function buscaCep() {
		setCarregandoCep(true);
		setCarregandoCepMessagem(false);
		console.log(cep);
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
					setCarregandoCep(false);
					setCarregandoCepMessagem(true);
					console.log(err);
				});
		}
	}

	function aoSubmeterForm(event: React.FormEvent<HTMLFormElement>) {
		setSpinner(true);
		setMensagemErroBolean(false);
		event.preventDefault();
		console.log(email, password);

		const formData = new FormData();
		apiFullSports
			.request({
				method: 'POST',
				url: 'realizar-login',
				data: {
					email,
					password: 'eee',
				},
			})
			.then((res: IRESRealizarLogin) => {
				if (res.data.emailExists) {
					setSpinner(false);
					setMensagemErroBolean(true);
					setMenssagemErro('email já cadastrado');
				} else if (file) {
					formData.append('file', file);
					apiFullSports
						.request({
							method: 'POST',
							url: 'imagem/',
							headers: {
								'Access-Control-Allow-Origin': '*',
								'Content-Type': 'multipart/form-data',
							},
							data: formData,
						})
						.then((respostaImagem) => {
							apiFullSports
								.request({
									method: 'POST',
									url: 'cadastrar-cliente/',
									headers: {
										'Access-Control-Allow-Origin': '*',
									},
									data: {
										cpf,
										nome,
										login: {
											email,
											password,
											isAdmin: false,
										},
										dataNascimento,
										sexo,
										cep,
										endereco: `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`,
										imagemPerfil: respostaImagem.data.image._id,
									},
								})
								.then((res1: IRESCastrarCliente) => {
									if (!res1.data.registeredSuccess) {
										setSpinner(false);
										setMensagemErroBolean(true);
										setMenssagemErro(res1.data.messagem);
									}
									setSpinner(false);
									localStorage.removeItem('email');
									window.location.href = '/login';
								})
								.catch((err) => {
									console.log(err);
									setSpinner(false);
									setMensagemErroBolean(true);
									setMenssagemErro(err.response.data.message[0].toString());
								});
						})
						.catch((err) => {
							console.log(err);
							setSpinner(false);
							setMensagemErroBolean(true);
							setMenssagemErro(err.response.data.message[0].toString());
						});
				} else {
					apiFullSports
						.request({
							method: 'POST',
							url: 'cadastrar-cliente/',
							headers: {
								'Access-Control-Allow-Origin': '*',
							},
							data: {
								cpf,
								nome,
								login: {
									email,
									password,
									isAdmin: false,
								},
								dataNascimento,
								sexo,
								cep,
								endereco: `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`,
								imagemPerfil: null,
							},
						})
						.then((res2: IRESCastrarCliente) => {
							if (res2.data.registeredSuccess === false) {
								setSpinner(false);
								setMensagemErroBolean(true);
								setMenssagemErro(res2.data.messagem);
							} else {
								setSpinner(false);
								localStorage.removeItem('email');
								window.location.href = '/login';
							}
						})
						.catch((err) => {
							console.log(err);
							setSpinner(false);
							setMensagemErroBolean(true);
							setMenssagemErro(err.response.data.message[0].toString());
						});
				}
			})
			.catch((err) => {
				console.log(err);
				setSpinner(false);
				setMensagemErroBolean(true);
				setMenssagemErro(err.response?.data.message[0].toString());
			});
	}
	return (
		<>
			<Cabecalho />
			<div className="flex">
				<div id="main" className="dashboard-body">
					<div className="form-card">
						<div id="form-cadastro-cliente" className="form-cadastro-cliente">
							<span className="form-title">Cadastrar Nova Conta</span>
							<Box
								component={'form'}
								onSubmit={aoSubmeterForm}
								encType="multipart/form-data"
							>
								<div className="form-rows"></div>
								<div className="row-grid">
									<label className="col-form-label">
										Nome Completo
										<TextField
											sx={{
												boxSizing: 'border-box',
												margin: '8px 0 15px',
												width: '100%',
											}}
											onChange={(evento) => setNome(evento.target.value)}
											className="txt-form"
											id="nome"
											type="text"
											placeholder={'Digite o nome do admnistrador.'}
											fullWidth
											required
										/>
									</label>
									<label className="col-form-label">
										CPF
										<TextField
											sx={{
												boxSizing: 'border-box',
												margin: '8px 0 15px',
												width: '100%',
											}}
											onChange={(evento) => setCpf(evento.target.value)}
											className="txt-form"
											id="cpf"
											type="text"
											placeholder={'00.000.000-00'}
											fullWidth
											required
										/>
									</label>
								</div>
								<div className="row-grid">
									<label className="col-form-label">
										Data de Nascimento
										<TextField
											sx={{
												boxSizing: 'border-box',
												margin: '8px 0 15px',
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
													margin: '8px 0 15px',
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
												margin: '8px 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="cep"
											type="text"
											placeholder={'00000-000'}
											fullWidth
											required
											onBlur={buscaCep}
										/>
									</label>

									<label className="col-form-label">
										Rua
										<TextField
											onChange={(evento) => setRua(evento.target.value)}
											sx={{
												boxSizing: 'border-box',
												margin: '8px 0 15px',
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
												margin: '8px 0 15px',
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
												margin: '8px 0 15px',
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
												margin: '8px 0 15px',
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
												margin: '8px 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="numero"
											type="number"
											fullWidth
											required
										/>
									</label>

									<label className="col-form-label">
										Complemento
										<TextField
											onChange={(evento) => setComplemento(evento.target.value)}
											sx={{
												boxSizing: 'border-box',
												margin: '8px 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="complemento"
											type="text"
											placeholder={'casa/apartamento'}
											fullWidth
											required
										/>
									</label>
								</div>
								<div className="row-grid">
									<label className="col-form-label">
										E-mail
										<TextField
											sx={{
												boxSizing: 'border-box',
												margin: '8px 0 15px',
												width: '100%',
											}}
											onChange={(evento) => setEmail(evento.target.value)}
											onClick={() => setMensagemErroBolean(false)}
											className="txt-form"
											id="email"
											type="email"
											placeholder={'Insira seu e-mail'}
											fullWidth
											required
											value={email}
										/>
									</label>

									<label className="col-form-label">
										Senha
										<TextField
											sx={{
												boxSizing: 'border-box',
												margin: '8px 0 15px',
												width: '100%',
											}}
											onChange={(evento) => setPassword(evento.target.value)}
											className="txt-form"
											id="password"
											type="password"
											placeholder={'Insira sua senha'}
											fullWidth
											required
										/>
									</label>
								</div>
								<div className="row-grid-1">
									<label className="col-form-label">
										Imagem de Perfil
										<div className="chose-pic-label">
											<label htmlFor="file">Escolher foto...</label>
										</div>
										<input
											onChange={selecionarArquivo}
											className="txt-form"
											id="file"
											type="file"
											name="file"
											accept="image/jpeg, image/pjpeg, image/png, image/gif"
										/>
									</label>
								</div>
								{spinner && <p>carregando...</p>}
								{mensagemErroBolean && (
									<span id="menssagem-erro">{menssagemErro}</span>
								)}
								<div className="btn-group">
									<button type="submit" className="btn-cad-forms full-btn">
										Cadastrar
									</button>
								</div>
							</Box>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default CadastroCliente;
