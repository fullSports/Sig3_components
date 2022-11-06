import React from "react";
import '../../../styles.css';
import './styles.css';
import {arrayNavItems} from '../../../utils/NavItems';
const brandLogo = require('../../../assets/images/fullSportLogo.png');

const Sidebar = () => {

    return (
        <div className="sidebar-container">
            <div className="sidebar-body">
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
                { arrayNavItems.map((el: any) => {
                    return(
                        <li className="nav-item">
                        <a href="{el.path}" className='sidenav-item-btn'>
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