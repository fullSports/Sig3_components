import React from "react";
import styled from "styled-components";
import Footer from "../../Components/Footer";
import Cabecalho from "../../Components/Menu/Header";
import CardsFTZ from "../../Components/CardsFTZ";
import NovidadeWhee1Img from "./../../../assets/images/novidade-wheel.png";
import ChuteiraPuma1 from "./../../../assets/images/chuteira-puma1.jpg";
import JaquetaHering1 from "./../../../assets/images/jaqueta-hering1.jpg";
import CuteiraFutsalKidsFuture from "./../../../assets/images/produtos/chuteira-futsal-kids-future-4.1-z.png";
import MeiaGone from "./../../../assets/images/meia-gonew.jpg";
import ChuteiraFutsalFutureZ from "./../../../assets/images/produtos/chuteira-futsal-future-z.png";

const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const GridEquipamentos = styled.div`
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
const ColorPick = styled.div`
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
        grid-template-columns: repeat(3, auto);
    }
    @media screen and (max-width: 550px) {
        grid-template-columns: repeat(2, auto);
    }

`;
const Equipamentos = () => {
    const link = '#'
    const tenis= '/tenis'
    return (
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
                                            <Pink id="pink" className="pink" />
                                        </a>
                                        <a href={link}>
                                            <Blue id="blue" className="blue" />
                                        </a>
                                        <a href={link}>
                                            <Green id="green" className="green" />
                                        </a>
                                        <a href={link}>
                                            <Red id="red" className="red" />
                                        </a>
                                        <a href={link}>
                                            <Purple id="purple" className="purple" />
                                        </a>
                                        <a href={link}>
                                            <Yellow id="yellow" className="yellow" />
                                        </a>
                                        <a href={link}>
                                            <White id="white" className="white" />
                                        </a>
                                        <a href={link}>
                                            <Black id="black" className="blcak" />
                                        </a>
                                        <a href={link}>
                                            <Gray id="gray" className="gray" />
                                        </a>
                                    </ColorPick>

                                    <CategoFiltra id="categoFiltra" className="categoFiltra">
                                        <p>Categoria</p>

                                        <ul>
                                            <li>
                                                <div>
                                                    <input type="checkbox" name="Academia" id=""></input>
                                                </div>
                                                <label>Academia</label>
                                            </li>

                                            <li>
                                                <div>
                                                    <input type="checkbox" name="Ginástica" id=""></input>
                                                </div>
                                                <label>Ginástica</label>
                                            </li>

                                            <li>
                                                <div>
                                                    <input type="checkbox" name="Corrida" id=""></input>
                                                </div>
                                                <label>Corrida</label>
                                            </li>
                                        </ul>
                                    </CategoFiltra>
                                </form>
                            </FiltragemNovi>
                        </NovidadeImg>
                        <div>
                            <GridProdutosEqui id="grid-produtos-equi" className="grid-produtos-equi">
                                <CardsFTZ src={ChuteiraPuma1} href={tenis}
                                    TituloCard="Chuteira Puma One 5.4 F" FrtGrtsCard="true"
                                    PrecoAnterior="R$ 232,30" PrecoAtual="R$ 202,30"
                                    Parcela="em até 12x de R$ 16,85"
                                />
                                <CardsFTZ src={JaquetaHering1} href={link}
                                    TituloCard="Jaqueta Hering Básica Feminina" FrtGrtsCard="false"
                                    PrecoAnterior="R$ 169,30" PrecoAtual="R$ 139,99"
                                    Parcela="em até 12x de R$ 11,66"
                                />
                                <CardsFTZ src={ChuteiraFutsalFutureZ} href={tenis}
                                    TituloCard="Chuteira Future Z 3.1 Society" FrtGrtsCard="true"
                                    PrecoAnterior="R$ 449,90" PrecoAtual="R$ 429,90"
                                    Parcela="em até 12x de R$ 35,82"
                                />
                                <CardsFTZ src={CuteiraFutsalKidsFuture} href={tenis}
                                    TituloCard="Chuteira Future Z 4.1 V Furtsal Kids" FrtGrtsCard="true"
                                    PrecoAnterior="R$ 279,90" PrecoAtual="R$ 259,30"
                                    Parcela="em até 12x de R$ 21,60"
                                />
                                <CardsFTZ src={MeiaGone} href={link}
                                    TituloCard="Chuteira Future Z 1.1 Campo" FrtGrtsCard="false"
                                    PrecoAnterior="R$30,00" PrecoAtual="R$ 25,00"
                                    Parcela="em até 5x de R$ 5,00"
                                />
                                <CardsFTZ src={ChuteiraFutsalFutureZ} href={tenis}
                                    TituloCard="Jaqueta Zafina Sport Masculina" FrtGrtsCard="true"
                                    PrecoAnterior="R$ 232,30" PrecoAtual="R$ 174,90"
                                    Parcela="em até 12x de R$ 14,57"
                                />
                                <CardsFTZ src={ChuteiraFutsalFutureZ} href={tenis}
                                    TituloCard="Jaqueta Zafina Sport Masculina" FrtGrtsCard="true"
                                    PrecoAnterior="R$ 232,30" PrecoAtual="R$ 174,90"
                                    Parcela="em até 12x de R$ 14,57"
                                />
                                <CardsFTZ src={ChuteiraFutsalFutureZ} href={tenis}
                                    TituloCard="Jaqueta Zafina Sport Masculina" FrtGrtsCard="true"
                                    PrecoAnterior="R$ 232,30" PrecoAtual="R$ 174,90"
                                    Parcela="em até 12x de R$ 14,57"
                                />
                                <CardsFTZ src={ChuteiraFutsalFutureZ} href={tenis}
                                    TituloCard="Jaqueta Zafina Sport Masculina" FrtGrtsCard="true"
                                    PrecoAnterior="R$ 232,30" PrecoAtual="R$ 174,90"
                                    Parcela="em até 12x de R$ 14,57"
                                />
                                <CardsFTZ src={ChuteiraFutsalFutureZ} href={tenis}
                                    TituloCard="Jaqueta Zafina Sport Masculina" FrtGrtsCard="true"
                                    PrecoAnterior="R$ 232,30" PrecoAtual="R$ 174,90"
                                    Parcela="em até 12x de R$ 14,57"
                                />
                                <CardsFTZ src={ChuteiraFutsalFutureZ} href={tenis}
                                    TituloCard="Jaqueta Zafina Sport Masculina" FrtGrtsCard="true"
                                    PrecoAnterior="R$ 232,30" PrecoAtual="R$ 174,90"
                                    Parcela="em até 12x de R$ 14,57"
                                />
                                <CardsFTZ src={ChuteiraFutsalFutureZ} href={tenis}
                                    TituloCard="Jaqueta Zafina Sport Masculina" FrtGrtsCard="true"
                                    PrecoAnterior="R$ 232,30" PrecoAtual="R$ 174,90"
                                    Parcela="em até 12x de R$ 14,57"
                                />
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