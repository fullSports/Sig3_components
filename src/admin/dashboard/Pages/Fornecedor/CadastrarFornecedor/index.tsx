import React, { useState } from 'react';
import './../../../styles.css';
import apiFullSports from '../../../../../api/apiFullSports';
import { TextField, Box } from '@mui/material';
import ApiCep from '../../../../../api/apiCep';
import DashboardSidenav from '../../../Components/Sidenav';
import DashboardHeader from '../../../Components/Header';

const CadastrarFornecedor = () => {
	const [cnpj, setCnpj] = useState('');
	const [nomeEmpresa, setNomeEmpresa] = useState('');
	const [cep, setCep] = useState('');
	const [rua, setRua] = useState('');
	const [bairro, setBairro] = useState('');
	const [estado, setEstado] = useState('');
	const [cidade, setCidade] = useState('');
	const [complemento, setComplemento] = useState('');
	const [numero, setNumero] = useState('');
	const [spinner, setSpinner] = useState(false);
	const [carregandoCep, setCarregandoCep] = useState(false);
	const [carregandoCepMenssagem, setCarregandoCepMessagem] = useState(false);
	const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
	const [menssagemErro, setMenssagemErro] = useState('');
	function aoSubmit(evento: React.FormEvent<HTMLFormElement>) {
		evento.preventDefault();
		setSpinner(true);
		setMensagemErroBolean(false);
		setMenssagemErro('');
		apiFullSports
			.request({
				method: 'POST',
				url: 'cadastrar-fornecedor',
				data: {
					cnpj,
					nomeEmpresa,
					cep,
					endereco: `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`,
				},
			})
			.then((resposta) => {
				console.log(resposta);
				if (!resposta.data.registeredSuccess) {
					setSpinner(false);
					setMensagemErroBolean(true);
					setMenssagemErro(resposta.data.messagem);
				} else {
					// alert("Fornecedor cadastrado com sucesso")
					setSpinner(false);
					setMensagemErroBolean(false);
					window.location.href = '/dashboard/consultar-fornecedores';
				}
			})
			.catch((err) => {
				console.log(err);
				setSpinner(false);
				setMensagemErroBolean(true);
				if (err.response.status === 400) {
					setMenssagemErro(err.response.data.message[0]);
				} else {
					setMenssagemErro('erro naa requisição');
				}
			});
	}

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
					setCarregandoCep(false);
					setCarregandoCepMessagem(true);
					console.log(err);
				});
		}
	}
	return (
		<>
			<div className="flex">
				<DashboardSidenav />
				<div className="dashboard-body">
					<DashboardHeader />
					<div className="form-card">
						<div className="form-cadastro">
							<span className="form-title">Cadastro de Fornecedor</span>
							<Box component={'form'} onSubmit={aoSubmit}>
								<div id="row-grid" className="row-grid">
									<label className="col-form-label">
										CNPJ do Fornecedor
										<TextField
											sx={{
												boxSizing: 'border-box',
												margin: '8px 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="cnpj"
											type="text"
											placeholder={'Digite o CNPJ do fornecedor'}
											fullWidth
											onChange={(evento) => setCnpj(evento.target.value)}
										/>
									</label>
									<label className="col-form-label">
										Nome do Fornecedor
										<TextField
											sx={{
												margin: '8px 0 15px',
											}}
											className="txt-form"
											id="nomeFornecedor"
											type="text"
											placeholder={'Digite o nome do fornecedor'}
											fullWidth
											onChange={(evento) => setNomeEmpresa(evento.target.value)}
										/>
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
								</div>
								<div className="row-grid">
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
											placeholder={'Número da residência'}
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
											placeholder={'Casa/Apartamento'}
											fullWidth
											required
										/>
									</label>
								</div>
								{spinner && <p>carregando...</p>}
								{mensagemErroBolean && (
									<span id="menssagem-erro">{menssagemErro}</span>
								)}
								<div className="btn-group">
									<button className="btn-cad-forms hallow-btn" type="submit">
										Cadastrar Fornecedor
									</button>
									<button
										onClick={() =>
											(window.location.href =
												'/dashboard/consultar-fornecedores')
										}
										className="btn-cad-forms full-btn"
										type="button"
									>
										Consulta de Fornecedores
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
export default CadastrarFornecedor;
