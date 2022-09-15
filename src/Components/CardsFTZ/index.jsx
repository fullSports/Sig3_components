import React from "react";
import styled from "styled-components";
const CardFTZ = styled.div`
    line-height: 25px;
    padding: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    width: 220px;
    img{
        height: 190px;
    }
    :hover{
        transition: .3s;
        box-shadow: 0 0 6px rgba(143, 106, 106, .6);
    }

    @media screen and (max-width: 1144px) {
        width: fit-content;
        :hover{
            transition: .3s;
            box-shadow: 0 0 6px rgba(143, 106, 106, .6);
        }
    }
`;
const ImgTenisFTZ = styled.div`
    text-align: center;
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
const DescCard = styled.div`
    font-size: 13px;
`;
const CardsFTZ = (props) => {
    const FrtGrtsCard = props.FrtGrtsCard;
    if(FrtGrtsCard==="true"){
        return (
            <CardFTZ id="cardFTZ" className="cardFTZ">
            <ImgTenisFTZ id="imgTenisFTZ" className="imgTenisFTZ">
                <img src={props.src} alt="" />
            </ImgTenisFTZ>
            <CorpoCard id="corpoCard" className="corpoCard">
                <TituloCard id="tituloCard" className="tituloCard">{props.TituloCard}</TituloCard>
                <PrecoAnterior id="precoAnterior" className="precoAnterior">{props.PrecoAnterior}</PrecoAnterior>
                <FrtGrtsCard id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</FrtGrtsCard>
                <PrecoAtual id="precoAnterior" className="precoAnterior">{props.PrecoAnterior}</PrecoAtual>
            </CorpoCard>
            <DescCard id="descCard" className="descCard">
                <p>{props.Parcela}</p>
            </DescCard>
        </CardFTZ>
        );
    }
        return (
            <CardFTZ id="cardFTZ" className="cardFTZ">
            <ImgTenisFTZ id="imgTenisFTZ" className="imgTenisFTZ">
                <img src={props.src} alt="imagem do card de produto"/>
            </ImgTenisFTZ>
            <CorpoCard id="corpoCard" className="corpoCard">
                <TituloCard id="tituloCard" className="tituloCard">{props.TituloCard}</TituloCard>
                <PrecoAnterior id="precoAnterior" className="precoAnterior">{props.PrecoAnterior}</PrecoAnterior>
                <PrecoAtual id="precoAnterior" className="precoAnterior">{props.PrecoAnterior}</PrecoAtual>
            </CorpoCard>
            <DescCard id="descCard" className="descCard">
                <p>{props.Parcela}</p>
            </DescCard>
        </CardFTZ>
        );
};
export default CardsFTZ;