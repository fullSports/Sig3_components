import React from "react";
import styled from "styled-components";

const Select = styled.select`
    border-radius: 5px;
    font-family: "Roboto", sans-serif;
    outline: 0;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
`;
function Selects(props){
    const local = window.location.href;
    if (local.search('/sig/cadastro-de-cliente')!== -1) {
        return(
            <>
            <label for={props.for} className="col-form-label">
                {props.label}
            </label>
            <div>
                <span if={props.if} errors={props.errors} className="txt-aviso" />
                <Select name={props.name} type={props.type} field={props.field}
                className="txt-form" id={props.id} placeholder={props.placeholder}>
                    {props.itens.map(item=> <option>{item}</option>)}
                </Select>
            </div>
            </>
        )
    }

};
export default Selects;