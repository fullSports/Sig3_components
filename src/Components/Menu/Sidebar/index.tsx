import React from "react";
import '../../../styles.css';
import './styles.css';
import {arrayNavItems} from '../../../utils/NavItems';
import {RiMenuFill} from 'react-icons/ri';
const brandLogo = require('../../../assets/images/fullSportLogo.png');

const Sidebar = () => {

    function closeSidenav(){
        document.querySelector('.sidebar-container')?.classList.toggle('hidden');
      }

    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
                <button onClick={closeSidenav}><RiMenuFill className="toggleSidebar" size={30}/></button>
                <div className="header-logo">
                    <img src={brandLogo} alt="" />
                </div>
            </div>
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
                <span className="sidebar-sec-title">Navegação</span>
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