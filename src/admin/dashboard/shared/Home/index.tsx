import { Switch } from '@mui/material';
import React from 'react';
import DashboardSidenav from '../../Components/Sidenav'
import '../../styles.css';
import { formatDate } from '../../utils/functions/formatDate';
import './styles.css';

const DashboardHome = () =>{

    const currentDay = new Date();
    const date = `${currentDay.getDate()}/${currentDay.getMonth()+1}/${currentDay.getFullYear()}`;
    const dateNow = formatDate(date)

    return(
        <>
        <div className="flex">
            <DashboardSidenav/>
            <div className='home-body'>
                <div className="home-header">
                    <div className="time-display">
                        <span>{dateNow}</span>
                    </div>
                    <div className="contrast-controller">
                        <Switch /> <span>Contraste</span>
                    </div>
                </div>
                <div className="home-welcome-card">
                    <div className="username-welcome">
                        <span>Bem vindo(a), Renan Figueredo.</span>
                    </div>
                    <div className="dash-desc">
                        <span>
                        Por  meio desse Dashboard, você pode gerenciar cadastros e realizar consultas
                        de produtos e perfis ligados ao sistema interno de dados da Full Sports ©.
                        </span>
                    </div>
                </div>
                <div className="cards-container">
                    <div className="card-statics-dashboard">

                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}
export default DashboardHome;