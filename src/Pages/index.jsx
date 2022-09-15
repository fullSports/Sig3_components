import React from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Cabecalho from "../Components/Cabecalho";
import Banner from "./../assets/images/banner1.png";
import Cardvan1 from "./../assets/images/card-van-1.png";
import Cardvan2 from "./../assets/images/card-van-2.png";
import Cardvan3 from "./../assets/images/card-van-3.png";
import Cardvan4 from "./../assets/images/card-van-4.png";
import Meiagonew from "./../assets/images/meia-gonew.jpg";
import JaquetaHering1 from "./../assets/images/jaqueta-hering1.jpg"
import Chuteiracampofuture from "./../assets/images/produtos/chuteira-campo-future-3.1-z.png"
import JaquetaZafina from "./../assets/images/jaqueta-zafina.jpg"
import TenisAdidas from "./../assets/images/tenis-adidas.jpg";
import MeiaGone from "./../assets/images/meia-gonew.jpg";
import FutureZanuncio from "./../assets/images/future-z-anuncio.png";
import ChuteiraCampoFuture from "./../assets/images/produtos/chuteira-campo-future-3.1-z.png";
import AdidasLogo from "./../assets/images/adidas-logo.png";
import PumaLogo from "./../assets/images/puma-logo.png";
import Olympikus from "./../assets/images/olympikus.png";
import ConverseLogo from "./../assets/images/converse-logo.png";
import AsicsLogo from "./../assets/images/asics-logo.png";
import CardCat1 from "./../assets/images/card-cat-1.png";
import CardCat2 from "./../assets/images/card-cat-2.png";
import CardCat3 from "./../assets/images/card-cat-3.png";
import CardCat4 from "./../assets/images/card-cat-4.png";
import Cards from "../Components/Card";
import CardsFTZ from "../Components/CardsFTZ";
const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const Propaganda = styled.div`
    width: 100%;
    img {
        width: 100%;
        height: auto;
        /* height: 470px; */
    }
`;
const ConjuntoNovidades = styled.div`
    margin:  30px 0 0 0;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 10px;

    @media screen and (max-width: 1144px) {
    margin: 30px 0 0 0;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 10px;
      
    }
    @media screen and (max-width: 500px) {
        margin: 15px 0 0 0;
        grid-template-columns: repeat(1, auto);
        grid-gap: 5px;
    }
`;
const CardNov = styled.div`
    img{ 
        height: 124px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    }
    
`;
const ProdutosProcurados = styled.section`
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 1144px) {
        margin: 25px 0;
    }
`;
const TituloSec = styled.p`
    text-align: center;
    margin: 5px 0 30px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 22px;
    color: rgb(49, 49, 49);
`;
const ConjuntoCard = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin: 0 70px;
    ::-webkit-scrollbar{
        display: none;
    }

    @media screen and (max-width: 1144px) {
        justify-content: center;
        display: flex;
        overflow-x: auto;
        padding: 10px 10px;
        margin: 0 40px 0 40px;
        grid-template-columns: repeat(10, auto);
        grid-auto-rows: minmax(auto, auto);
        grid-gap: 12px;
}
`;
const GrpBtn = styled.div`
    padding: 25px 0;
    text-align: center;
    button{
        background-color: transparent;
        border: none;
        margin: 0 10px;
    }
    button:hover{
        opacity: 0.5;
        cursor: pointer;
    }
`;
const FuturZbBrazilAnuncio = styled.section`
`;
const DoubleGrid = styled.div`
    justify-content: center;
    margin: 0 40px 0 40px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 30px;

    @media screen and (max-width: 1144px) {
        align-items: center;
        margin: 2px 0px 0 2px;
        width: 65%;
        height: auto;
        justify-content: center;
        grid-template-columns: repeat(1, auto);
        grid-auto-rows: minmax(auto, auto);
    }
`;
const AnuncioFutureZ = styled.div`
    img{
        height: 755px;
    }
    @media screen and (max-width: 1144px) {
        img{
            height: auto;
            width: 98%;
            margin: 1%;
        }
    }
`;
const ConjuntoTenisFZ = styled.div`
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 20px;

    @media screen and (max-width: 1144px) {
        justify-content: center;
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-gap: 5px;
        margin: 2%;
    }
`;
const Marcas = styled.section`
    margin: 80px 0 0 0;
`;
const ConjuntoMarcas = styled.div`
    display: flex;
    overflow-x: auto;

    justify-content: center;
    /* margin: 0 40px 0 40px; */

    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 50px;
    img{
        height: 64px;
    }
      @media screen and (max-width: 1144px) {
            display: flex;
            overflow-x: auto;
            justify-content: center;
            /* margin: 0 40px 0 40px; */
            display: grid;
            grid-template-columns: repeat(6, auto);
            grid-auto-rows: minmax(auto, auto);
            grid-gap: 50px;
            img{
                height: auto;
                width: 5%;
            }
      }
`;
const Zoom1 = styled.div`
    overflow: hidden;
    img {
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    :hover img {
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`;
const Categorias = styled.section` 
img {
    height: 430px;
}
`;
const CategoriasGrid = styled.div`
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 24px;

    @media screen and (max-width: 1144px) {
        justify-content: center;
        display: grid;
        grid-template-columns: repeat(1, auto);
        grid-auto-rows: minmax(auto, auto);
        grid-gap: 24px;
    }
`;
const Zoom = styled.div`
    overflow: hidden;
    img {
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    :hover img {
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    @media screen and (max-width: 1144px) {
        img {
            -moz-transition: all 0.3s;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
        }
        :hover img {
            -moz-transform: scale(1.1);
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        } 
    }

`;
const Conteudo = () => {
    return (
        <>
            <Cabecalho />
            <Main id="conteudo" className="conteudo">
                <Propaganda id="propaganda" className="propaganda">
                    <a href="/">
                        <img src={Banner} alt="imagem propaganda das roupas femininas" />
                    </a>
                </Propaganda>
                <section>
                    <ConjuntoNovidades id="conjuntoNovidades" className="conjuntoNovidades">
                        <CardNov id="cardNov" className="cardNov">
                            <img src={Cardvan1} alt="imagem do card de novidades" />
                        </CardNov>

                        <CardNov id="cardNov" className="cardNov">
                            <img src={Cardvan2} alt="imagem do card de novidades" />
                        </CardNov>

                        <CardNov id="cardNov" className="cardNov">
                            <img src={Cardvan3} alt="imagem do card de novidades" />
                        </CardNov>

                        <CardNov id="cardNov" className="cardNov">
                            <img src={Cardvan4} alt="imagem do card de novidades" />
                        </CardNov>
                    </ConjuntoNovidades>
                </section>

                <ProdutosProcurados id="produtosProcurados" className="produtosProcurados">
                    <TituloSec id="tituloSec" className="tituloSec">Produto Mais Procurados</TituloSec>

                    <ConjuntoCard id="conjuntoCard" className="conjuntoCard">
                        <Cards src={Meiagonew} TituloCard="Meia Gone"
                            PrecoAnterior="R$ 80,30" PrecoAtual="R$ 75,30"
                        />

                        <Cards src={JaquetaHering1} TituloCard="Jaqueta Hering Básica Feminina"
                            PrecoAnterior="R$ 169,30" PrecoAtual="R$ 139,99"
                        />

                        <Cards src={Chuteiracampofuture} TituloCard="Chuteira Future Z 3.1 Campo"
                            PrecoAnterior="R$ 169,30" PrecoAtual="R$ 139,99"
                        />

                        <Cards src={JaquetaZafina} TituloCard="Jaqueta Zafina"
                            PrecoAnterior="R$ 169,30" PrecoAtual="R$ 139,99"
                        />

                        <Cards src={TenisAdidas} TituloCard="Tênis adidas"
                            PrecoAnterior="R$ 169,30" PrecoAtual="R$ 139,99"
                        />

                        <Cards src={MeiaGone} TituloCard="Meia Gone"
                            PrecoAnterior="R$ 80,30" PrecoAtual="R$ 75,30"
                        />

                        <Cards src={MeiaGone} TituloCard="Meia Gone"
                            PrecoAnterior="R$ 80,30" PrecoAtual="R$ 75,30"
                        />
                        <Cards src={MeiaGone} TituloCard="Meia Gone"
                            PrecoAnterior="R$ 80,30" PrecoAtual="R$ 75,30"
                        />


                    </ConjuntoCard>
                    <GrpBtn id="grpBtn" className="grpBtn">
                        <button className="material-symbols-outlined btnSides btnBef" id="material-symbols-outlined btnSides btnBef">
                            chevron_left
                        </button>
                        <button className="material-symbols-outlined btnSides btnAft" id="material-symbols-outlined btnSides btnAft">
                            chevron_right
                        </button>
                    </GrpBtn>
                </ProdutosProcurados>

                <FuturZbBrazilAnuncio id="FuturZbBrazilAnuncio" className="FuturZbBrazilAnuncio">
                    <div>
                        <TituloSec id="tituloSec" className="tituloSec">Confira o novo lançamento da Puma</TituloSec>
                    </div>

                    <DoubleGrid id="doubleGrid" className="DoubleGrid">
                        <AnuncioFutureZ>
                            <a href="*"><img src={FutureZanuncio} alt="" /></a>
                        </AnuncioFutureZ>

                        <ConjuntoTenisFZ id="conjuntoTenisFZ" className="conjuntoTenisFZ">
                            <CardsFTZ src={ChuteiraCampoFuture} TituloCard="Jaqueta Hering Básica Feminina"
                                PrecoAnterior="R$ 169,30" FrtGrtsCard="true" Parcela="em até 12x de 6,27"
                            />

                            <CardsFTZ src={ChuteiraCampoFuture} TituloCard="Jaqueta Hering Básica Feminina"
                                PrecoAnterior="R$ 169,30" FrtGrtsCard="false" Parcela="em até 12x de 6,27"
                            />

                            <CardsFTZ src={ChuteiraCampoFuture} TituloCard="Jaqueta Hering Básica Feminina"
                                PrecoAnterior="R$ 169,30" FrtGrtsCard="true" Parcela="em até 12x de 6,27"
                            />

                            <CardsFTZ src={ChuteiraCampoFuture} TituloCard="Jaqueta Hering Básica Feminina"
                                PrecoAnterior="R$ 169,30" FrtGrtsCard="true" Parcela="em até 12x de 6,27"
                            />
                            <CardsFTZ src={ChuteiraCampoFuture} TituloCard="Jaqueta Hering Básica Feminina"
                                PrecoAnterior="R$ 169,30" FrtGrtsCard="true" Parcela="em até 12x de 6,27"
                            />

                            <CardsFTZ src={ChuteiraCampoFuture} TituloCard="Jaqueta Hering Básica Feminina"
                                PrecoAnterior="R$ 169,30" FrtGrtsCard="false" Parcela="em até 12x de 6,27"
                            />

                        </ConjuntoTenisFZ>
                    </DoubleGrid>
                </FuturZbBrazilAnuncio>

                <Marcas id="marcas" className="marcas">
                    <TituloSec id="tituloSec" className="tituloSec">descubra as marcas</TituloSec>
                    <ConjuntoMarcas id="conjuntoMarcas" className="conjuntoMarcas">
                        <Zoom1 id="zomm1" className="zomm1">
                            <a href=" "><img src={AdidasLogo} alt="imagem do logo da adidas" /></a>
                        </Zoom1>
                        <Zoom1 id="zomm1" className="zomm1">
                            <a href=" "><img src={PumaLogo} alt="imagem do logo da Puma" /></a>
                        </Zoom1>
                        <Zoom1 id="zomm1" className="zomm1">
                            <a href=" "><img src={Olympikus} alt="imagem do logo da Olympikus" /></a>
                        </Zoom1>
                        <Zoom1 id="zomm1" className="zomm1">
                            <a href=" "><img src={ConverseLogo} alt="imamge do Logo da Converse" /></a>
                        </Zoom1>
                        <Zoom1 id="zomm1" className="zomm1">
                            <a href=" "><img src={AsicsLogo} alt="imagem do logo da Asics" /></a>
                        </Zoom1>
                    </ConjuntoMarcas>
                </Marcas>

                <Categorias id="categorias" className="categorias">
                    <TituloSec id="tituloSec" className="tituloSec">categorias mais procuradas</TituloSec>
                    <CategoriasGrid id="categorias-grid" className="categorias-grid">
                        <Zoom id="Zoom" className="Zoom">
                            <a href="/equipamentos">
                                <img src={CardCat1} alt="" />
                            </a>
                        </Zoom>
                        <Zoom id="Zoom" className="Zoom">
                            <a href="/tenis">
                                <img src={CardCat2} alt="" />
                            </a>
                        </Zoom>
                        <Zoom id="Zoom" className="Zoom">
                            <a href=" ">
                                <img src={CardCat3} alt="imagem do card" />
                            </a>
                        </Zoom>
                        <Zoom id="Zoom" className="Zoom">
                            <a href=" ">
                                <img src={CardCat4} alt="imagem do card" />
                            </a>
                        </Zoom>

                    </CategoriasGrid>
                </Categorias>
            </Main>
            <Footer />
        </>
    );
}
export default Conteudo;