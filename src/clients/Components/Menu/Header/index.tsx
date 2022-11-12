import './styles.css';
import '../../../../styles.css';
import {arrayNavItems} from '../../../../utils/NavItems';
import Sidebar from '../Sidebar/index'

import {RiMenuFill} from 'react-icons/ri';
import {BiSearch} from 'react-icons/bi';
import {TbArrowBigDown, TbArrowBigTop} from 'react-icons/tb';
import {ImAccessibility, ImContrast} from 'react-icons/im';
const brandLogo = require('../../../../assets/images/fullSportLogo.png');
const carrinhoIcon = require('../../../../assets/icons/carrinho-icon.png');
const suporteIcon = require('../../../../assets/icons/help-icon.png');
const contaIcon = require('../../../../assets/icons/conta-icon.png');

const Cabecalho = () => {

  function openTeste(){
    let sidebar = document.querySelector('.sidebar-header');
    var isSideOpen = sidebar?.classList.contains('hideShow')
    isSideOpen ? sidebar?.classList.remove("hideShow") : sidebar?.classList.toggle("hideShow")
  }

  function showToggleOpts(){
    let toggleAcess = document.querySelector('.toggle-group');
    var isDisplayed = toggleAcess?.classList.contains('hideShow')
    isDisplayed ? toggleAcess?.classList.remove("hideShow") : toggleAcess?.classList.toggle("hideShow")
  }

  return (
    <>
    <div className="sidebar-header hideShow">
      <button className="toggleSidebar" onClick={openTeste}>
        <RiMenuFill size={30} color={'#09080990'}/>
      </button>
      <div className="sidebar-logo">
          <img src={brandLogo} alt="" />
      </div>
      <Sidebar/>
    </div>

    <div className="toggle-acess">
      <div className="toggle-main">
        <button onClick={showToggleOpts} className='toggle-btn'>
          <ImAccessibility size={30} color={'#fff'}/>
        </button>
      </div>
      <div className="toggle-group hideShow">
        <div className="toggle-opts">
          <button className='toggle-opt-btn'>
            <TbArrowBigTop size={24} color={'#fff'}/>
          </button>
        </div>
        <div className="toggle-opts">
          <button className='toggle-opt-btn'>
            <TbArrowBigDown size={24} color={'#fff'}/>
          </button>
        </div>
        <div className="toggle-opts">
          <button className='toggle-opt-btn'>
            <ImContrast size={24} color={'#fff'}/>
          </button>
        </div>
      </div>
  </div>

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
              <span className="cursor-pointer">Alto Contraste</span>
            </li>
            <li>
              <span>Modo Escuro</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-resp-logo">
        <img src={brandLogo} alt=""/>
      </div>
      <div className="header-items-container">
        <div className="header-items-group">
          <div className="toggle-menu">
            <button className="header-toggle" onClick={openTeste}>
              <RiMenuFill size={30} color={'#09080990'}/>
            </button>
          </div>
          <div className="header-search-bar">
            <div className="search-bar">
              <input type="text" className='search-input' placeholder='O que você busca?'/>
              <button className="input-search-btn"><BiSearch size={20} color={'#09080990'}/></button>
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

