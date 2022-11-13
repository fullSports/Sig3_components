import { useState } from 'react';
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
                <li className="nav-subitem">
                    <a href=""> {item.name} </a>
                </li>
            )
        }
        
        
        
        // { item.map((item:any, subMenu: any) =>(
        //     <li className={closed ? "nav-item open" : "nav-item "}>
        //         <i className={item.icon}></i>
        //         <span onClick={()=> setClose(!closed)}>
        //             {item.name}
        //         </span>
        //         <i className="bi bi-caret-down-fill"></i>
        //         <ul>
        //             { item.subMenu.map((sub:any) =>(
        //                 <li className="nav-subitem">
        //                     <a href=""> {sub.name} </a>
        //                 </li>
        //             ))
        //             }
        //         </ul>
        //     </li>
        // )) }

            {/* { arrayNavPerfis.map((item: any) =>{
                return (
                <li className="nav-item">
                    <i className={item.icon}></i>
                    <a href="">{item.name}</a>
                </li>
            )
        }) } */}
    
}

// export default SubMenu