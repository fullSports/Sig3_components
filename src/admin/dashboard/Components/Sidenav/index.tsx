import React, { useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import './styles.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import { arrayNavCadastros, arrayNavPerfis } from '../../utils/arrayNavDashboard';
import SubMenu from './SubMenu';
const ex_pfp = require('../../../../assets/images/pfp-dashboard-ex.png');

const DashboardSidenav = () =>{

    const [collapsed, setCollapse] = useState(false);

    return(
        <>
        <div className={`${collapsed ? 'w-[140px] mr-3' : 'w-[400px] mr-8'} sidenav-container`}>
            <div className={`${collapsed ? 'sidenav-collapsed' : 'sidenav-open'} sidenav`}>
                <div className="sidenav-header">
                    <button className="toggle-collapse" onClick={() => setCollapse(!collapsed)}>
                        <GiHamburgerMenu/>
                    </button>
                    <div className={`${collapsed ? 'h-[50px] w-[50px]' : "h-[80px] w-[80px]"} pfp-container`}>
                        <img src={ex_pfp} alt="" />
                    </div>
                    <div className={`${collapsed ? 'hide-item' : ''} user-info`}>
                        <span>Renan Figueredo</span>
                        <div className="user-role">
                            <span>Administrador | renan@gmail.com</span>
                        </div>
                    </div>
                </div>
                <ul className="nav-list">
                    <li className="nav-item">
                        <i className="bi bi-house-door-fill navlist-icon"></i>
                        <span> Início </span>
                    </li>
                    <span className="sidenav-title">Gerenciar cadastros</span>
                        { (arrayNavCadastros).map((item: any, index: any) => <SubMenu key={index} item={item}/>) }
                    <span className="sidenav-title">Gerenciar Perfis</span>
                    { (arrayNavPerfis).map((item: any, index: any) => <SubMenu key={index} item={item}/>) }
                </ul>
            </div>
        </div>
        </>
    )
}

export default DashboardSidenav;