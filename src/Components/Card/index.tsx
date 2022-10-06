import React from "react";
import styled from "styled-components";
const Carddiv = styled.div`
    background-color: #fff;
    line-height: 25px;
    padding: 10px;
    width: auto;
    margin: 0 10px;
    border-radius: 10px;
    :hover{
        transition: .3s;
        box-shadow: 0 0 6px rgba(143, 106, 106, .6);
    }
    @media screen and (max-width: 1144px) {
        line-height: 25px;
        padding: 10px;
        /* box-shadow: -5px 5px 5px rgba(0, 0, 0, .1); */
        width: fit-content;
        background-color: #fff;
    }
`;
const ImgCarddiv = styled.div`
    width: 220px;
    height: 220px;
    margin: 10px 0;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const CorpoCarddiv = styled.div`
    margin: 5px 0;
    h3{
        font-size: 19px;
    }
    @media screen and (max-width: 1144px) {
        h3{
        font-size: 19px;
        }
    }
`;
const TituloCarddiv = styled.p`
    font-size: 16px;
`;
const PrecoAnteriordiv =styled.p`
    text-decoration: line-through;
`;
const PrecoAtualdiv = styled.h3`
    h3.precoAtual{
        text-align: left;
    }
`;
const StarsFeedbackdiv =styled.div`
    margin: 10px 0;
`;
const StarFeed = styled.i`
    color: #f7bd00;
    font-size: 14px;
`;
interface Props{
    src: string
    TituloCard:string
    PrecoAnterior:string
    PrecoAtual:string
}
const Cards: React.FC<Props> = ({src, TituloCard,PrecoAnterior,PrecoAtual}) =>{
    return(
        <Carddiv id="card" className="card">
                    <ImgCarddiv id="imgCard" className="imgCard">
                        <img src={src} alt="imagem de um card de produto"/>
                    </ImgCarddiv>
                        <CorpoCarddiv id="corpoCard" className="corpoCard">
                            <TituloCarddiv id="tituloCard" className="tituloCard">{TituloCard}</TituloCarddiv>
                            <PrecoAnteriordiv id="precoAnterior" className="precoAnterior">{PrecoAnterior}</PrecoAnteriordiv>
                            <PrecoAtualdiv id="precoAnterior" className="precoAnterior">{PrecoAtual}</PrecoAtualdiv>
                        </CorpoCarddiv>

                        <StarsFeedbackdiv id="starsFeedback" className="starsFeedback">
                        <StarFeed id="fa-solid fa-star" className="fa-solid fa-star"></StarFeed>
                        <StarFeed id="fa-solid fa-star" className="fa-solid fa-star"></StarFeed>
                        <StarFeed id="fa-solid fa-star" className="fa-solid fa-star"></StarFeed>
                        <StarFeed id="fa-solid fa-star" className="fa-solid fa-star"></StarFeed>
                        <StarFeed id="fa-regular fa-star " className="fa-regular fa-star "></StarFeed>
                        </StarsFeedbackdiv>
                </Carddiv>
)}
export default Cards;