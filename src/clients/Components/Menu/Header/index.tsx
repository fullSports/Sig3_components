import './styles.css';
import '../../../../styles.css';
import { arrayNavItems } from '../../../../utils/NavItems';
import { useTheme } from '../../../../utils/Hooks/useTheme';
import Sidebar from '../Sidebar/index';
import styled from 'styled-components';
import { RiMenuFill } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import { TbArrowBigDown, TbArrowBigUp } from 'react-icons/tb';
import { ImAccessibility, ImContrast } from 'react-icons/im';
import { Link } from 'react-router-dom';
import brandLogo from '../../../../assets/images/fullSportLogo.svg';
import carrinhoIcon from '../../../../assets/icons/carrinho-icon.png';
import suporteIcon from '../../../../assets/icons/help-icon.png';
import contaIcon from '../../../../assets/icons/conta-icon.png';
import { useState } from 'react';
const Icone = styled.div`
	background-color: #796969;
	height: 27px;
	width: 27px;
	border-radius: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: auto;
	margin-left: auto;
	font-size: 22px;
`;
const BotaoNumber = styled.div`
	background-color: #796969;
	height: 20px;
	width: 20px;
	border-radius: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	cursor: pointer;
`;
const DivCarrinho = styled.div`
	cursor: pointer;
`;
const Cabecalho = () => {
	const { theme, setTheme } = useTheme();
	const user = JSON.parse(localStorage.getItem('user') as string);
	const carrinho = JSON.parse(localStorage.getItem('carrinho') as string);
	const [busca, setBusca] = useState('');
	function openTeste() {
		const sidebar = document.querySelector('.sidebar-header');
		const isSideOpen = sidebar?.classList.contains('hideShow');
		return isSideOpen
			? sidebar?.classList.remove('hideShow')
			: sidebar?.classList.toggle('hideShow');
	}

	function aoSubmeterForm(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		window.location.href = `/produtos/?busca=${busca}`;
	}
	function showToggleOpts() {
		const toggleAcess = document.querySelector('.toggle-group');
		const isDisplayed = toggleAcess?.classList.contains('hideShow');
		return isDisplayed
			? toggleAcess?.classList.remove('hideShow')
			: toggleAcess?.classList.toggle('hideShow');
	}
	function MostrarImagemPerfil() {
		if (user) {
			if (user.imagemPerfil === null || user.imagemPerfil === undefined) {
				return (
					<Icone className="icone">
						<p className="text-black">{user.nome.charAt(0)}</p>
					</Icone>
				);
			} else {
				return <img src={user.imagemPerfil.url} />;
			}
		} else {
			return <img src={contaIcon} />;
		}
	}
	function editarInfoConta() {
		if (user) {
			const userDetails = document.querySelector('.user-options');
			const isDisplayed = userDetails?.classList.contains('hide');
			return isDisplayed
				? userDetails?.classList.remove('hide')
				: userDetails?.classList.toggle('hide');
		}
	}
	function MostrarCarrinho() {
		if (carrinho) {
			return (
				<DivCarrinho>
					<a href="/carrinho-de-compra/">
						<BotaoNumber>{carrinho.pedido.quantidade}</BotaoNumber>
						<img src={carrinhoIcon} alt="Carrinho" />
					</a>
				</DivCarrinho>
			);
		} else {
			return (
				<DivCarrinho>
					<a href="/carrinho-de-compra/">
						<img src={carrinhoIcon} alt="Carrinho" />
					</a>
				</DivCarrinho>
			);
		}
	}

	return (
		<>
			<div className="sidebar-header hideShow">
				<button className="toggleSidebar" onClick={openTeste}>
					<RiMenuFill size={30} />
				</button>
				<div className="sidebar-logo">
					<Link to="/">
						<img
							src={brandLogo}
							alt="Logo do fullSports que redireiona para home"
						/>
					</Link>
				</div>
				<Sidebar />
			</div>

			<div className="toggle-acess">
				<div className="toggle-main">
					<button onClick={showToggleOpts} className="toggle-btn">
						<ImAccessibility />
					</button>
				</div>
				<div className="toggle-group hideShow">
					<div className="toggle-opts">
						<button className="toggle-opt-btn">
							<TbArrowBigUp />
						</button>
					</div>
					<div className="toggle-opts">
						<button className="toggle-opt-btn">
							<TbArrowBigDown />
						</button>
					</div>
					<div className="toggle-opts">
						{theme === 'light' ? (
							<button
								onClick={() => setTheme('dark')}
								className="toggle-opt-btn"
							>
								<ImContrast />
							</button>
						) : (
							<button
								onClick={() => setTheme('light')}
								className="toggle-opt-btn"
							>
								<ImContrast />
							</button>
						)}
					</div>
				</div>
			</div>

			<div className="header-container">
				<div className="header-acess header-resp">
					<div className="acess-props">
						<ul>
							<li>
								<span id="aumentaFonteDesktop">Aumentar Fonte</span>
							</li>
							<li>
								<span id="diminuiFonteDesktop">Diminuir Fonte</span>
							</li>
							<li>
								{theme === 'light' ? (
									<span
										onClick={() => setTheme('dark')}
										className="cursor-pointer"
									>
										{' '}
										Sem Contraste
									</span>
								) : (
									<span
										onClick={() => setTheme('light')}
										className="cursor-pointer"
									>
										{' '}
										Alto Contraste
									</span>
								)}
							</li>
							{/* <li>
              <span>Modo Escuro</span>
            </li> */}
						</ul>
					</div>
				</div>
				<div className="header-resp-logo">
					<a href="/">
						<img src={brandLogo} alt="imagem do logo da loja" />
					</a>
				</div>
				<div className="header-items-container">
					<div className="header-items-group">
						<div className="toggle-menu">
							<button className="header-toggle" onClick={openTeste}>
								<RiMenuFill size={30} />
							</button>
						</div>
						<form onSubmit={aoSubmeterForm}>
							<div className="header-search-bar">
								<div className="search-bar">
									<input
										type="text"
										className="search-input"
										placeholder="O que você busca?"
										onChange={(e) => setBusca(e.target.value)}
									/>
									<button className="input-search-btn" type={'submit'}>
										<BiSearch size={20} color={'#09080990'} />
									</button>
								</div>
							</div>
						</form>
						<div className="header-logo header-resp">
							<a href="/">
								<img
									src={brandLogo}
									alt="Logo do fullSports que redireiona para home"
								/>
							</a>
						</div>
						<div className="header-help-icons header-resp">
							<ul className="help-icons">
								<li>
									<MostrarCarrinho />
								</li>
								<li>
									<a href="#">
										<img src={suporteIcon} alt="Suporte" />
										Suporte
									</a>
								</li>
								<li>
									<div onClick={editarInfoConta} className="profile-info">
										<MostrarImagemPerfil />
										{user ? (
											user.nome.split(' ').slice(0, 1)
										) : (
											<Link to="/login">Entrar</Link>
										)}
									</div>
									<div className="user-options hide">
										<ul>
											<li
												onClick={() => {
													window.location.href = `/atualizar-cliente/${user._id}`;
												}}
											>
												Editar Perfil
											</li>
											<li
												onClick={() => {
													window.location.href = '/historico-de-pedido';
												}}
											>
												Histórico de Pedido
											</li>
											<li
												onClick={() => {
													window.localStorage.removeItem('user');
													window.localStorage.removeItem('carrinho');
													window.location.href = '/';
												}}
											>
												Sair
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="nav-items-group header-resp">
						<ul className="nav-items">
							{arrayNavItems.map((el) => {
								return (
									<li
										className="header-nav-item"
										key={`header-nav-item-${el.title}`}
									>
										<a href={el.path} className="nav-item-btn">
											{el.title}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
export default Cabecalho;
