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
        <div className="sidenav-container">
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
                <div className="sidebar-body">
                    <span className="sidenav-title">Gerenciar cadastros</span>
                    <ul className="nav-list">
                        { (arrayNavCadastros).map((item: any, index: any) => <SubMenu key={index} item={item}/>) }
                    </ul>
                    <span className="sidenav-title">Gerenciar Perfis</span>
                    <ul className="nav-list">
                    { (arrayNavPerfis).map((item: any, index: any) => <SubMenu key={index} item={item}/>) }
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default DashboardSidenav;