import { useEffect, useState } from 'react';
import ICliente from '../../../../../utils/interfaces/ICliente';
import apiFullSports from '../../../../../api/apiFullSports';
import styled from 'styled-components';
import SvgCarregando from '../../../../../assets/icons/caarregando.svg';
import SvgLiddingDarkMode from '../../../../../assets/icons/SvgCarregandoDarkMode.svg';
const Icone = styled.div`
	background-color: #796969;
	height: 50px;
	width: 50px;
	border-radius: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: auto;
	margin-left: auto;
	font-size: 22px;
`;
const TabelaAdimistrador = () => {
	// const [open, setOpen] = React.useState(false);
	// const handleOpen = () => {
	//     setOpen(true);
	// };
	// const handleClose = () => {
	//     setOpen(false);
	// };
	const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
	const [menssagemErro, setMenssagemErro] = useState('');
	const [spinner, setSpinner] = useState(false);
	const [clientes, setClientes] = useState<ICliente[]>([]);
	useEffect(() => {
		setSpinner(true);
		apiFullSports
			.get<ICliente[]>('listar-clientes/')
			.then((resposta) => {
				setSpinner(false);
				setClientes(resposta.data);
			})
			.catch((err) => {
				console.log(err);
				setMensagemErroBolean(true);
				setMenssagemErro(err.response?.data.message[0].toString());
			});
	}, []);

	// const deletar = (DeletarCliente: ICliente) => {
	//     apiFullSports.delete(`deletar-cliente/${DeletarCliente._id}/`);
	//     window.location.reload();
	// }

	return (
		<>
			{spinner && (
				<div id="contenner-lodding" className="contenner-logging">
					<img
						src={SvgCarregando}
						className="svg-loddin-lingt"
						alt="animação de carregando"
					/>
					<img
						src={SvgLiddingDarkMode}
						className="svg-loddin-dark-mode"
						alt="animação de carregando"
					/>
				</div>
			)}
			{mensagemErroBolean && <span id="menssagem-erro">{menssagemErro}</span>}

			{clientes.map((item) => {
				// const dataCadastro = new Date(item.dataCadastro);
				// const dia = dataCadastro.getUTCDate().toLocaleString().length == 1 ? "0" + dataCadastro.getUTCDate().toLocaleString().length : dataCadastro.getUTCDate();
				// const mes = (dataCadastro.getMonth() + 1).toString().length == 1 ? "0" + (dataCadastro.getMonth() + 1).toString() : (dataCadastro.getMonth() + 1).toString();
				// const ano = dataCadastro.getFullYear().toString();
				if (item.login.isAdmin) {
					if (
						item.imagemPerfil === null ||
						item.imagemPerfil === undefined ||
						!item.imagemPerfil
					) {
						return (
							<tr key={item._id.toString()}>
								<td>
									<Icone className="icone">
										<p className="text-black">{item.nome.charAt(0)}</p>
									</Icone>
								</td>

								{/* <td>{`${dia}/${mes}/${ano}`}</td> */}
								<td>{`${item.cpf.charAt(0)}${item.cpf.charAt(
									1
								)}${item.cpf.charAt(2)}. *** . *** -${item.cpf.charAt(
									12
								)}${item.cpf.charAt(13)}`}</td>
								<td>{item.nome}</td>
								<td>{item.dataNascimento}</td>
								<td>{item.sexo}</td>
								<td>{item.cep}</td>
								<td>{item.endereco}</td>
							</tr>
						);
					} else {
						return (
							<>
								<tr key={item._id.toString()}>
									<td>
										<div className="consulta-img-container">
											<img src={item.imagemPerfil.url} />
										</div>
									</td>
									{/* <td>{`${dia}/${mes}/${ano}`}</td> */}
									<td>{`${item.cpf.charAt(0)}${item.cpf.charAt(
										1
									)}${item.cpf.charAt(2)}. *** . *** -${item.cpf.charAt(
										12
									)}${item.cpf.charAt(13)}`}</td>
									<td>{item.nome}</td>
									<td>{item.dataNascimento}</td>
									<td>{item.sexo}</td>
									<td>{item.cep}</td>
									<td>{item.endereco}</td>
								</tr>
							</>
						);
					}
				}
			})}
		</>
	);
};
export default TabelaAdimistrador;
