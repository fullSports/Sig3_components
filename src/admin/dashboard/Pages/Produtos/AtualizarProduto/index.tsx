import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {
	Button,
	TextField,
	FormControl,
	Select,
	MenuItem,
	Box,
	Modal,
	Autocomplete,
} from '@mui/material';
import apiFullSports from '../../../../../api/apiFullSports';
import IFornecedor from '../../../../../utils/interfaces/IFornecedor';
import IProduto from '../../../../../utils/interfaces/IProduto';
import Iimagem from '../../../../../utils/interfaces/Iimagem';
import SvgCarregando from '../../../../../assets/icons/caarregando.svg';
import DashboardSidenav from '../../../Components/Sidenav';
import DashboardHeader from '../../../Components/Header';
const CadatrarImagemLabel = styled.label`
	cursor: pointer;
	border: solid 1px #7b7777;
	margin-top: 4%;
	margin-bottom: 4%;
	display: flex;
	padding: 10px 10px;
	border-radius: 5px;
`;
const CadastrarNovaFotoInpult = styled.label`
	cursor: pointer;
	text-transform: uppercase;
	color: #0b0b0b;
	border: solid 1px #7b7777;
	margin-top: 4%;
	display: flex;
	text-align: center;
	padding: 10px 10px;
	border-radius: 5px;
	width: 100%;
	align-items: center;
	margin-bottom: 2%;
	height: auto;
`;
const AtualizarProduto = () => {
	const parametros = useParams();
	const [listaFornecedores, setListaFornecedores] = useState<IFornecedor[]>([]);
	const [fornecedorID, setFornecedorID] = useState<IFornecedor | null>(null);
	const [isLoading] = useState(false);
	const [, setBusca] = useState('');
	const [nomeProduto, setNomeProduto] = useState('');
	const [categoriaProduto, setCategoriaProduto] = useState('');
	const [corProduto, setCorProduto] = useState('');
	const [preco, setPreco] = useState('');
	const [quantidade, setQuantidade] = useState('');
	const [tamanhoProduto, setTamanhoProduto] = useState('');
	const [sexo, setSexo] = useState('');
	const [imagens, setImagens] = useState(Array);
	const [ImagensID, setImagensID] = useState(Array);
	const [ImagemProduto, setImagemProduto] = useState<Iimagem[]>();
	const [spinner, setSpinner] = useState(false);
	const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
	const [menssagemErro, setMenssagemErro] = useState('');
	const [open, setOpen] = useState(false);
	const [messagemErroFoto, setmessagemErroFoto] = useState(false);
	const [categoriaID, setCategoriaID] = useState('');
	const [imageSelecionado] = useState(true);
	const [botaoCadastrarNovaFoto, setbotaoCadastrarNovaFoto] = useState(false);
	const [LimiteImg, setLimitImg] = useState(false);
	const [QuantImg, setQuantImg] = useState(Number);

	const handleClose = () => {
		setOpen(false);
	};
	const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
		setLimitImg(false);
		const img = [];
		if (evento.target.files?.length) {
			for (let i = 0; i < evento.target.files.length; i++) {
				img.unshift(evento.target.files[i]);
			}
		}
		console.log(QuantImg);
		if (img.length + QuantImg > 4) {
			setLimitImg(true);
		} else {
			setImagens(img);
			console.log(img);
			setmessagemErroFoto(false);
			setbotaoCadastrarNovaFoto(true);
		}
	};

	useEffect(() => {
		if (parametros.id) {
			apiFullSports
				.get<IFornecedor[]>('listar-fornecedores/')
				.then((resposta) => {
					setListaFornecedores(resposta.data);
				})
				.catch((err) => console.log(err));

			apiFullSports
				.get<IProduto>(`listar-produto/${parametros.id}`)
				.then((resposta) => {
					const categoria = resposta.data.categoriaProduto;
					const obj = Object.keys(categoria)[0].toString() as
						| 'roupa'
						| 'equipamento'
						| 'suplemento'
						| 'calcado';
					setFornecedorID(categoria[obj].fornecedor);
					setNomeProduto(categoria[obj].nome);
					setSexo(categoria[obj].sexo);
					setCategoriaProduto(obj);
					setCategoriaID(resposta.data._id);
					setCorProduto(categoria[obj].cor);
					setPreco(categoria[obj].preco);
					setQuantidade(categoria[obj].quantidade.toString());
					setTamanhoProduto(categoria[obj].tamanho.toString());
					setImagemProduto(categoria[obj].imagemProduto);
					const ArryIdImg: string[] = [];
					for (const id of categoria[obj].imagemProduto) {
						if (id) {
							ArryIdImg.push(id?._id);
						}
					}
					console.log(ArryIdImg);
					setQuantImg(ArryIdImg.length);
					setImagensID(ArryIdImg);
				})
				.catch((err) => console.log(err));
		}
	}, [parametros]);
	const cadastrarNovasFotos = async () => {
		setmessagemErroFoto(false);
		setbotaoCadastrarNovaFoto(false);
		setSpinner(true);
		console.log(imagens);

		if (imagens.length > 0) {
			imagens.map(async (item) => {
				try {
					const response = await apiFullSports.request({
						url: 'imagem/',
						method: 'POST',
						headers: {
							'Access-Control-Allow-Origin': '*',
							'Content-Type': 'multipart/form-data',
						},
						data: {
							file: item,
						},
					});
					console.log(response);
					ImagensID.push(response.data.image._id);
				} catch (err) {
					console.log(err);
					setbotaoCadastrarNovaFoto(true);
				}
			});

			console.log(`atualizar-produto/${categoriaID}`);
			setTimeout(() => {
				apiFullSports
					.request({
						url: `atualizar-produto/${categoriaID}`,
						method: 'PUT',
						data: {
							categoriaProduto: {
								[categoriaProduto]: {
									imagemProduto: ImagensID,
								},
							},
						},
					})
					.then(() => {
						window.location.reload();
						setSpinner(false);
					})
					.catch((err) => {
						console.log(err);
						setbotaoCadastrarNovaFoto(true);
					});
			}, 2000);
		} else {
			setSpinner(false);
			setmessagemErroFoto(true);
			setbotaoCadastrarNovaFoto(true);
		}
	};
	const deletarImagem = (DeletarImagem: Iimagem) => {
		if (DeletarImagem._id) {
			return apiFullSports
				.delete(`imagem/${DeletarImagem._id}/`)
				.then((res) => {
					console.log(res.data);
					const imgFilter = ImagensID.filter(
						(value: unknown) => value !== DeletarImagem._id
					);
					apiFullSports
						.request({
							url: `atualizar-produto/${categoriaID}`,
							method: 'PUT',
							data: {
								categoriaProduto: {
									[categoriaProduto]: {
										imagemProduto: imgFilter,
									},
								},
							},
						})
						.then((respostaProduct) => {
							console.log(respostaProduct);
							location.reload();
						});
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
	function EscreveImagens() {
		return (
			<>
				{ImagemProduto?.map((item, index: number) => {
					if (item) {
						return (
							<div
								key={`Mostrar-Img-${index}`}
								style={{
									paddingRight: '10%',
								}}
							>
								<img
									src={item.url}
									alt="imagem de produto"
									key={`Mostrar-Img-${index}-${item._id}`}
									style={{
										borderRadius: '5%',
										paddingBottom: '5%',
									}}
								/>
								{!spinner && (
									<Button
										onClick={() => deletarImagem(item)}
										color="error"
										variant="outlined"
										style={{
											border: '2px solid alert',
										}}
										className="vizualizacao-produto-editar-produto-buttao-excluir"
									>
										Excluir foto
									</Button>
								)}
							</div>
						);
					}
				})}
			</>
		);
	}
	function OpcoentesFotoProduto() {
		return (
			<>
				<div className="vizualizacao-produto-editar-produto">
					<EscreveImagens />
				</div>
			</>
		);
	}
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
			// const quantidadeNumber = parseFloat(quantidade);
			const tamanhoNumber = parseFloat(tamanhoProduto);
			apiFullSports
				.request({
					method: 'PUT',
					url: `atualizar-produto/${parametros.id}`,
					data: {
						categoriaProduto: {
							[categoriaProduto]: {
								nome: nomeProduto,
								fornecedor: fornecedorID?._id,
								cor: corProduto,
								sexo,
								tamanho: tamanhoNumber,
								preco,
								quantidade,
							},
						},
					},
				})
				.then(() => {
					setSpinner(false);
					window.location.href = '/dashboard/consultar-produtos';
				})
				.catch((err) => console.log(err));
		}
	}
	return (
		<>
			<div className="flex">
				<DashboardSidenav />
				<div className="dashboard-body">
					<div id="main" className="page-body">
						<DashboardHeader />
						<div className="form-card">
							<div id="form-atualizar-produto" className="form-atualizar">
								<span className="form-title">Atualizar Produto</span>
								<form encType="multipart/form-data" onSubmit={aoSubmit}>
									<div id="row-grid" className="row-grid">
										<label className="col-form-label">
											CNPJ do Fornecedor
											<Autocomplete
												openText="Abrir"
												closeText="Fechar"
												noOptionsText="Sem opções"
												loadingText="Carregando..."
												disablePortal
												groupBy={(option) => option.nomeEmpresa}
												options={options}
												loading={isLoading}
												getOptionLabel={(option) =>
													option.nomeEmpresa + ' - ' + option.cnpj
												}
												onInputChange={(_, newValue) => setBusca(newValue)}
												onChange={(_, newValue) => {
													setFornecedorID(newValue);
												}}
												value={fornecedorID}
												placeholder={'atualizar fornecedor'}
												inputMode={'search'}
												className="txt-form"
												id="Auto-complete"
												sx={{
													boxSizing: 'border-box',
													margin: '0 0 15px',
													width: '100%',
													textAlign: 'start',
												}}
												renderInput={(params) => (
													<TextField
														{...params}
														sx={{
															boxSizing: 'border-box',
															margin: '0 0 15px',
														}}
														fullWidth
														placeholder={'Pesquise o Fornecedor'}
														id="Auto-complete"
													/>
												)}
											/>
										</label>
									</div>
									<div id="row-grid" className="row-grid">
										<label className="col-form-label">
											Nome do Produto
											<TextField
												sx={{
													boxSizing: 'border-box',
													margin: '0 0 15px',
													width: '100%',
												}}
												className="txt-form"
												id="nomeProduto"
												type="text"
												placeholder={'Digite o nome do produto'}
												fullWidth
												onChange={(evento) =>
													setNomeProduto(evento.target.value)
												}
												value={nomeProduto}
											/>
										</label>
										<label className="col-form-label">
											Categoria do Produto
											<FormControl fullWidth>
												<Select
													labelId="categoria-produto"
													value={categoriaProduto}
													onChange={(envento) =>
														setCategoriaProduto(envento.target.value)
													}
													required
												>
													<MenuItem key={''} value={''}></MenuItem>
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
									</div>
									<div id="row-grid" className="row-grid">
										<label className="col-form-label">
											Sexo
											<FormControl fullWidth margin="dense">
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
										<label className="col-form-label">
											Cor do Produto
											<TextField
												sx={{
													boxSizing: 'border-box',
													margin: '0 0 15px',
													width: '100%',
												}}
												className="txt-form"
												id="corProduto"
												type="text"
												placeholder={'Digite o tipo a cor do produto'}
												fullWidth
												onChange={(evento) =>
													setCorProduto(evento.target.value)
												}
												value={corProduto}
											/>
										</label>
									</div>
									<div id="row-grid" className="row-grid">
										<label className="col-form-label">
											Preço do Produto
											<TextField
												sx={{
													boxSizing: 'border-box',
													margin: '0 0 15px',
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
												value={preco}
											/>
										</label>
										<label className="col-form-label">
											Quantidade de Produtos
											<TextField
												sx={{
													boxSizing: 'border-box',
													margin: '0 0 15px',
													width: '100%',
												}}
												className="txt-form"
												id="qtdProduto"
												type="number"
												placeholder={'Digite a quantidade de Produto'}
												fullWidth
												onChange={(evento) =>
													setQuantidade(evento.target.value)
												}
												value={quantidade}
											/>
										</label>
									</div>
									<div id="row-grid" className="row-grid">
										<label className="col-form-label">
											Tamanho do Produto
											<TextField
												sx={{
													boxSizing: 'border-box',
													margin: '0 0 15px',
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
												value={tamanhoProduto}
											/>
										</label>
										<label className="col-form-label">
											Imagens do produto
											<CadatrarImagemLabel
												onClick={() => {
													setOpen(true);
												}}
											>
												Seleciolar fotos do produto...
											</CadatrarImagemLabel>
										</label>
									</div>
									{spinner && <p>carregando...</p>}
									{mensagemErroBolean && (
										<span id="menssagem-erro">{menssagemErro}</span>
									)}

									<div className="btn-group">
										<button className="btn-cad-forms hallow-btn" type="submit">
											atualizar Dados do Produto
										</button>
										<button
											onClick={() =>
												(window.location.href = '/dashboard/consultar-produtos')
											}
											type="button"
											className="btn-cad-forms full-btn"
										>
											Consulta de Produtos
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal hideBackdrop open={open} onClose={handleClose} id="model">
				<Box
					component={'div'}
					id="tela-imagem"
					className="tela-imagem"
					sx={{
						width: '60%',
						height: '80%',
						position: 'absolute' as const,
						top: '10%',
						left: '20%',
						backgroundColor: '#4e4a4a',
						border: '3px solid #000',
						borderRadius: '20px',
						pt: 1,
						px: 1,
						pb: 1,
					}}
				>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(2,auto)',
						}}
					>
						<OpcoentesFotoProduto />
						<div>
							{imageSelecionado && !spinner && (
								<>
									<CadastrarNovaFotoInpult htmlFor="file">
										Escolher novas fotos...
									</CadastrarNovaFotoInpult>
									<input
										onChange={selecionarArquivo}
										className="txt-form"
										id="file"
										type="file"
										name="file"
										accept="image/jpeg, image/pjpeg, image/png, image/gif"
										multiple
										max={QuantImg.toString()}
										maxLength={QuantImg}
									/>
								</>
							)}
							<div>
								{botaoCadastrarNovaFoto && !LimiteImg && (
									<Button
										variant="outlined"
										sx={{ border: '2px solid', margin: '1%', width: '100%' }}
										onClick={cadastrarNovasFotos}
									>
										Cadastrar Nova Foto
									</Button>
								)}
							</div>
						</div>
					</div>
					<Box
						component={'div'}
						sx={{
							display: 'flex',
							fontSize: '23px',
							marginTop: '5%',
							justifyContent: 'center',
						}}
					>
						{spinner && (
							<div style={{ display: 'flex', justifyContent: 'center' }}>
								<img
									src={SvgCarregando}
									width="100"
									height="100"
									alt="imagem de spinner, carregando"
								/>
							</div>
						)}
						{messagemErroFoto && (
							<p id="menssagem-erro">selecione uma imagem...</p>
						)}
						{LimiteImg && (
							<p id="menssagem-erro">
								Número Maximo de Imagens do Produto permitidas são 4
							</p>
						)}
					</Box>
					<div
						style={{
							paddingTop: '60%',
							justifyContent: 'center',
							display: 'flex',
							width: '100%',
						}}
					>
						{!spinner ? (
							<Button
								variant="outlined"
								sx={{ border: '2px solid' }}
								onClick={handleClose}
							>
								Fechar
							</Button>
						) : (
							<></>
						)}
					</div>
				</Box>
			</Modal>
		</>
	);
};
export default AtualizarProduto;
