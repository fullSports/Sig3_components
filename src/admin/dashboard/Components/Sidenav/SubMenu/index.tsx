import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const SubMenu = ({ item,key } : any) => {

    const [closed, setClose] = useState(false)

    if (item.subMenu) {
        return (
            <li className={closed ? "nav-item open" : "nav-item "} onClick={() => setClose(!closed)} key={key}>
                <i className={`${item.icon} navlist-icon`}></i>
                <span >
                    {item.name}
                </span>
                <i className="bi bi-caret-down-fill"></i>
                <span>
                    {item.subMenu.map((child: any, index: any) => <SubMenu key={index} item={child} />)}
                </span>
            </li>
        )
    }
    else {
        return (
            <Link to="#" onClick={() => window.location.href = `${item.path}`} key={key}>
                <p className="nav-subitem">
                    <span> {item.name} </span>
                </p>
            </Link>
        )
    }
}
export default SubMenu