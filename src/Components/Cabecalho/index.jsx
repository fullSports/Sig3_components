import React from "react";
import styled from "styled-components";
import logo_loja from "../../assets/images/fullSportLogo.png";
import FacebookIcone from "../../assets/images/facebook.png";
import TwitterIcone from "../../assets/images/twitter.png"
import InstagramIcone from "../../assets/images/instagram.png"
import WhatsappIcone from "../../assets/images/whatsapp.png"

import { corPrimaria } from "../UI/variaveis"; 
//header
const Topo = styled.header`
  min-width:100%
  height: auto;
  background-color: #ebebeb;
`;

//barra de acessiblidade
const Acessibilidade = styled.div`
  background-color: #ebebeb;
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
    color: #2e2e2e;
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
//links na barra de acessibilidade
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
const Atalhos2 =styled.ul`
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

//Bloco do cabeçalho
const NavGrid =styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 350px);
  margin-bottom:1%;
  justify-items: end;
  align-items: end;

  @media screen and (max-width: 1144px) {
  justify-items: start;  
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(3, 160px);
  }
  @media screen and (max-width: 450px) {
    justify-items: flex-end;
    grid-template-columns: repeat(3, 30%);
  }
`;

//Barra de pesquisa
const BarraPesquisa = styled.div`
  margin-top: 12%;
  
`;
const BarraPesquisaInpult = styled.input`
  padding: 8px;
  width: 350px;
  height: 25px;
  border: 1px solid #fff;
  border-radius: 20px;
  background-color: #fff;

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
//Logo 
const Logo = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 100px;
`;
const LogoImg = styled.img`
  width: 100%;
  height: 100px;
`;

//iconesRedesSociais
const ConjuntoIcones = styled.div`
  margin-top: 10%;
 display: flex;
  img{
    height: 24px;
  }
  li{
    margin-left: 5px;
    display: inline;
    color: rgb(255, 255, 255);
  }
  a {
    text-decoration: none;
  }
  
  
  }
`;

//Menu
const Menu = styled.nav`
  background-color: #a6e65a;
  ul{
    text-align: center;
  list-style:none;
  }
  li{
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
  `;

const Cabecalho = () =>{
  return(
    <Topo id="topo" className="topo">
      <Acessibilidade id="acessibilidade" className="aacessibilidade">
        <Atalhos id="atalhos" className="atalhos">
      <li>
					<a  href="#conteudo" accesskey="1" title="Ir diretamente para o conteúdo">Ir para o conteudo [1]</a>
				</li>

				<li>
					<a  href="#menu" accesskey="2" title="Ir diretamente para o menu">Ir para o menu [2]</a>
				</li>

				<li>
					<a  href="#rodape" accesskey="3" title="Ir diretamente para o rodapé">Ir para o rodape [3]</a>
				</li>
        </Atalhos>

        <Atalhos2 id="atalhos2" className="atalhos2">
        <li>
					<a href="#" title="Ir para pagina de acessabilidade">Acessibilidade</a>
				</li>

				<li>
					<a href="#" title="Contraste preto" id="modoEscuro">Modo escuro</a>
				</li>

				<li>
					<a href="#" title="sem Contraste" id="modoClaro">Modo Claro</a>
				</li>
					
				<li>
					<a href="#" title="Aumentar a fonte(Ctrl +)" id="aumentaFonte">A+</a>
				</li>

				<li>
					<a href="#" title="Diminuir a fonte(Ctrl -)" id="diminuiFonte">A-</a>
				</li>

        </Atalhos2>
      </Acessibilidade>

      <NavGrid id="navGrid" className="navGrid">
        <BarraPesquisa id="barraPesquisa">
          <BarraPesquisaInpult class="Buscar" type="text" name="buscar" placeholder="Buscar..."></BarraPesquisaInpult>
        </BarraPesquisa>

        <Logo id="logo"className="logo"> 
          <a href="#" ><LogoImg  src={logo_loja} alt="Logo da Loja"></LogoImg ></a>
        </Logo>

        <ConjuntoIcones id="conjuntoIcones" className="conjuntoIcones">
          <ul>
            <li>
                <a href="https://www.facebook.com">
                    <img src = {FacebookIcone} alt="Facebook"/>
                </a>
            </li>

            <li>
                <a href="https://twitter.com">
                    <img src = {TwitterIcone} alt="Twitter"/>
                </a>
            </li>

            <li>
              <a href="https://www.instagram.com/">
                <img src= {InstagramIcone} alt="Instagram"/>
              </a>
            </li>

            <li>
              <a href="https://www.whatsapp.com">
                <img src= {WhatsappIcone} alt="Whatspp"/>
              </a>
            </li>
         </ul>
        </ConjuntoIcones>

      </NavGrid>

      <Menu id="menu" className="menu">
        <ul>
          <li><a href="">Clientes</a> </li>
          <li><a href="">Produtos</a> </li>
          <li><a href="">Pedidos</a> </li>
          <li><a href="">Equipamentos</a> </li>
          <li><a href="">Logout</a> </li>
        </ul>
      </Menu>

    </Topo>
  );
}

export default Cabecalho;
