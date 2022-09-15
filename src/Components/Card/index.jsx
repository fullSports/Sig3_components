import React from "react";
import styled from "styled-components";
const Card = styled.div`
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
const ImgCard = styled.div`
    width: 220px;
    height: 220px;
    margin: 10px 0;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const CorpoCard = styled.div`
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
const TituloCard = styled.p`
    font-size: 16px;
`;
const PrecoAnterior =styled.p`
    text-decoration: line-through;
`;
const PrecoAtual = styled.h3`
    h3.precoAtual{
        text-align: left;
    }
`;
const StarsFeedback =styled.div`
    margin: 10px 0;
`;
const StarFeed = styled.i`
    color: #f7bd00;
    font-size: 14px;
`;
const DescCard = styled.div`
    font-size: 13px;
`;
const Cards = (props) =>{
    return(
        <Card id="card" className="card">
                    <ImgCard id="imgCard" className="imgCard">
                        <img src={props.src} alt="imagem de um card de produto"/>
                    </ImgCard>
                        <CorpoCard id="corpoCard" className="corpoCard">
                            <TituloCard id="tituloCard" className="tituloCard">{props.TituloCard}</TituloCard>
                            <PrecoAnterior id="precoAnterior" className="precoAnterior">{props.PrecoAnterior}</PrecoAnterior>
                            <PrecoAtual id="precoAnterior" className="precoAnterior">{props.PrecoAtual}</PrecoAtual>
                        </CorpoCard>

                            <DescCard id="descCard" className="descCard">
                                <p>{props.DescCard}</p>
                            </DescCard>

                        <StarsFeedback id="starsFeedback" className="starsFeedback">
                        <StarFeed id="fa-solid fa-star" className="fa-solid fa-star"></StarFeed>
                        <StarFeed id="fa-solid fa-star" className="fa-solid fa-star"></StarFeed>
                        <StarFeed id="fa-solid fa-star" className="fa-solid fa-star"></StarFeed>
                        <StarFeed id="fa-solid fa-star" className="fa-solid fa-star"></StarFeed>
                        <StarFeed id="fa-regular fa-star " className="fa-regular fa-star "></StarFeed>
                        </StarsFeedback>
                </Card>
)}
export default Cards;