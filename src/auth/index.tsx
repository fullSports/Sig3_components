import React, { useEffect, useState } from 'react';
import { TextField, Box } from '@mui/material';
import apiFullSports from '../api/apiFullSports';

const AutenticacaoAdmin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [spinner, setSpinner] = useState(false);
	const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
	const [menssagemErro, setMenssagemErro] = useState('');
	const emailCookies = JSON.parse(localStorage.getItem('email') as string);
	useEffect(() => {
		if (emailCookies) {
			console.log(emailCookies.toString());
			setEmail(emailCookies.toString());
		}
	}, [emailCookies]);
	function realizarLogin(evento: React.FormEvent<HTMLFormElement>) {
		evento.preventDefault();
		setMensagemErroBolean(false);
		setSpinner(true);
		apiFullSports
			.post('realizar-login', {
				email,
				password,
			})
			.then((resposta) => {
				if (
					resposta.data.emailAndPassword === false ||
					resposta.data.emailExists === false
				) {
					setSpinner(false);
					setMensagemErroBolean(true);
					setMenssagemErro(resposta.data.messagem);
				} else {
					setMensagemErroBolean(false);
					localStorage.setItem('user', JSON.stringify(resposta.data.result));
					if (resposta.data.result.login.isAdmin) {
						localStorage.removeItem('email');
						window.location.href = '/dashboard/home/';
					} else {
						localStorage.removeItem('email');
						window.location.href = '/';
					}
				}
			})
			.catch((err) => {
				console.log(err);
				setSpinner(false);
				setMensagemErroBolean(true);
				setMenssagemErro('erro na requisição');
			});
	}
	if (localStorage.getItem('user')) {
		console.log(JSON.parse(localStorage.getItem('user') as string));
	}

	return (
		<>
			<div className="flex">
				<div id="main" className="dashboard-body">
					<div className="form-card">
						<div id="form-cadastro-cliente" className="form-cadastro-cliente">
							<span className="form-title">Login</span>
							<Box component={'form'} onSubmit={realizarLogin}>
								<div className="row-grid">
									<div>
										<label className="col-form-label">
											E-mail
											<TextField
												sx={{
													boxSizing: 'border-box',
													margin: '0 0 15px',
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
													margin: '0 0 15px',
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
								</div>
								{spinner && <p>carregando...</p>}
								{mensagemErroBolean && (
									<span id="menssagem-erro">{menssagemErro}</span>
								)}
								<div className="btn-group">
									<button
										onClick={() =>
											(window.location.href = '/cadastrar-cliente')
										}
										className="btn-cad-forms hallow-btn"
										type="button"
									>
										Criar Conta
									</button>
									<button type="submit" className="btn-cad-forms full-btn">
										Login
									</button>
								</div>
							</Box>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AutenticacaoAdmin;
