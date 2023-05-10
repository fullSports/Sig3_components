import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import apiFullSports from '../../../../../api/apiFullSports';
import { Button, TextField } from '@mui/material';
import ApiCep from '../../../../../api/apiCep';
import IFornecedor from '../../../../../utils/interfaces/IFornecedor';
import { Box } from '@mui/system';
import DashboardSidenav from '../../../Components/Sidenav';
import DashboardHeader from '../../../Components/Header';
const FormCadastroFornecedor = styled.div`
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 20px;
	margin-top: 20px;
	box-shadow: 1px 1px 8px rgb(70, 70, 70, 0.2);
	padding: 2%;
	width: 40%;
	height: auto;
	font-size: 12pt;
	border-radius: 10px;
	@media screen and (max-width: 1144px) {
		width: 90%;
		height: auto;
		font-size: 12px;
		border-radius: 10px;
	}
`;
const Row2grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	grid-auto-rows: minmax(auto, auto);
	grid-gap: 5px;
	border-radius: 20px;
	width: auto;
	height: auto;
	margin: 1px;
	.col-form-label {
		font-size: 20px;
	}
`;
const BttCadClienteGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	grid-auto-rows: minmax(auto, auto);
	grid-gap: 2px;
	#btn-cad-forms {
		justify-content: center;
		display: block;
		height: 50px;
		border-radius: 5px;
		color: #fff;
		font-size: 14px;
		background-color: black;
		:hover {
			background-color: #313131;
			text-decoration: 0.9s;
		}
	}
`;
const AtualizarFornecedor = () => {
	const parametros = useParams();
	const [cnpj, setCnpj] = useState('');
	const [nomeEmpresa, setNomeEmpresa] = useState('');
	const [cep, setCep] = useState('');
	const [rua, setRua] = useState('');
	const [bairro, setBairro] = useState('');
	const [estado, setEstado] = useState('');
	const [cidade, setCidade] = useState('');
	const [complemento, setComplemento] = useState('');
	const [numero, setNumero] = useState('');
	const dataAtual = new Date().toLocaleDateString();
	const [spinner, setSpinner] = useState(false);
	const [carregandoCep, setCarregandoCep] = useState(false);
	const [carregandoCepMenssagem, setCarregandoCepMessagem] = useState(false);
	const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
	const [menssagemErro, setMenssagemErro] = useState('');
	useEffect(() => {
		if (parametros.id) {
			apiFullSports
				.get<IFornecedor>(`listar-fornecedor/${parametros.id}`)
				.then((resposta) => {
					setCnpj(resposta.data.cnpj);
					setNomeEmpresa(resposta.data.nomeEmpresa);
					setCep(resposta.data.cep);
					const enderecoSplit = resposta.data.endereco.split('-');
					setComplemento(enderecoSplit[1]);
					const numeroSlit = enderecoSplit[0].split(',');
					setNumero(numeroSlit[numeroSlit.length - 1]);
					setSpinner(false);
				})
				.catch((err) => {
					console.log(err);
					setMensagemErroBolean(true);
					if (err.response.status === 400) {
						setMenssagemErro(err.response.data.message[0]);
					} else {
						setMenssagemErro('erro naa requisição');
					}
				});
		}
	}, [parametros]);
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
					console.log(err);
					setMensagemErroBolean(true);
					setMenssagemErro('Erro ao buscar o cep');
				});
		}
	}
	function buscaCepCarregarPage() {
		console.log(cep);
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
				console.log(err);
			});
	}
	setTimeout(buscaCepCarregarPage, 222);

	function aoSubmeterForm(evento: React.FormEvent<HTMLFormElement>) {
		setSpinner(true);
		evento.preventDefault();
		if (parametros.id) {
			apiFullSports
				.put(`atualizar-fornecedor/${parametros.id}`, {
					cnpj,
					nomeEmpresa,
					cep,
					endereco: `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`,
				})
				.then(() => {
					setSpinner(false);
					// alert("Fornecedor atualizado com sucesso");
					window.location.href = '/dashboard/consultar-fornecedores';
				})
				.catch((err) => console.log(err));
		} else {
			apiFullSports
				.post('cadastrar-fornecedor/', {
					cnpj,
					nomeEmpresa,
					cep,
					endereco: `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`,
					dataCadastro: dataAtual,
				})
				.then(() => {
					setSpinner(false);
					// alert("Fornecedornovo cadastrado com sucesso");
					window.open('/dashboard/consultar-fornecedores');
				})
				.catch((err) => console.log(err));
		}
	}
	return (
		<>
			<div className="flex" key={'atualizar-admin-flex'}>
				<DashboardSidenav key={'subMenu-atualizar-admin'} />
				<div id="main" className="dashboard-body">
					<DashboardHeader key={'Header-atualizar-admin'} />
					<div className="form-card">
						<div id="form-atualizar-fornecedor" className="form-atualizar">
							<span className="form-title">Atualizar Fornecedor</span>
							<form encType="multipart/form-data" onSubmit={aoSubmeterForm}>
								<div id="row-grid" className="row-grid">
									<label className="col-form-label">
										CNPJ do Fornecedor
										<TextField
											sx={{
												boxSizing: 'border-box',
												margin: '0 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="cnpj"
											type="text"
											placeholder={'Digite o CNPJ do fornecedor'}
											fullWidth
											onChange={(evento) => setCnpj(evento.target.value)}
											value={cnpj}
										/>
									</label>
									<label className="col-form-label">
										Nome do Fornecedor
										<TextField
											sx={{
												boxSizing: 'border-box',
												margin: '0 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="nomeFornecedor"
											type="text"
											placeholder={'Digite o nome do fornecedor'}
											fullWidth
											onChange={(evento) => setNomeEmpresa(evento.target.value)}
											value={nomeEmpresa}
										/>
									</label>
								</div>

								<div id="row-grid" className="row-grid">
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

								<div id="row-grid" className="row-grid">
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

								<div id="row-grid" className="row-grid">
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
								</div>

								<div id="row-grid" className="row-grid">
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
									<button className="btn-cad-forms hallow-btn" type="submit">
										Atualizar Fornecedor
									</button>
									<button
										onClick={() =>
											(window.location.href =
												'/dashboard/consultar-fornecedores')
										}
										type="button"
										id="btn-cad-forms"
										className="btn-cad-forms full-btn"
									>
										Consulta de Fornecedores
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AtualizarFornecedor;
