import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {
	Button,
	TextField,
	FormControl,
	Select,
	InputLabel,
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
import './styles.css';
const Main = styled.main`
	width: 100%;
	min-height: 600px;
`;
const ExibeTitulo = styled.div`
	margin: 2%;
	display: flex;
	justify-content: center;
	h3 {
		margin-right: 2%;
		font-size: 25px;
	}
`;
const FormAtualizarProduto = styled.div`
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
	#imagemProduto {
		box-sizing: border-box;
		margin: 0 0 15px;
		width: 100%;
		padding: 15px;
		border-radius: 4px;
	}
`;
const BttCadPrdutoGrid = styled.div`
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
const CadatrarImagemLabel = styled.label`
	cursor: pointer;
	text-transform: uppercase;
	color: #0b0b0b;
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
					setFornecedorID(categoria[obj].fornecedor._id);
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
	const deletarImagem = async (DeletarImagem: Iimagem) => {
		if (DeletarImagem) {
			await apiFullSports.delete(`imagem/${DeletarImagem._id}/`).then(() => {
				window.location.reload();
				setOpen(true);
			});
		}
	};
	function EscreveImagens() {
		return (
			<>
				{ImagemProduto?.map((item, index: number) => {
					if (!item) {
						return <> </>;
					} else
						return (
							<div
								style={{
									margin: '1%',
									width: '50%',
									height: '10%',
								}}
								key={`Mostrar-Img-${index}`}
							>
								<img
									src={item.url}
									alt="imagem de produto"
									key={`Mostrar-Img-${index}-${item._id}`}
								/>
								{!spinner && (
									<Button
										onClick={() => deletarImagem(item)}
										color="error"
										variant="outlined"
										style={{
											border: '2px solid alert',
											margin: '1%',
											width: '10%',
										}}
										className="vizualizacao-produto-editar-produto-buttao-excluir"
									>
										Excluir foto
									</Button>
								)}
							</div>
						);
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
								fornecedor: fornecedorID,
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
			<Main>
				<ExibeTitulo id="exibe-titulo" className="exibe-titulo">
					Cadastrar Produto
				</ExibeTitulo>
				<FormAtualizarProduto
					id="form-cadastro-produto"
					className="form-cadastro-produto"
				>
					<form
						action=""
						method="post"
						encType="multipart/form-data"
						onSubmit={aoSubmit}
					>
						<Row2grid id="row-2-grid" className="row-1-grid">
							<label className="col-form-label">CNPJ do Fornecedor</label>
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
								}}
								placeholder={'atualizar fornecedor'}
								inputMode={'search'}
								className="txt-form"
								id="Auto-complete"
								sx={{
									boxSizing: 'border-box',
									margin: '0 0 15px',
									width: '100%',
									textAlign: 'center',
								}}
								renderInput={(params) => (
									<TextField
										{...params}
										id="Auto-complete"
										label="Atualizar Fornecedor"
									/>
								)}
							/>

							<label className="col-form-label">Nome do Produto</label>
							<TextField
								sx={{
									boxSizing: 'border-box',
									margin: '0 0 15px',
									width: '100%',
								}}
								className="txt-form"
								label="Nome do Produto"
								id="nomeProduto"
								type="text"
								placeholder={'Digite o nome do produto'}
								fullWidth
								onChange={(evento) => setNomeProduto(evento.target.value)}
								value={nomeProduto}
							/>

							<label className="col-form-label">Categoria do Produto</label>
							<FormControl fullWidth margin="dense">
								<InputLabel id="categoria-produto">Categoria</InputLabel>
								<Select
									className="text-form"
									labelId="categoria-produto"
									sx={{
										boxSizing: 'border-box',
										margin: '0 0 15px',
										width: '100%',
									}}
									value={categoriaProduto}
									onChange={(envento) =>
										setCategoriaProduto(envento.target.value)
									}
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

							<label className="col-form-label">Sexo</label>
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

							<label className="col-form-label">Cor do Produto</label>
							<TextField
								sx={{
									boxSizing: 'border-box',
									margin: '0 0 15px',
									width: '100%',
								}}
								className="txt-form"
								label="Cor do Produto"
								id="corProduto"
								type="text"
								placeholder={'Digite o tipo a cor do produto'}
								fullWidth
								onChange={(evento) => setCorProduto(evento.target.value)}
								value={corProduto}
							/>

							<label className="col-form-label">Preço do Produto</label>
							<TextField
								sx={{
									boxSizing: 'border-box',
									margin: '0 0 15px',
									width: '100%',
								}}
								className="txt-form"
								label="Preço do Produto"
								id="precoProduto"
								name="precoProduto"
								type="text"
								placeholder={'Digite o preço do produto'}
								fullWidth
								onChange={(evento) => setPreco(evento.target.value)}
								value={preco}
							/>
							<label className="col-form-label">Quantidade de Produtos</label>
							<TextField
								sx={{
									boxSizing: 'border-box',
									margin: '0 0 15px',
									width: '100%',
								}}
								className="txt-form"
								label="quantidade"
								id="qtdProduto"
								type="number"
								placeholder={'Digite a quantidade de Produto'}
								fullWidth
								onChange={(evento) => setQuantidade(evento.target.value)}
								value={quantidade}
							/>
							<label className="col-form-label">Tamanho do Produto</label>
							<TextField
								sx={{
									boxSizing: 'border-box',
									margin: '0 0 15px',
									width: '100%',
								}}
								className="txt-form"
								label="tamanho"
								id="tamanho"
								type="number"
								placeholder={'Digite a quantidade o tamanho do produto'}
								fullWidth
								onChange={(evento) => setTamanhoProduto(evento.target.value)}
								value={tamanhoProduto}
							/>
							<label className="col-form-label">Imagens do produto</label>
							<CadatrarImagemLabel
								onClick={() => {
									setOpen(true);
								}}
							>
								Atualizar fotos do produto...
							</CadatrarImagemLabel>

							{spinner && <p>carregando...</p>}
							{mensagemErroBolean && (
								<span id="menssagem-erro">{menssagemErro}</span>
							)}
						</Row2grid>

						<BttCadPrdutoGrid
							id="btt-cad-cliente-grid"
							className="btt-cad-cliente-grid"
						>
							<Button
								sx={{
									justifyContent: 'center',
									display: 'block',
									height: '50px',
									borderRadius: '5px',
									color: '#fff',
									fontSize: '14px',
									backgroundColor: 'black',
									':hover':
										'backgroundColor: #313131, transform:translate(0.8s)',
								}}
								type="submit"
								id="btn-cad-forms"
								className="btn-cad-forms"
							>
								atualizar Dados do Produto
							</Button>
							<Button
								onClick={() =>
									(window.location.href = '/dashboard/consultar-produtos')
								}
								sx={{
									justifyContent: 'center',
									display: 'block',
									height: '50px',
									borderRadius: '5px',
									color: '#fff',
									fontSize: '14px',
									backgroundColor: 'black',
									':hover':
										'backgroundColor: #313131, transform:translate(0.8s)',
								}}
								type="button"
								id="btn-cad-forms"
								className="btn-cad-forms"
							>
								Consulta de Produtos
							</Button>
						</BttCadPrdutoGrid>
					</form>
				</FormAtualizarProduto>
			</Main>
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
						{!spinner ? (
							<Button
								variant="outlined"
								sx={{ border: '2px solid', margin: '1%', width: '100px' }}
								onClick={handleClose}
							>
								Fechar
							</Button>
						) : (
							<></>
						)}
					</Box>
				</Box>
			</Modal>
		</>
	);
};
export default AtualizarProduto;
