import './styles.css';
import '../../../styles.css';
import {arrayNavItems} from '../../../utils/NavItems';
import Sidebar from '../Sidebar/index'

const brandLogo = require('../../../assets/images/fullSportLogo.png');
const carrinhoIcon = require('../../../assets/icons/carrinho-icon.png');
const suporteIcon = require('../../../assets/icons/help-icon.png');
const contaIcon = require('../../../assets/icons/conta-icon.png');

// const Botao = () => {
//   document.querySelector('.menu-lateral')?.classList.toggle('menu-lateral--ativo');
//   document.querySelector('.form-cadastro-cliente')?.classList.toggle('forms-none');
//   document.querySelector('.form-cadastro-produto')?.classList.toggle('forms-none');
// }
const Cabecalho = () => {
  
  return (
    <>
    <Sidebar/>
    <div className="header-container">
      <div className="header-acess header-resp">
        <div className="acess-props">
          <ul>
            <li>
              <span>Aumentar Fonte</span>
            </li>
            <li>
              <span>Diminuir Fonte</span>
            </li>
            <li>
              <span>Alto Contraste</span>
            </li>
            <li>
              <span>Modo Escuro</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-items-container">
        <div className="header-items-group">
          <div className="header-search-bar">
            <div className="search-bar">
              <input type="text" className='search-input' placeholder='O que você busca?'/>
            </div>
          </div>
          <div className="header-logo header-resp">
            <img src={brandLogo} alt="" />
          </div>
          <div className="header-help-icons header-resp">
            <ul className="help-icons">
              <li>
                <a href="#">
                <img src={carrinhoIcon} alt="Suporte" />
                Carrinho
                </a>
              </li>
              <li>
                <a href="#">
                <img src={suporteIcon} alt="Suporte" />
                Suporte
                </a>
              </li>
              <li>
                <a href="#">
                <img src={contaIcon} alt="Conta" />
                Conta
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-items-group header-resp">
          <ul className="nav-items">
          { arrayNavItems.map((el: any) => {
              return(
                <li className="nav-item">
                  <a href="{el.path}" className='nav-item-btn'>
                    {el.title}
                  </a>
                </li>
              )
            })}
        </ul>
        </div>
      </div>
    </div>
    </>
  );
}
export default Cabecalho;

