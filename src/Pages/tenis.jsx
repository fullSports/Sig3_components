import React from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Cabecalho from "../Components/Cabecalho";
import BtnChuteira1 from "./../assets/images/produtos/btnchuteira-campo-puma-one-2.png"
import BtnChuteira2 from "./../assets/images/produtos/chuteira-campo-puma-one-2.jpg"
import BtnChuteira3 from "./../assets/images/produtos/chuteira-campo-puma-one-3.jpg"
import BtnChuteira4 from "./../assets/images/produtos/chuteira-campo-puma-one-4.jpg"
const VisualizacaoPrd = styled.section`
    margin: 40px 0;
    margin-left: auto;
    margin-right: auto;
`;
const GridVisuPrd = styled.div`
    margin: 40px 0;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    /* POSSIVEL MUDANÇA PARA 1200PX */
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, auto);
    /* grid-gap: 25px; */
`;
const FotosAdcPrd = styled.div`
    img{
        height: 124px;
    }
    button{
        /* margin: 0 0 0 300px; */
        display: block;
        margin: 10px 0 10px 10px;
        border: 1px solid rgba(5, 5, 5, 0.527);
    }
    button:hover{
        border: 1px solid rgb(128, 202, 44);
    }
    button:focus{
        border: 1px solid rgb(128, 202, 44);
    }
`;
const FotoPrd = styled.div`
    overflow: hidden;
    img{
        margin: 10px 0 10px;
        height: 460px;
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    :hover img{
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.3);
        cursor: zoom-in;
    }
    #imgPrd1{display: block;} #imgPrd2, #imgPrd3, #imgPrd4{display: none;}
`;
const DescAnunPrd =styled.div`
    color: #313131;
    border: 2px solid rgba(0, 0, 0, 0.123);
    *{
        line-height: 35px;
    }
    
`;
const TitDescPrd = styled.p`
    font-weight: 600;
    font-size: 20px;
`;
const ConteudoDescAnunPrd = styled.div`
    margin: 20px 20px 0 ;
    #titDescPrd{
    font-weight: 600;
    font-size: 20px;
    }
    #frtGrtsCard{
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    /* width: max-content; */
    color: #62aa0b;
    /* background-color: #a6e65a; */
    }
    #prcPromoPrd{
    text-decoration: line-through;
    font-size: 16px;
    }
    #prcPrd{
    font-weight: 600;
    font-size: 26px;
    color: #7aaa2e;
    }
    #subTitPrd{
    font-size: 17px;
    }
    #tmnhPrd p{
    font-size: 15px;
    font-weight: 600;
    }
    #tmnhQtd p{
    font-size: 15px;
    font-weight: 600;
    }
    #tmnhQtd input{
    width: 45px;
    font-size: 15px;
    text-align: center;
    border: 1px solid rgba(5, 5, 5, 0.527);
    }
    #tmnhQtd input:focus{
    outline: none;
    }
    #btnLinkPrd{
    line-height: 50px;
    margin: 15px 0 ;
    text-align: center;
    }
    #btnLinkPrd input{
    margin-right: auto;
    margin-left: auto;
    display: block;
    border: none;
    background-color: #313131;
    text-transform: uppercase;
    color: #fff;
    font-size: 16px;
    min-width: 180px;
    min-height: 44px;
    }
    #btnLinkPrd input:hover{
    text-decoration: none;
    background-color: rgb(0, 0, 0);
	transform:translate(0.3s);
    }
    @media screen and (max-width: 1144px) {
    #frtGrtsCard{
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    /* width: max-content; */
    color: #62aa0b;
    /* background-color: #a6e65a; */
    }

    }
`;
const FrtGrtsCard = styled.p`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    /* width: max-content; */
    color: #62aa0b;
    /* background-color: #a6e65a; */
    @media screen and (max-width: 1144px) {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 13px;
        /* width: max-content; */
        color: #62aa0b;
        /* background-color: #a6e65a; */
    }
`;

const Equipamentos = () =>{
    const link = "#"
    return(
        <>
        <Cabecalho />
        <VisualizacaoPrd id="visualizacaoPrd" className="visualizacaoPrd">
            <GridVisuPrd id="gridVisuPrd" className="gridVisuPrd">
                <FotosAdcPrd id="fotosAdcPrd" className="fotosAdcPrd">
                    <button id="opcImg1" className="opcImg1">
                        <img  src={BtnChuteira1} alt="imagem da chuteira"/>
                    </button>

                    <button id="opcImg2" className="opcImg2">
                        <img  src={BtnChuteira2} alt="imagem da chuteira"/>
                    </button>

                    <button id="opcImg3" className="opcImg3">
                        <img  src={BtnChuteira3} alt="imagem da chuteira"/>
                    </button>
                    
                    <button id="opcImg4" className="opcImg4">
                        <img src={BtnChuteira4} alt="imagem da chuteira"/>
                    </button>
                </FotosAdcPrd>
                
                <FotoPrd id="fotoPrd" className="fotoPrd">
                    <img src={BtnChuteira1} alt="imagem da chuteira" id="imgPrd1" />
                    <img src={BtnChuteira2} alt="imagem da chuteira" id="imgPrd2"/>
                    <img src={BtnChuteira3} alt="imagem da chuteira" id="imgPrd3"/>
                    <img src={BtnChuteira4} alt="imagem da chuteira" id="imgPrd4"/>
                </FotoPrd>

                <DescAnunPrd id="descAnunPrd" className="descAnunPrd">
                    <ConteudoDescAnunPrd id="conteudoDescAnunPrd" className="conteudoDescAnunPrd">
                        <TitDescPrd id="titDescPrd" className="titDescPrd">Chuteira Campo Puma One 5.3 Branco</TitDescPrd>
                        <FrtGrtsCard id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</FrtGrtsCard>
                        <p id="titDescPrd" className="titDescPrd">Chuteira Campo Puma One 5.3 Branco</p>
                        <p id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</p>
                        <p id="prcPromoPrd" className="prcPromoPrd">R$ 199,90</p>
                        <p id="prcPrd" className="prcPrd">R$ 179,90</p>
                        <p id="subTitPrd" className="subTitPrd">em até 12x de R$ 14,99</p>
                        <div id="tmnhPrd" className="tmnhPrd">
                            <p>Selecione seu tamanho</p>
                            <label for=""><input type="radio" name="optTamanho" id="tam36"/> 36</label>
                            <label for=""><input type="radio" name="optTamanho" id="tam39"/> 39</label>
                            <label for=""><input type="radio" name="optTamanho" id="tam40"/> 40</label>
                            <label for=""><input type="radio" name="optTamanho" id="tam42"/> 42</label>
                            <label for=""><input type="radio" name="optTamanho" id="tam44"/> 44</label>
                        </div>
                        <div id="tmnhQtd" className="tmnhQtd">
                            <p>Quantidade</p>
                            <input type="number" placeholder="Nº"/>
                        </div> 
                        <div id="btnLinkPrd" className="btnLinkPrd">
                            <a href="/carrinhoDeCompra"><input type="button" value="Comprar"/></a>
                            <a href={link}>Calcular frete</a>
                        </div>
 
                    </ConteudoDescAnunPrd>
                </DescAnunPrd>


            </GridVisuPrd>

        </VisualizacaoPrd>
        <Footer />
        </>
    );
}
export default Equipamentos;