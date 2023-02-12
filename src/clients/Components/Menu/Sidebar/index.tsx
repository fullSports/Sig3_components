import React from "react";
import '../../../../styles.css';
import './styles.css';
import { arrayNavItems } from '../../../../utils/NavItems';
import { Link } from "react-router-dom";
const brandLogo = require('../../../../assets/images/fullSportLogo.png');

const Sidebar = () => {

    const user = JSON.parse(localStorage.getItem('user') as string);

    return (
        <div className="sidebar-container">
            <div className="sidebar-body">
                <div className="sidebar-navegacao">
                    <span className="sidebar-sec-title">Minha Conta</span>
                    <ul>
                        {user ? <><li>{user.nome.split(' ').slice(0, 2).join(' ')}</li>
                            <li onClick={() => {
                                window.location.href = `/atualizar-cliente/${user._id}`
                            }}>Editar Perfil</li>
                            <li onClick={() => {
                                window.location.href = "/historico-de-pedido"
                            }}>Histórico de Pedido</li>
                            <li onClick={() => {
                                window.localStorage.removeItem("user");
                                window.location.href = "/"
                            }}> Sair </li> </> : <li><Link to="/login">Entrar</Link></li>}
                    </ul>
                </div>
                <div className="sidebar-navegacao">
                    <span className="sidebar-sec-title">Navegação</span>
                    <ul>
                        <li>
                            <a href="#">Carrinho</a>
                        </li>
                        <li>
                            <a href="#">Suporte</a>
                        </li>
                        <li>
                            <a href="#">Cadastro/Login</a>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-navegacao">
                    <span className="sidebar-sec-title">Categorias</span>
                    <ul className="sidenav-items">
                        {arrayNavItems.map((el: any) => {
                            return (
                                <li className="nav-item">
                                    <a href={el.path} className='sidenav-item-btn'>
                                        {el.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;