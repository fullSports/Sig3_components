import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const SubMenu = ({ item } : any) => {

    const [closed, setClose] = useState(false)

    if (item.subMenu) {
        return (
            <li className={closed ? "nav-item open" : "nav-item "} onClick={() => setClose(!closed)}>
                <i className={`${item.icon} navlist-icon`}></i>
                <span >
                    {item.name}
                </span>
                <i className="bi bi-caret-down-fill"></i>
                <li>
                    {item.subMenu.map((child: any, index: any) => <SubMenu key={index} item={child} />)}
                </li>
            </li>
        )
    }
    else {
        return (
            <Link to="#" onClick={() => window.location.href = `${item.path}`}>
                <li className="nav-subitem">
                    <span> {item.name} </span>
                </li>
            </Link>
        )
    }
}
export default SubMenu