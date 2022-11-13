import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

export default function SubMenu({item}){
    
    const [closed, setClose] = useState(false)

        if(item.subMenu){
            return(
                <li className={closed ? "nav-item open" : "nav-item "} onClick={()=> setClose(!closed)}>
                    <i className={`${item.icon} navlist-icon`}></i>
                    <span >
                        {item.name}
                    </span>
                    <i className="bi bi-caret-down-fill"></i>
                    <li>
                        { item.subMenu.map((child, index) => <SubMenu key={index} item={child}/>) }
                    </li>
                </li>
            )
        }
        else{
            return (
                <Link to={item.path}>
                    <li className="nav-subitem">
                        <span> {item.name} </span>
                    </li>
                </Link>
            )
        }
}