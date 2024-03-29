import { useState } from 'react';
import { arrayNavItems } from '../../../../utils/NavItems';
import { useTheme } from '../../../../utils/Hooks/useTheme';
import Sidebar from '../Sidebar/index';
import headerVideo from './../../../../assets/videos/banner-home-run-cinematic.mp4';
import './styles.css';
import { BiSearch } from 'react-icons/bi';
import { RiMenuFill } from 'react-icons/ri';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ImAccessibility, ImContrast } from 'react-icons/im';
import { TbArrowBigDown, TbArrowBigUp } from 'react-icons/tb';
import brandLogo from '../../../../assets/images/fullSportLogo.png';
import carrinhoIcon from '../../../../assets/icons/carrinho-icon.png';
import suporteIcon from '../../../../assets/icons/help-icon.png';
import contaIcon from '../../../../assets/icons/conta-icon.png';
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
	margin-left: 12px;
	margin-top: 6px;
`;
const HomeHeader = () => {
	const { theme, setTheme } = useTheme();
	const user = JSON.parse(localStorage.getItem('user') as string);
	const carrinho = JSON.parse(localStorage.getItem('carrinho') as string);
	const [busca, setBusca] = useState('');
	function openTeste() {
		const sidebar = document.querySelector('.header-side');
		const isSideOpen = sidebar?.classList.contains('show-sidebar');
		return isSideOpen
			? sidebar?.classList.remove('show-sidebar')
			: sidebar?.classList.toggle('hideShow');
	}
	function showToggleOpts() {
		const toggleAcess = document.querySelector('.toggle-group');
		const isDisplayed = toggleAcess?.classList.contains('hideShow');
		return isDisplayed
			? toggleAcess?.classList.remove('hideShow')
			: toggleAcess?.classList.toggle('hideShow');
	}
	function aoSubmeterForm(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		window.location.href = `/produtos/?busca=${busca}`;
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
	function MostrarCarrinho() {
		if (carrinho) {
			return (
				<>
					<BotaoNumber>{carrinho.pedido.quantidade}</BotaoNumber>
					<img src={carrinhoIcon} alt="Carrinho" />
				</>
			);
		} else {
			return (
				<>
					<img src={carrinhoIcon} alt="Carrinho" />
				</>
			);
		}
	}
	function editarInfoConta() {
		if (user) {
			const userDetails = document.querySelector('.user-options-home');
			const isDisplayed = userDetails?.classList.contains('hide');
			return isDisplayed
				? userDetails?.classList.remove('hide')
				: userDetails?.classList.toggle('hide');
		}
	}
	return (
		<>
			<div className="toggle-acess">
				<div className="toggle-main">
					<button onClick={showToggleOpts} className="toggle-btn">
						<ImAccessibility size={30} />
					</button>
				</div>
				<div className="toggle-group hideShow">
					<div className="toggle-opts">
						<button className="toggle-opt-btn" id="aumentaFonte">
							<TbArrowBigUp />
						</button>
					</div>
					<div className="toggle-opts">
						<button className="toggle-opt-btn" id="diminuiFonte">
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
			<div className="header-side show-sidebar">
				<button className="toggleSidebar" onClick={openTeste}>
					<RiMenuFill size={30} />
				</button>
				<div className="sidebar-logo">
					<img src={brandLogo} alt="" />
				</div>
				<Sidebar />
			</div>
			<div className="header-top-barra">
				<div className="home-barra-acess-props hide-header">
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
				<div className="home-barra-client-items hide-header">
					<ul>
						<li onClick={() => (window.location.href = '/carrinho-de-compra/')}>
							<MostrarCarrinho />
							Carrinho
						</li>
						<li>
							<img src={suporteIcon} alt="Suporte" />
							Suporte
						</li>
						<li>
							<div onClick={editarInfoConta} className="flex gap-2">
								<MostrarImagemPerfil />
								{user ? (
									user.nome.split(' ').slice(0, 1)
								) : (
									<Link to="/login">Entrar</Link>
								)}
							</div>
							<div className="user-options-home hide">
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
			<div className="search-container">
				<div className="menu-toggle">
					<button onClick={openTeste}>
						<RiMenuFill />
					</button>
				</div>
				<form onSubmit={aoSubmeterForm}>
					<div className="searchbar-contaienr">
						<input
							type="text"
							placeholder="O que você busca?"
							onChange={(e) => setBusca(e.target.value)}
						/>
						<button className="search-btn" type={'submit'}>
							<BiSearch />
						</button>
					</div>
				</form>
				<div className="hide-header">
					<ul className="menu-items">
						{arrayNavItems.map((el) => {
							return (
								<li className="menu-item" key={`menu-item-${el.title}`}>
									<a href={el.path} className="menu-item-btn">
										{el.title}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className="header-desc">
				<div className="header-txt">
					<h4 className="txt-light">o melhor dos</h4>
					<h4 className="txt-bold">artigos esportivos</h4>
					<h4 className="txt-light">para você.</h4>
				</div>
				<div className="header-brand-container">
					<img src={brandLogo} alt="Full Sports" />
				</div>
			</div>
			<div className="video-header">
				<div className="header-transparent-cover"></div>
				<video
					autoPlay
					loop
					muted
					disablePictureInPicture
					controlsList="nodownload"
				>
					<source src={headerVideo} type="video/mp4" />
				</video>
			</div>
		</>
	);
};

export default HomeHeader;
