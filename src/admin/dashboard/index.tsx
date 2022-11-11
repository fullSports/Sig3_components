import React from 'react';
import DashboardSidenav from './Components/Sidenav';
import './styles.css';

const DashboardHome = () =>{
    return(
        <>
        <div className="flex">
            <DashboardSidenav/>
            <div>
                <h1>Teste</h1>
            </div>
        </div>
        </>
    )
}
export default DashboardHome;