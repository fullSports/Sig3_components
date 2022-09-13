import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Cabecalho from "../Cabecalho";
import NovidadeWhee1Img from "./../../assets/images/novidade-wheel.png";
import ChuteiraPuma1 from "./../../assets/images/chuteira-puma1.jpg";
import JaquetaHering1 from "./../../assets/images/jaqueta-hering1.jpg";
import ChuteiraSocietyFutureZ from "./../../assets/images/produtos/chuteira-society-future-z.png";
import CuteiraFutsalKidsFuture from "./../../assets/images/produtos/chuteira-futsal-kids-future-4.1-z.png";
import MeiaGone from "./../../assets/images/meia-gonew.jpg";
import CuteiraCampoFutureZ from "./../../assets/images/produtos/chuteira-campo-future-z.png";
import JaquetaZafina from "./../../assets/images/jaqueta-zafina.jpg";
import TenisAdidas from "./../../assets/images/tenis-adidas.jpg";
import ChuteiraCampoFuture31Z from "./../../assets/images/produtos/chuteira-campo-future-3.1-z.png";
import ChuteiraCampoFuture41Z from "./../../assets/images/produtos/chuteira-campo-future-4.1-z.png";
import CalcaEsportiva1 from "./../../assets/images/calca-esportiva1.jpg";
import ChuteiraFutsalFutureZ from "./../../assets/images/produtos/chuteira-futsal-future-z.png";
const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const GridEquipamentos =styled.div`
    justify-content: center;
    margin: 40px 40px 40px 40px;

    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 25px;
`;
const NovidadeImg = styled.div`
img{
    height: 384px;
}
@media screen and (max-width: 1144px) {
    display:none;
}
`;
const FiltragemNovi = styled.div`
    padding-bottom: 10px;
    margin: 15px 0;
    p {
        margin: 5px 0 ;
    }
`;
const PrecoFiltra = styled.div`
    padding-bottom: 10px;
    margin: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0,.1);
    color: #2e2e2e;
    select, option{
        min-height: 24px;
        font-size: 14px;
        background-color: #fff;
    }
`;
const DispoFiltra = styled.div`
    padding-bottom: 10px;
    margin: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0,.1);
    color: #2e2e2e;
    input{
        display: inline-block;
    }
`;
const ColorPick =styled.div`
    padding-bottom: 10px;
    margin: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0,.1);
    color: #2e2e2e;
    div{
        display: inline-block;
    }
    a{
        text-decoration: none;
    }
`;
const Pink = styled.div`
    background-color: pink;
`;
const Blue = styled.div`
    background-color: blue;
`;
const Green = styled.div`
    background-color: green;
`;
const Red = styled.div`
    background-color: red;
`;
const Purple = styled.div`
    background-color: purple;
`;
const Yellow = styled.div`
    background-color: yellow;
`;
const White = styled.div`
    background-color: white;
`;
const Black = styled.div`
    background-color: black;
`;
const Gray = styled.div`
    background-color: gray;
`;
const CategoFiltra = styled.div`
    padding-bottom: 10px;
    margin: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0,.1);
    color: #2e2e2e;
    li{
        display: flex;
    }
    li label{
        margin-left: 10px;
    }
`;
const GridProdutosEqui = styled.div`
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 25px;
    @media screen and (max-width: 1144px) {
        grid-template-columns: repeat(2, auto);
    }
    @media screen and (max-width: 550px) {
        grid-template-columns: repeat(1, auto);
    }

`;
const CardFTZ = styled.div`
    line-height: 25px;
    padding: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    width: 220px;
    background-color: #fff;
    *{
        background-color: #fff;
    }
    img{
        height: 190px;
    }
    :hover{
        transition: .3s;
        box-shadow: 0 0 6px rgba(143, 106, 106, .6);
    }

    @media screen and (max-width: 1144px) {
        line-height: 25px;
        padding: 10px;
        box-shadow: 0 0 5px rgba(0, 0, 0, .2);
        width: fit-content;
        background-color: #fff;
        img{
            height: 190px;
        }
        :hover{
            transition: .3s;
            box-shadow: 0 0 6px rgba(143, 106, 106, .6);
        }
    }
`;
const ImgTenisFTZ = styled.div`
    text-align: center;
    a{
    text-decoration: none; color: transparent;
    }
`;
const CorpoCard = styled.div`
    margin: 5px 0;
    h3{
        color: #1b1b1b;
        background-color: #fff;
        font-size: 19px;
    }
    @media screen and (max-width: 1144px) {
        h3{
        color: #1b1b1b;
        font-size: 19px;
        }
    }
`;
const TituloCard = styled.p`
    font-size: 16px;
    color: #1b1b1b;
`;
const PrecoAnterior =styled.p`
    text-decoration: line-through;
`;
const PrecoAtual = styled.h3`
    h3{
        text-align: left;
    }
`;
const FrtGrtsCard = styled.p`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    /* width: max-content; */
    /* background-color: #a6e65a; */
`;
const DescCard = styled.div`
    font-size: 13px;
    color: #1b1b1b;
`;

const Equipamentos = () =>{
    const link = '#'
    return(
        <>
        <Cabecalho />
        <Main id="conteudo" className="conteudo">
            <section>
                <GridEquipamentos id="grid-equipamentos" className="grid-equipamentos">
                    <NovidadeImg id="novidade-img" className="novidade-img">
                        <img src={NovidadeWhee1Img} alt="imagem de novidades" />
                            <FiltragemNovi id="filtragem-novi" className="filtragem-novi">
                                <form action="">
                                    <PrecoFiltra id="precoFiltro" className="precoFiltro">
                                        <p>Preço</p>
                                        <select name="filtrarPreco" id="">
                                            <option value="relevancia">Mais Relevante</option>
                                            <option value="precoBaixo">Preço Mais barato</option>
                                            <option value="precoAlto">Preço mais caro</option>
                                        </select>
                                    </PrecoFiltra>
                                    
                                    <DispoFiltra id="dispoFiltra" className="dispoFiltra">
                                        <p>Disponibilidade</p>
                                        <input type="radio" name="checkDisp" id=""></input>
                                        <input type="radio" name="checkDisp" id=""></input>
                                    </DispoFiltra>

                                    <ColorPick id="colorPick" className="colorPick">
                                        <p>Cor</p>
                                        <a href={link}>
                                            <Pink id="pink" className="pink"/>
                                        </a>
                                        <a href={link}>
                                            <Blue id="blue" className="blue"/>
                                        </a>
                                        <a href={link}>
                                            <Green id="green" className="green"/>
                                        </a>
                                        <a href={link}>
                                            <Red id="red" className="red"/>
                                        </a>
                                        <a href={link}>
                                            <Purple id="purple" className="purple"/>
                                        </a>
                                        <a href={link}>
                                            <Yellow id="yellow" className="yellow"/>
                                        </a>
                                        <a href={link}>
                                            <White id="white" className="white"/>
                                        </a>
                                        <a href={link}>
                                            <Black id="black" className="blcak"/>
                                        </a>
                                        <a href={link}>
                                            <Gray id="gray" className="gray"/>
                                        </a>
                                    </ColorPick>

                                    <CategoFiltra id="categoFiltra" className="categoFiltra">
                                        <p>Categoria</p>

                                        <ul>
									        <li>
                                                <div>
                                                    <input type="checkbox" name="Academia" id=""></input>
                                                </div>
                                                <label for="">Academia</label>
									        </li>

                                            <li>
                                                <div>
                                                    <input type="checkbox" name="Ginástica" id=""></input>
                                                </div>
                                                <label for="">Ginástica</label>
                                            </li>

                                            <li>
                                                <div>
                                                    <input type="checkbox" name="Corrida" id=""></input>
                                                </div>
                                                <label for="">Corrida</label>
                                            </li>
								        </ul>   
                                    </CategoFiltra>
                                </form>
                            </FiltragemNovi>
                    </NovidadeImg>
                    <div>
                        <GridProdutosEqui id="grid-produtos-equi" className="grid-produtos-equi">
            
                            <CardFTZ id="cardFTZ" className="cardFTZ">
                                <ImgTenisFTZ id="imgTenisFTZ" className="imgTenisFTZ">
                                <a href="/tenis"><img
										src={ChuteiraPuma1} alt=""/></a>
                                </ImgTenisFTZ>
                                <CorpoCard id="corpoCard" className="corpoCard">
                                    <TituloCard id="tituloCard" className="tituloCard">Chuteira Puma One 5.4 F</TituloCard>
                                    <FrtGrtsCard id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</FrtGrtsCard>
                                    <PrecoAnterior id="precoAnterior" className="precoAnterior">R$ 232,30</PrecoAnterior>
                                    <PrecoAtual id="precoAnterior" className="precoAnterior">R$ 202,30</PrecoAtual>
                                </CorpoCard>
                                <DescCard id="descCard" className="descCard">
                                    <p>em até 12x de R$ 16,85</p>
                                </DescCard>
                            </CardFTZ>

                            <CardFTZ id="cardFTZ" className="cardFTZ">
                                <ImgTenisFTZ id="imgTenisFTZ" className="imgTenisFTZ">
                                <a href={link}><img
										src={JaquetaHering1} alt=""/></a>
                                </ImgTenisFTZ>
                                <CorpoCard id="corpoCard" className="corpoCard">
                                    <TituloCard id="tituloCard" className="tituloCard">Jaqueta Hering Básica Feminina</TituloCard>
                                    <FrtGrtsCard id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</FrtGrtsCard>
                                    <PrecoAnterior id="precoAnterior" className="precoAnterior">R$ 169,30</PrecoAnterior>
                                    <PrecoAtual id="precoAnterior" className="precoAnterior">R$ 139,99</PrecoAtual>
                                </CorpoCard>
                                <DescCard id="descCard" className="descCard">
                                    <p>em até 12x de R$ 11,66</p>
                                </DescCard>
                            </CardFTZ>
                            
                            <CardFTZ id="cardFTZ" className="cardFTZ">
                                <ImgTenisFTZ id="imgTenisFTZ" className="imgTenisFTZ">
                                <a href="/tenis"><img
										src={ChuteiraSocietyFutureZ} alt=""/></a>
                                </ImgTenisFTZ>
                                <CorpoCard id="corpoCard" className="corpoCard">
                                    <TituloCard id="tituloCard" className="tituloCard">Chuteira Future Z 3.1 Society</TituloCard>
                                    <FrtGrtsCard id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</FrtGrtsCard>
                                    <PrecoAnterior id="precoAnterior" className="precoAnterior">R$ 449,90</PrecoAnterior>
                                    <PrecoAtual id="precoAnterior" className="precoAnterior">R$ 429,90</PrecoAtual>
                                </CorpoCard>
                                <DescCard id="descCard" className="descCard">
                                    <p>em até 12x de R$ 35,82</p>
                                </DescCard>
                            </CardFTZ>

                            <CardFTZ id="cardFTZ" className="cardFTZ">
                                <ImgTenisFTZ id="imgTenisFTZ" className="imgTenisFTZ">
                                <a href="/tenis"><img
										src={CuteiraFutsalKidsFuture} alt=""/></a>
                                </ImgTenisFTZ>
                                <CorpoCard id="corpoCard" className="corpoCard">
                                    <TituloCard id="tituloCard" className="tituloCard">Chuteira Future Z 4.1 V Furtsal Kids</TituloCard>
                                    <FrtGrtsCard id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</FrtGrtsCard>
                                    <PrecoAnterior id="precoAnterior" className="precoAnterior">R$ 279,90</PrecoAnterior>
                                    <PrecoAtual id="precoAnterior" className="precoAnterior">R$ 259,30</PrecoAtual>
                                </CorpoCard>
                                <DescCard id="descCard" className="descCard">
                                    <p>em até 12x de R$ 21,60</p>
                                </DescCard>
                            </CardFTZ>

                            <CardFTZ id="cardFTZ" className="cardFTZ">
                                <ImgTenisFTZ id="imgTenisFTZ" className="imgTenisFTZ">
                                <a href="/tenis"><img
										src={MeiaGone} alt=""/></a>
                                </ImgTenisFTZ>
                                <CorpoCard id="corpoCard" className="corpoCard">
                                    <TituloCard id="tituloCard" className="tituloCard">Chuteira Future Z 1.1 Campo</TituloCard>
                                    <FrtGrtsCard id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</FrtGrtsCard>
                                    <PrecoAnterior id="precoAnterior" className="precoAnterior">R$ 1.199.90</PrecoAnterior>
                                    <PrecoAtual id="precoAnterior" className="precoAnterior">R$ 1.090,90</PrecoAtual>
                                </CorpoCard>
                                <DescCard id="descCard" className="descCard">
                                    <p>em até 12x de R$ 90,90</p>
                                </DescCard>
                            </CardFTZ>

                            <CardFTZ id="cardFTZ" className="cardFTZ">
                                <ImgTenisFTZ id="imgTenisFTZ" className="imgTenisFTZ">
                                <a href="/tenis"><img
										src={CuteiraCampoFutureZ} alt=""/></a>
                                </ImgTenisFTZ>
                                <CorpoCard id="corpoCard" className="corpoCard">
                                    <TituloCard id="tituloCard" className="tituloCard">Jaqueta Zafina Sport Masculina</TituloCard>
                                    <FrtGrtsCard id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</FrtGrtsCard>
                                    <PrecoAnterior id="precoAnterior" className="precoAnterior">R$ 232,30</PrecoAnterior>
                                    <PrecoAtual id="precoAnterior" className="precoAnterior">R$ 174,90</PrecoAtual>
                                </CorpoCard>
                                <DescCard id="descCard" className="descCard">
                                    <p>em até 12x de R$ 14,57</p>
                                </DescCard>
                            </CardFTZ>

                            <CardFTZ id="cardFTZ" className="cardFTZ">
                                <ImgTenisFTZ id="imgTenisFTZ" className="imgTenisFTZ">
                                <a href="/tenis"><img
										src={JaquetaZafina} alt=""/></a>
                                </ImgTenisFTZ>
                                <CorpoCard id="corpoCard" className="corpoCard">
                                    <TituloCard id="tituloCard" className="tituloCard">Meia Gone</TituloCard>
                                    <FrtGrtsCard id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</FrtGrtsCard>
                                    <PrecoAnterior id="precoAnterior" className="precoAnterior">R$ 232,30</PrecoAnterior>
                                    <PrecoAtual id="precoAnterior" className="precoAnterior">R$ 202,30</PrecoAtual>
                                </CorpoCard>
                                <DescCard id="descCard" className="descCard">
                                    <p>em até 12x de R$ 16,85</p>
                                </DescCard>
                            </CardFTZ>

                            <CardFTZ id="cardFTZ" className="cardFTZ">
                                <ImgTenisFTZ id="imgTenisFTZ" className="imgTenisFTZ">
                                <a href="/tenis"><img
										src={TenisAdidas} alt=""/></a>
                                </ImgTenisFTZ>
                                <CorpoCard id="corpoCard" className="corpoCard">
                                    <TituloCard id="tituloCard" className="tituloCard">Meia Gone</TituloCard>
                                    <FrtGrtsCard id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</FrtGrtsCard>
                                    <PrecoAnterior id="precoAnterior" className="precoAnterior">R$ 232,30</PrecoAnterior>
                                    <PrecoAtual id="precoAnterior" className="precoAnterior">R$ 202,30</PrecoAtual>
                                </CorpoCard>
                                <DescCard id="descCard" className="descCard">
                                    <p>em até 12x de R$ 16,85</p>
                                </DescCard>
                            </CardFTZ>

                            <CardFTZ id="cardFTZ" className="cardFTZ">
                                <ImgTenisFTZ id="imgTenisFTZ" className="imgTenisFTZ">
                                <a href="/tenis"><img
										src={ChuteiraCampoFuture31Z} alt=""/></a>
                                </ImgTenisFTZ>
                                <CorpoCard id="corpoCard" className="corpoCard">
                                    <TituloCard id="tituloCard" className="tituloCard">Meia Gone</TituloCard>
                                    <FrtGrtsCard id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</FrtGrtsCard>
                                    <PrecoAnterior id="precoAnterior" className="precoAnterior">R$ 232,30</PrecoAnterior>
                                    <PrecoAtual id="precoAnterior" className="precoAnterior">R$ 202,30</PrecoAtual>
                                </CorpoCard>
                                <DescCard id="descCard" className="descCard">
                                    <p>em até 12x de R$ 16,85</p>
                                </DescCard>
                            </CardFTZ>

                            <CardFTZ id="cardFTZ" className="cardFTZ">
                                <ImgTenisFTZ id="imgTenisFTZ" className="imgTenisFTZ">
                                <a href="/tenis"><img
										src={ChuteiraCampoFuture41Z} alt=""/></a>
                                </ImgTenisFTZ>
                                <CorpoCard id="corpoCard" className="corpoCard">
                                    <TituloCard id="tituloCard" className="tituloCard">Meia Gone</TituloCard>
                                    <FrtGrtsCard id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</FrtGrtsCard>
                                    <PrecoAnterior id="precoAnterior" className="precoAnterior">R$ 232,30</PrecoAnterior>
                                    <PrecoAtual id="precoAnterior" className="precoAnterior">R$ 202,30</PrecoAtual>
                                </CorpoCard>
                                <DescCard id="descCard" className="descCard">
                                    <p>em até 12x de R$ 16,85</p>
                                </DescCard>
                            </CardFTZ>

                            <CardFTZ id="cardFTZ" className="cardFTZ">
                                <ImgTenisFTZ id="imgTenisFTZ" className="imgTenisFTZ">
                                <a href="/tenis"><img
										src={CalcaEsportiva1} alt=""/></a>
                                </ImgTenisFTZ>
                                <CorpoCard id="corpoCard" className="corpoCard">
                                    <TituloCard id="tituloCard" className="tituloCard">Meia Gone</TituloCard>
                                    <FrtGrtsCard id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</FrtGrtsCard>
                                    <PrecoAnterior id="precoAnterior" className="precoAnterior">R$ 232,30</PrecoAnterior>
                                    <PrecoAtual id="precoAnterior" className="precoAnterior">R$ 202,30</PrecoAtual>
                                </CorpoCard>
                                <DescCard id="descCard" className="descCard">
                                    <p>em até 12x de R$ 16,85</p>
                                </DescCard>
                            </CardFTZ>

                            <CardFTZ id="cardFTZ" className="cardFTZ">
                                <ImgTenisFTZ id="imgTenisFTZ" className="imgTenisFTZ">
                                <a href="/tenis"><img
										src={ChuteiraFutsalFutureZ} alt=""/></a>
                                </ImgTenisFTZ>
                                <CorpoCard id="corpoCard" className="corpoCard">
                                    <TituloCard id="tituloCard" className="tituloCard">Meia Gone</TituloCard>
                                    <FrtGrtsCard id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</FrtGrtsCard>
                                    <PrecoAnterior id="precoAnterior" className="precoAnterior">R$ 232,30</PrecoAnterior>
                                    <PrecoAtual id="precoAnterior" className="precoAnterior">R$ 202,30</PrecoAtual>
                                </CorpoCard>
                                <DescCard id="descCard" className="descCard">
                                    <p>em até 12x de R$ 16,85</p>
                                </DescCard>
                            </CardFTZ>


                        </GridProdutosEqui>
                    </div>

                </GridEquipamentos>
            </section>
        </Main>
        <Footer />
        </>
    );
}
export default Equipamentos;