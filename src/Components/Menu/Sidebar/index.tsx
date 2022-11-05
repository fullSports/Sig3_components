import React from "react";
import '../../../styles.css';
import './styles.css';

const Sidebar = () => {

    function closeSidenav(){
        document.querySelector('.sidebar-container')?.classList.toggle('hidden');
      }

    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
                a
                <button onClick={closeSidenav}>X</button>
            </div>
            <div className="sidebar-body">
                <div className="sidebar-navegacao">
                b
                </div>
                <div className="sidebar-categorias">
                c
                </div>
            </div>
        </div>
    )
}

export default Sidebar;