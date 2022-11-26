import React, { useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import './styles.css';
import { GiHamburgerMenu } from 'react-icons/gi'
import { arrayNavCadastros, arrayNavPerfis } from '../../utils/arrayNavDashboard';
import SubMenu from './SubMenu';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const ex_pfp = require('../../../../assets/images/pfp-dashboard-ex.png');
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
const DashboardSidenav = () => {

    const [collapsed, setCollapse] = useState(false);
    const user = JSON.parse(localStorage.getItem('user') as string)

    function MostrarImagemPerfil() {
        if (user.imagemPerfil === null|| user.imagemPerfil === undefined) {
            return <Icone className="icone">
            <p className="text-black">{user.nome.charAt(0)}</p>
           </Icone>
        } else {
            return <div className={`${collapsed ? 'h-[50px] w-[50px]' : "h-[80px] w-[80px]"} pfp-container`}>
                <img src={user.imagemPerfil.url} alt="" />
            </div>
        }
    }
    console.log(user?.length)
    return (
        <>
            <div className={`${collapsed ? 'w-[140px] mr-3' : 'w-[400px] mr-8'} sidenav-container`}>
                <div className={`${collapsed ? 'sidenav-collapsed' : 'sidenav-open'} sidenav`}>
                    <div className="sidenav-header">
                        <button className="toggle-collapse" onClick={() => setCollapse(!collapsed)}>
                            <GiHamburgerMenu />
                        </button>
                       <MostrarImagemPerfil />
                        <div className={`${collapsed ? 'hide-item' : ''} user-info`}>
                            <span>{ }</span>
                            <div className="user-role">
                                <span>{user.nome} | {user.login.email}</span>
                            </div>
                            <Button onClick={() => {
                                window.location.href = `/dashboard/atualizar-admin/${user._id}`
                            }}>
                                editar
                            </Button>
                            <Button onClick={() => {
                                localStorage.removeItem("user");
                                window.location.href = '/'
                            }}>Logout</Button>
                        </div>
                    </div>
                    <ul className="nav-list">
                        <Link to="/dashboard/home">
                            <li className="nav-item">
                                <i className="bi bi-house-door-fill navlist-icon"></i>
                                <span> Início </span>
                            </li>
                        </Link>
                        <span className="sidenav-title">Gerenciar cadastros</span>
                        {(arrayNavCadastros).map((item: any, index: any) => <SubMenu key={index} item={item} />)}
                        <span className="sidenav-title">Gerenciar Perfis</span>
                        {(arrayNavPerfis).map((item: any, index: any) => <SubMenu key={index} item={item} />)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DashboardSidenav;