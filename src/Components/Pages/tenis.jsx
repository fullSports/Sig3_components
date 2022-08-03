import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Cabecalho from "../Cabecalho";
import BtnChuteira1 from "./../../assets/images/produtos/btnchuteira-campo-puma-one-2.png"
import BtnChuteira2 from "./../../assets/images/produtos/chuteira-campo-puma-one-2.jpg"
import BtnChuteira3 from "./../../assets/images/produtos/chuteira-campo-puma-one-3.jpg"
import BtnChuteira4 from "./../../assets/images/produtos/chuteira-campo-puma-one-4.jpg"
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
`;
const ImgPrd1 = styled.img`
display:block;
`;
const ImgPrd2 = styled.img`
display: none;
`;
const ImgPrd3 = styled.img`
display:none;
`;
const ImgPrd4 = styled.img`
display:none;
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
    return(
        <>
        <Cabecalho />
        <VisualizacaoPrd id="visualizacaoPrd" className="visualizacaoPrd">
            <GridVisuPrd id="gridVisuPrd" className="gridVisuPrd">
                <FotosAdcPrd id="fotosAdcPrd" className="fotosAdcPrd">
                    <button id="opcImg1" className="opcImg1">
                        <ImgPrd1  src={BtnChuteira1} alt="imagem da chuteira"/>
                    </button>

                    <button id="opcImg2" className="opcImg2">
                        <ImgPrd2  src={BtnChuteira2} alt="imagem da chuteira"/>
                    </button>

                    <button id="opcImg3" className="opcImg3">
                        <ImgPrd3  src={BtnChuteira3} alt="imagem da chuteira"/>
                    </button>
                    
                    <button id="opcImg4" className="opcImg4">
                        <ImgPrd4 src={BtnChuteira4} alt="imagem da chuteira"/>
                    </button>
                </FotosAdcPrd>
                
                <FotoPrd id="fotoPrd" className="fotoPrd">
                    <img src={BtnChuteira1} alt="imagem da chuteira"/>
                    <img src={BtnChuteira2} alt="imagem da chuteira"/>
                    <img src={BtnChuteira3} alt="imagem da chuteira"/>
                    <img src={BtnChuteira4} alt="imagem da chuteira"/>
                </FotoPrd>

                <DescAnunPrd id="descAnunPrd" className="descAnunPrd">
                    <ConteudoDescAnunPrd id="conteudoDescAnunPrd" className="conteudoDescAnunPrd">
                        <TitDescPrd id="titDescPrd" className="titDescPrd">Chuteira Campo Puma One 5.3 Branco</TitDescPrd>
                        <FrtGrtsCard id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</FrtGrtsCard>
                        
 
                    </ConteudoDescAnunPrd>
                </DescAnunPrd>


            </GridVisuPrd>

        </VisualizacaoPrd>
        <Footer />
        </>
    );
}
export default Equipamentos;