import React from "react";
import styled from "styled-components";
const logo_loja = require("../../assets/images/fullSportLogo.png");
const FacebookIcone = require("../../assets/images/facebook.png");
const TwitterIcone = require("../../assets/images/twitter.png");
const InstagramIcone = require("../../assets/images/instagram.png");
const WhatsappIcone = require("../../assets/images/whatsapp.png");
const ImgBotaoMenu = require('./../../assets/images/botao-de-menu-de-tres-linhas-horizontais.png');

const Topo = styled.header`
  min-width:100%
  height auto;
`
const Acessibilidade = styled.div`
  padding: 15px 0 0 0;
  min-height: 35px;
  font-weight: 450;
  font-size: 14px;
  height: auto;
  margin: auto;
  
  ul li{
    margin-left: 20px;
  }

  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  } 

  li{
    display: inline;
  }
  @media screen and (max-width: 1144px) {
    display:flex;
    ul li{
    margin:5px;
    
    }
    @media screen and (max-width: 450px) {
      display:grid;
      }  
  }
`;
const Atalhos = styled.ul`
  margin-left: 105px;
  float: left;
  list-style: none;
  @media screen and (max-width: 1144px) {
    display:flex;
  }
  @media screen and (max-width: 1144px) {
    margin-left: 5px;
  }
`;
const Atalhos2 = styled.ul`
  margin-right: 105px;
  float: right;
  list-style: none;
  margin-left: 20px;
  @media screen and (max-width: 1144px) {
    display:flex;
  }
  @media screen and (max-width: 1144px) {
    margin-right: 2px;
    margin-left: 3px;
  }
`;
const NavGrid = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 350px);
  margin-bottom:10px;
  justify-items: end;
  align-items: end;

  @media screen and (max-width: 1144px) {
  justify-items: start;  
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(3, 160px);
  }
  @media screen and (max-width: 450px) {  
    grid-template-columns: repeat(3,100px);
  }
`;
const BarraPesquisa = styled.div`
  margin-top: 12%;
`;
const BarraPesquisaInpult = styled.input`
  padding: 8px;
  width: 350px;
  height: 25px;
  border-radius: 20px;

  @media screen and (max-width: 1144px) {
    padding: 4px;
    width: 150px;
  }
  @media screen and (max-width: 450px) {
    margin-left:2%;
    padding: 1px;
    width: 90%;
  }
`;
const Logo = styled.div`
  margin-left: auto;
  margin-right: auto;
  img{
    width: 150px;
  }
 
`;
const ConjuntoIcones = styled.div`
  margin-top: 10%;
 display: flex;
  img{
    height: 24px;
  }
  li{
    margin-left: 5px;
    display: inline;
  }
  a {
    text-decoration: none;
  }
  
  
  @media screen and (max-width: 450px) {
    ul{
      width:80%
    }

  }
`;
const Menu = styled.nav`
  *{
    background-color: #a6e65a;
  }
  ul{
  text-align: center;
  list-style:none;
  }
  ul li{
    display: inline;
  }
  a{
    padding: 2px 10px;
    display: inline-block;
    border: 10px solid #a6e65a;
    /* visual do link */
    background-color: #a6e65a;
    color: #2e2e2e;
    text-decoration: none;
  }
  ul li a {
    padding: 2px 10px;
    display: inline-block;
    border: 10px solid #a6e65a;
    /* visual do link */
    background-color: #a6e65a;
    color: #2e2e2e;
    text-decoration: none;
  }
  ul a:hover {
    /* height: 35px; */
    background-color:#ebebeb;
    border: 10px solid #ebebeb;
    color: #2e2e2e;
}
@media screen and (max-width: 460px) {
    display: none;
  }
`;
const BarraMenu = styled.nav`
  background-color: #a6e65a;
`;
const TituloCabecalho = styled.h1`
  @media screen and (min-width: 460px) {
    display: none;
  }
`;
const CabecalhoMenu = styled.button`
  @media screen and (min-width: 460px) {
    display: none;
  }
  i::before{
    content: url(${ImgBotaoMenu});
  }
  @media screen and (max-width:459px) {
    width: 20px;
    background-color: #a6e65a;
  }
  ::before{
    width: 20px;
    background-color: #a6e65a;
  }
`;
const MenuLateral = styled.div`
background-color:#a6e65a;
  @media screen and (min-width: 460px) {
    display: none;
  }
  @media screen and (max-width:459px) {
    .menu-lateral{
    display: flex;
    position: absolute;
    flex-direction: column;
    background-color:#67a51c;
    width: 100%;
    height: 50%;
    cursor: pointer;
    transition: .100s;
    left: -90000vh;

    li{
      background-color: #a6e65a;
      width: 100%;
      display: flex;
      height: 70px;
    }
  
    a{
      background-color:#67a51c;
      width: 100%;
      display: flex;
      justify-content: center;
      height: 50px;
    }
  }
    
  .menu-lateral--ativo{
    background-color:#a6e65a;
    transition: .100s;
    left: 0vh;
    position: absolute;
    }
                    
  }
`;
const Botao = () => {
  document.querySelector('.menu-lateral')?.classList.toggle('menu-lateral--ativo');
}
const Cabecalho = () => {
  const link = '#'
  return (
    <Topo id="topo" className="topo">
      <Acessibilidade id="acessibilidade" className="acessibilidade">
        <Atalhos id="atalhos" className="atalhos">
          <li>
            <a href="#conteudo" title="Ir diretamente para o conteúdo">Ir para o conteudo [1]</a>
          </li>

          <li>
            <a href="#menu" title="Ir diretamente para o menu">Ir para o menu [2]</a>
          </li>

          <li>
            <a href="#rodape" title="Ir diretamente para o rodapé">Ir para o rodape [3]</a>
          </li>
        </Atalhos>

        <Atalhos2 id="atalhos2" className="atalhos2">
          <li>
            <a href="/acessibilidade" title="Ir para pagina de acessabilidade">Acessibilidade</a>
          </li>

          <li>
            <a href={link} title="Contraste preto" id="modoEscuro">Modo escuro</a>
          </li>

          <li>
            <a href={link} title="sem Contraste" id="modoClaro">Modo Claro</a>
          </li>

          <li>
            <a href={link} title="Aumentar a fonte(Ctrl +)" id="aumentaFonte">A+</a>
          </li>

          <li>
            <a href={link} title="Diminuir a fonte(Ctrl -)" id="diminuiFonte">A-</a>
          </li>

        </Atalhos2>
      </Acessibilidade>

      <NavGrid id="navGrid" className="navGrid">
        <BarraPesquisa id="barraPesquisa">
          <BarraPesquisaInpult className="Buscar" type="text" name="buscar" placeholder="Buscar..."></BarraPesquisaInpult>
        </BarraPesquisa>

        <Logo id="logo" className="logo">
          <a href="/" ><img src={logo_loja} alt="Logo da Loja" /></a>
        </Logo>

        <ConjuntoIcones id="conjuntoIcones" className="conjuntoIcones">
          <ul>
            <li>
              <a href="https://www.facebook.com">
                <img src={FacebookIcone} alt="Facebook" />
              </a>
            </li>

            <li>
              <a href="https://twitter.com">
                <img src={TwitterIcone} alt="Twitter" />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/">
                <img src={InstagramIcone} alt="Instagram" />
              </a>
            </li>

            <li>
              <a href="https://www.whatsapp.com">
                <img src={WhatsappIcone} alt="Whatspp" />
              </a>
            </li>
          </ul>
        </ConjuntoIcones>

      </NavGrid>

      <Menu id="menu" className="menu">
        <ul>
          <li><a href="/sig/cadastro-de-cliente">Clientes</a> </li>
          <li><a href="/sig/cadastro-de-produto">Produtos</a> </li>
          <li><a href='/equipamentos'>Equipamentos</a> </li>
          <li><a href={link}>Logout</a> </li>
        </ul>
      </Menu>

      <BarraMenu id="barra__menu" className="barra__menu">
        <TituloCabecalho id="titulo__cabecalho" className="titulo__cabecalho">
          <CabecalhoMenu id="cabecalho__munu" onClick={Botao} className="cabecalho__munu" aria-label="Menu">
            <i></i>

          </CabecalhoMenu>
          Menu
        </TituloCabecalho>
      </BarraMenu>
      <MenuLateral>
        <nav id="menu-lateral" className="menu-lateral">
          <ul>
            <li><a href="/" id="menu-lateral__link" className="menu-lateral__link">Home</a> </li>
            <li><a href="/sig/cadastro-de-cliente" id="menu-lateral__link" className="menu-lateral__link">Clientes</a> </li>
            <li><a href="/sig/cadastro-de-produto" id="menu-lateral__link" className="menu-lateral__link">Produtos</a> </li>
            <li><a href="/equipamentos" id="menu-lateral__link" className="menu-lateral__link">Equipamentos</a> </li>
            <li><a href={link} id="menu-lateral__link" className="menu-lateral__link">Logout</a> </li>
          </ul>
        </nav>
      </MenuLateral>




    </Topo>
  );
}
export default Cabecalho;