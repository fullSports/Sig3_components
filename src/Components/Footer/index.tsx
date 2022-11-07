import {BiSend} from 'react-icons/bi'
import {arrayNavItems} from '../../utils/NavItems';
import {DevNames} from '../../utils/devNames';
import '../../../src/styles.css';
import './styles.css';

const Footer = () =>{
    return(
        <div className="footer-container">

            <div className="footer-news-sub">
                <div className="news-sub-desc">
                    <span className="news-sub-title">Quer ficar por dentro das novidades?</span>
                    <span className="news-sub-subt">Assine nossa newsletter e continue atualizado sobre nossos lançamentos.</span>
                </div>
                <div className="input-container">
                    <input placeholder="Insira seu e-mail" type="email" />
                    <button><BiSend color={'#09080980'}/></button>
                </div>
            </div>

            <div className="footer-body">
                <div className="footer-left-group">
                    <div className="footer-items-group">
                        <h6 className="footer-item-title">Navegação</h6>
                        <ul className="items-group">
                            { arrayNavItems.map((el: any) =>{
                                return (
                                    <li className="footer-items">
                                        <a href="#" className="footer-link">
                                            {el.title}
                                        </a>
                                    </li>
                                )
                            }) }
                        </ul>
                    </div>
                    <div className="footer-item-group">
                        <h6 className="footer-item-title">Desenvolvedores</h6>
                        <ul className="items-group">
                            { DevNames.map((el: any) => {
                                return(
                                    <li className="footer-items">
                                        <a target="_blank" href={el.linkedin}>
                                            {el.name}
                                        </a>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Footer;