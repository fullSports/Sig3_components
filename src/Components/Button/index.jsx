import React from "react";
import styled from "styled-components";

const BottonForm = styled.button`
    justify-content: center;
	margin-right: auto;
	margin-left: auto;
    display: block;
    border: none;
    font-size: 14px;
    width: 100%;
    height: 44px;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    :hover{
        background-color: #313131;
        transform:translate(0.3s);
        
    }
`;
function Button(props){
    return(
    <BottonForm type={props.type}>
        {props.children}
    </BottonForm>
)};
export default Button;