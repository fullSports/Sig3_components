import {arrayNavItems} from '../../utils/NavItems';

const NavItems = () => {
    return (
        <ul className="nav-items">
        {
          arrayNavItems.map((el: any, i: any) => {
            return(
              <li className="nav-item">
                <label>{el.title}</label>
              </li>
            )
          })
        }
    </ul>
    )    
}

export default NavItems;