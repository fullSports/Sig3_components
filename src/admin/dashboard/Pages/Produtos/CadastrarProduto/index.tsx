import React, { useEffect, useState } from 'react';
import {
	TextField,
	Autocomplete,
	FormControl,
	Select,
	MenuItem,
} from '@mui/material';
import IFornecedor from '../../../../../utils/interfaces/IFornecedor';
import apiFullSports from '../../../../../api/apiFullSports';
import DashboardSidenav from '../../../Components/Sidenav';
import DashboardHeader from '../../../Components/Header';
import IRESCadastrarImagem from '../../../../../utils/interfaces/Res/IRESCadastrarImagem';
import IRESConsultarImagem from '../../../../../utils/interfaces/Res/IRESConsultarImagem';
import SvgCarregando from '../../../../../assets/icons/caarregando.svg';
import SvgLoddingDarkMode from '../../../../../assets/icons/SvgCarregandoDarkMode.svg';
const CadastrarProduto = () => {
	const [listaFornecedores, setListaFornecedores] = useState<IFornecedor[]>([]);
	const [fornecedorID, setFornecedorID] = useState<string | undefined>(
		undefined
	);
	const [isLoading] = useState(false);
	const [, setBusca] = useState('');

	const [nomeProduto, setNomeProduto] = useState('');
	const [categoriaProduto, setCategoriaProduto] = useState('');
	const [corProduto, setCorProduto] = useState('');
	const [preco, setPreco] = useState('');
	const [quantidade, setQuantidade] = useState('');
	const [tamanhoProduto, setTamanhoProduto] = useState('');
	const [sexo, setSexo] = useState('');
	const ImagensID = [{}];
	let imagens = [{}];
	const [spinner, setSpinner] = useState(false);
	const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
	const [menssagemErro, setMenssagemErro] = useState('');
	const urlParams = new URLSearchParams(window.location.search);
	const categoriaParam = urlParams.get('categoria');
	const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
		imagens = [{}];
		if (evento.target.files?.length) {
			for (let i = 0; i < evento.target.files.length; i++) {
				imagens.unshift(evento.target.files[i]);
			}
			imagens.pop();
			console.log(imagens);
		}
	};
	useEffect(() => {
		apiFullSports
			.get<IFornecedor[]>('listar-fornecedores/')
			.then((resposta) => {
				setListaFornecedores(resposta.data);
			})
			.catch((err) => console.log(err));
		setCategoriaProduto('');
		if (categoriaParam) {
			setCategoriaProduto(categoriaParam.toString());
		} else {
			setCategoriaProduto('');
		}
	}, []);
	const options = listaFornecedores.map((item) => {
		const firsLetter = item.nomeEmpresa[0].toLocaleUpperCase();
		return {
			firsLetter: /[0-9]/.test(firsLetter) ? '0-9' : firsLetter,
			...item,
		};
	});
	function aoSubmit(evento: React.FormEvent<HTMLFormElement>) {
		evento.preventDefault();
		setSpinner(true);
		if (categoriaProduto === '') {
			setMenssagemErro('escolha uma categoria de produto');
			setMensagemErroBolean(true);
		} else if (sexo === '') {
			setMenssagemErro('escolha uma sexo de produto');
			setMensagemErroBolean(true);
		} else {
			imagens.map(async (item) => {
				return apiFullSports
					.request({
						url: 'imagem/',
						method: 'POST',
						headers: {
							'Access-Control-Allow-Origin': '*',
							'Content-Type': 'multipart/form-data',
						},
						data: {
							file: item,
						},
					})
					.then((response1: IRESCadastrarImagem) => {
						apiFullSports
							.request({
								url: `imagem/${response1.data.image._id}`,
								method: 'GET',
								headers: {
									'Access-Control-Allow-Origin': '*',
									'Content-Type': 'multipart/form-data',
								},
							})
							.then((response2: IRESConsultarImagem) => {
								ImagensID.unshift(response2.data._id);
							})
							.catch((err) => console.log(err));
					})
					.catch((err) => console.log(err));
			});
		}

		if (spinner === false) {
			ImagensID.pop();
			setTimeout(function () {
				console.log(ImagensID);
				apiFullSports
					.request({
						url: 'cadastrar-produto/',
						method: 'POST',
						data: {
							categoriaProduto: {
								[categoriaProduto]: {
									nome: nomeProduto,
									fornecedor: fornecedorID,
									cor: corProduto,
									sexo,
									tamanho: parseFloat(tamanhoProduto),
									preco,
									quantidade: parseFloat(quantidade),
									imagemProduto: ImagensID,
								},
							},
						},
					})
					.then(() => {
						setSpinner(false);
						window.location.href = '/dashboard/consultar-produtos';
					})
					.catch((err) => console.log(err));
			}, 2000);
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
							<span className="form-title">
								Cadastrar Produto
								{spinner && (
									<div id="contenner-lodding" className="contenner-logging">
										<img
											src={SvgCarregando}
											className="svg-loddin-lingt"
											alt="animação de carregando"
										/>
										<img
											src={SvgLoddingDarkMode}
											className="svg-loddin-dark-mode"
											alt="animação de carregando"
										/>
									</div>
								)}
							</span>
							<form
								action=""
								method="post"
								encType="multipart/form-data"
								onSubmit={aoSubmit}
							>
								<div className="row-grid">
									<label className="col-form-label">
										CNPJ do Fornecedor
										<Autocomplete
											openText="Abrir"
											closeText="Fechar"
											noOptionsText="Sem opções"
											loadingText="Carregando..."
											disablePortal
											groupBy={(option) => option.firsLetter}
											options={options}
											loading={isLoading}
											getOptionLabel={(option) =>
												option.nomeEmpresa + ' - ' + option.cnpj
											}
											onInputChange={(_, newValue) => setBusca(newValue)}
											onChange={(_, newValue) => {
												setFornecedorID(newValue?._id);
												setBusca('');
											}}
											className="txt-form"
											id="Auto-complete"
											sx={{
												boxSizing: 'border-box',
												margin: '8px 0 15px',
												width: '100%',
												textAlign: 'center',
											}}
											renderInput={(params) => (
												<TextField
													{...params}
													id="Auto-complete"
													placeholder="Seleceione o Fornecedor"
												/>
											)}
										/>
									</label>

									<label className="col-form-label">
										Nome do Produto
										<TextField
											sx={{
												boxSizing: 'border-box',
												margin: '8px 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="nomeProduto"
											type="text"
											placeholder={'Digite o nome do produto'}
											fullWidth
											onChange={(evento) => setNomeProduto(evento.target.value)}
										/>
									</label>
								</div>

								<div className="row-grid">
									<label className="col-form-label">
										Categoria do Produto
										<FormControl fullWidth margin="dense">
											<Select
												className="text-form"
												sx={{
													boxSizing: 'border-box',
													margin: '8px 0 15px',
													width: '100%',
												}}
												value={categoriaProduto}
												onChange={(envento) =>
													setCategoriaProduto(envento.target.value)
												}
											>
												<MenuItem key={'roupa'} value={'roupa'}>
													Roupas
												</MenuItem>
												<MenuItem key={'equipamento'} value={'equipamento'}>
													Equipamento
												</MenuItem>
												<MenuItem key={'suplemento'} value={'suplemento'}>
													Suplementos
												</MenuItem>
												<MenuItem key={'calcado'} value={'calcado'}>
													Caçados
												</MenuItem>
											</Select>
										</FormControl>
									</label>

									<label className="col-form-label">
										Sexo
										<FormControl fullWidth margin="dense">
											<Select
												className="txt-form"
												sx={{
													boxSizing: 'border-box',
													margin: '8px 0 15px',
													width: '100%',
													height: '56px',
													padding: '3px',
												}}
												value={sexo}
												onChange={(evento) => setSexo(evento.target.value)}
												required
											>
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
													Indefinido
												</MenuItem>
											</Select>
										</FormControl>
									</label>
								</div>

								<div className="row-grid">
									<label className="col-form-label">
										Cor do Produto
										<TextField
											sx={{
												boxSizing: 'border-box',
												margin: '8px 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="corProduto"
											type="text"
											placeholder={'Digite o tipo a cor do produto'}
											fullWidth
											onChange={(evento) => setCorProduto(evento.target.value)}
										/>
									</label>

									<label className="col-form-label">
										Preço do Produto
										<TextField
											sx={{
												boxSizing: 'border-box',
												margin: '8px 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="precoProduto"
											name="precoProduto"
											type="text"
											placeholder={'Digite o preço do produto'}
											fullWidth
											onChange={(evento) => setPreco(evento.target.value)}
											onBlur={(evento) => setPreco(evento.target.value)}
										/>
									</label>

									<label className="col-form-label">
										Quantidade de Produtos
										<TextField
											sx={{
												boxSizing: 'border-box',
												margin: '8px 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="qtdProduto"
											type="number"
											placeholder={'Digite a quantidade de Produto'}
											fullWidth
											onChange={(evento) => setQuantidade(evento.target.value)}
										/>
									</label>
								</div>

								<div className="row-grid">
									<label className="col-form-label">
										Tamanho do Produto
										<TextField
											sx={{
												boxSizing: 'border-box',
												margin: '8px 0 15px',
												width: '100%',
											}}
											className="txt-form"
											id="tamanho"
											type="number"
											placeholder={'Digite a quantidade o tamanho do produto'}
											fullWidth
											onChange={(evento) =>
												setTamanhoProduto(evento.target.value)
											}
										/>
									</label>

									<label className="col-form-label picture-label">
										Imagens do produto
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
											multiple
										/>
									</label>
								</div>
								{mensagemErroBolean && (
									<span id="menssagem-erro">{menssagemErro}</span>
								)}
								<div className="btn-group">
									<button
										onClick={() =>
											(window.location.href = '/dashboard/consultar-produtos')
										}
										id="btn-cad-forms"
										className="btn-cad-forms hallow-btn"
									>
										Consulta de Produto
									</button>
									<button
										type="submit"
										id="btn-cad-forms"
										className="btn-cad-forms full-btn"
									>
										Cadastrar Produto
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
export default CadastrarProduto;
