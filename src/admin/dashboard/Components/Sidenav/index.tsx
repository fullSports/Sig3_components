import React, { useState } from 'react';
import './styles.css';
import {GiHamburgerMenu} from 'react-icons/gi'
const ex_pfp = require('../../../../assets/images/pfp-dashboard-ex.png');

const DashboardSidenav = () =>{

    const [collapsed, setCollapse] = useState(false);

    return(
        <div className="sidenav-container">
            <div className={`${collapsed ? 'w-[90px]' : 'w-[290px]'} sidenav`}>
                <div className="sidenav-header">
                    <button className="toggle-collapse" onClick={() => setCollapse(!collapsed)}>
                        <GiHamburgerMenu/>
                    </button>
                    <div className={`${collapsed ? 'h-[50px] w-[50px]' : "h-[80px] w-[80px]"} pfp-container`}>
                        <img src={ex_pfp} alt="" />
                    </div>
                    <div className={`${collapsed ? 'invisible opacity-0' : ''} user-info`}>
                        <span>Renan Figueredo</span>
                        <div className="user-role">
                            <span>Administrador | renan@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="sidenav-body">
                    
                </div>     
            </div>
        </div>
    )
}

export default DashboardSidenav;