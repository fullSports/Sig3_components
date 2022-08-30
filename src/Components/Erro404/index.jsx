import React from "react";
import styled from "styled-components";
import Img404 from './../../../src/assets/images/5680361.png';
const DivImg = styled.div`
img{
    padding-left: 32%;
    height: auto;
}
`;
const DivP = styled.div`
    p{
    text-align: center;
    font-size: 26px;
    color: #b64545;
    }
`;
function PageErro404(){
    return(
    <>
        <DivImg className="bloco-img">
            <img src={Img404} alt="imagem do erro 404"/>
        </DivImg>
        <DivP className="blocoP"><p>Pagina não encotrada :(</p></DivP>
    </>
);}
export default PageErro404