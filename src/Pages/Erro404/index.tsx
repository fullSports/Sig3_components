import React from "react"
import styled from "styled-components";
const Img404 = require('./../../assets/images/5680361.png')
const DivImg = styled.div`
justify-content: center;
display: flex;
img{
    width: 45%;
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
const PageErro404 = () => {
    return (
        <>
            <DivImg className="bloco-img">
                <img src={Img404} alt="imagem do erro 404" />
            </DivImg>
            <DivP className="blocoP"><p>Pagina não encotrada :(</p></DivP>
        </>
    )
}
export default PageErro404