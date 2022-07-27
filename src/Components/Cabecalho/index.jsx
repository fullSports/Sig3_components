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
  width: 100%;
  height: auto;
  background-color: #ebebeb;
  margin: 0;
  padding: 0;
`

//barra de acessiblidade
const Acessibilidade = styled.div`
  background-color: #ebebeb;
  padding: 15px 0 0 0;
  min-height: 35px;
  font-weight: 450;
  font-size: 14px;
  height: auto;
  margin: auto;
`;
//links na barra de acessibilidade
const Atalhos = styled.ul`
  margin-left: 105px;
  float: left;
  list-style: none;
`;
const Li = styled.li`
  display: inline;
  margin-left: 20px;
`;
const A = styled.a`
  text-decoration: none;
  color: #2e2e2e;
  text-decoration: underline;
`;
const Atalhos2 =styled.ul`
  margin-right: 105px;
  float: right;
  list-style: none;
  margin-left: 20px;
`;

//Bloco do cabeçalho
const NavGrid =styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 430px);
  grid-auto-rows: minmax(120px,auto);
`;

//Barra de pesquisa
const BarraPesquisa = styled.div`
  margin-top: 12%;
  float: left;
`;
const BarraPesquisaInpult = styled.input`
  padding: 8px;
  width: 350px;
  height: 25px;
  border: 1px solid #fff;
  border-radius: 20px;
  background-color: #fff;
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
  margin-top: 12%;
  float: right;
`;
const ConjuntoIconesImg = styled.img`
  height: 24px;
`;
const ConjuntoIconesUl = styled.ul`

`;
const ConjuntoIconesLi = styled.li`
  float: right;
  display: inline;
  color: rgb(255, 255, 255);
`;
const ConjuntoIconesA = styled.a`
  text-decoration: none;
`;


const Cabecalho = () =>{
  return(
    <Topo id="topo">
      <Acessibilidade id="acessibilidade">
        <Atalhos id="atalhos">
      <Li>
					<A  href="#conteudo" accesskey="1" title="Ir diretamente para o conteúdo">Ir para o conteudo [1]</A >
				</Li>

				<Li>
					<A  href="#menu" accesskey="2" title="Ir diretamente para o menu">Ir para o menu [2]</A >
				</Li>

				<Li>
					<A  href="#rodape" accesskey="3" title="Ir diretamente para o rodapé">Ir para o rodape [3]</A >
				</Li>
        </Atalhos>

        <Atalhos2 id="atalhos2">
        <Li>
					<A href="#" title="Ir para pagina de acessabilidade">Acessibilidade</A >
				</Li>

				<Li>
					<A href="#" title="Contraste preto" id="modoEscuro">Modo escuro</A >
				</Li>

				<Li>
					<A href="#" title="sem Contraste" id="modoClaro">Modo Claro</A >
				</Li>
					
				<Li>
					<A href="#" title="Aumentar a fonte(Ctrl +)" id="aumentaFonte">A+</A >
				</Li>

				<Li>
					<A href="#" title="Diminuir a fonte(Ctrl -)" id="diminuiFonte">A-</A >
				</Li>

        </Atalhos2>
      </Acessibilidade>

      <NavGrid class="navGrid">
        <BarraPesquisa id="barraPesquisa">
          <BarraPesquisaInpult class="Buscar" type="text" name="buscar" placeholder="Buscar..."></BarraPesquisaInpult>
        </BarraPesquisa>

        <Logo class="logo"> 
          <A href="#" ><LogoImg  src={logo_loja} alt="Logo da Loja"></LogoImg ></A>
        </Logo>

        <ConjuntoIcones id="conjuntoIcones">
          <ConjuntoIconesUl>
            <ConjuntoIconesLi>
                <ConjuntoIconesA href="https://www.facebook.com">
                    <ConjuntoIconesImg src = {FacebookIcone} alt="Facebook"></ConjuntoIconesImg>
                </ConjuntoIconesA>
            </ConjuntoIconesLi>

            <ConjuntoIconesLi>
                <ConjuntoIconesA href="https://twitter.com">
                    <ConjuntoIconesImg src = {TwitterIcone} alt="Twitter"></ConjuntoIconesImg>
                </ConjuntoIconesA>
            </ConjuntoIconesLi>

            <ConjuntoIconesLi>
              <ConjuntoIconesA href="https://www.instagram.com/">
                <ConjuntoIconesImg src= {InstagramIcone} alt="Instagram"></ConjuntoIconesImg>
              </ConjuntoIconesA>
            </ConjuntoIconesLi>

            <ConjuntoIconesLi>
              <ConjuntoIconesA href="https://www.whatsapp.com">
                <ConjuntoIconesImg src= {WhatsappIcone} alt="Whatspp"></ConjuntoIconesImg>
              </ConjuntoIconesA>
            </ConjuntoIconesLi>
         </ConjuntoIconesUl>
        </ConjuntoIcones>

      </NavGrid>

    </Topo>
  );
}

export default Cabecalho;
