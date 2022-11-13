import React, { useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import './styles.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import { arrayNavCadastros, arrayNavPerfis } from '../../utils/arrayNavDashboard';
const ex_pfp = require('../../../../assets/images/pfp-dashboard-ex.png');

const DashboardSidenav = () =>{

    const [collapsed, setCollapse] = useState(false);
    const [closed, setClose] = useState(true)

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
                <ul className="nav-list">
                    <li className='nav-item'>
                        <i className="bi bi-house-door-fill"></i>
                        <a href="" className={`${collapsed ? 'invisible opacity-0' : ''}`}>Início</a>
                    </li>
                
                    <span className={`${collapsed ? 'hide-item' : ''} sidenav-title`}>
                        Gerenciar Cadastros
                    </span>
                    { arrayNavCadastros.map((item:any, subMenu: any) =>(
                            <li className={closed ? "nav-item open" : "nav-item "}>
                                <i className={item.icon}></i>
                                <span onClick={()=> setClose(!closed)}
                                    className={`${collapsed ? 'invisible opacity-0' : ''}`}>
                                    {item.name}
                                </span>
                                <i className="bi bi-caret-down-fill"></i>
                                <ul>
                                
                                    { item.subMenu.map((sub:any) =>(
                                        <li className={`${
                                            collapsed ? 'hide-item' : '' 
                                            } nav-subitem`}
                                        >
                                            <a href=""> {sub.name} </a>
                                        </li>
                                    ))
                                    }
                                </ul>
                            </li>

                    )) }
                    <span className={`${collapsed ? 'hide-item' : ''} sidenav-title`}>
                        Gerenciar Perfis
                    </span>
                    { arrayNavPerfis.map((item: any) =>{
                        return (
                            <li className="nav-item">
                                <i className={item.icon}></i>
                                <a href="" className={`${collapsed ? 'invisible opacity-0' : ''}`}>{item.name}</a>
                            </li>
                        )
                    }) }
                </ul>
                {/* </div>      */}
            </div>
        </div>
        </>
    )
}

export default DashboardSidenav;