import React, { useState, useEffect } from "react";
import Footer from "../../../Components/Footer";
import Cabecalho from "../../../Components/Menu/Header";
import IProduto from "../../../../utils/interfaces/IProduto";
import apiFullSports from "../../../../api/apiFullSports";
import styled from "styled-components";

const BotaoNumber = styled.div`
    background-color: #796969;
    height: 20px;
    width: 20px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    cursor: pointer;
    margin-left: 5px;
`;
const ThTabela = styled.th`
display: grid;
    grid-template-columns: repeat(3, 30px);
    height: auto;
`;
const Botoes =styled.div`
margin-top: 3%;
display: grid;
justify-content: center;
grid-template-columns: repeat(2, 250px);
button{
    padding: 3px;
    border: 1px solid #000;
    margin-left: 25px;
    margin-right: 25px;
    border-radius: 5px;
}
`;
const CarrinhoDeCompra = () => {
    const [produto, setProduto] = useState<IProduto>();
    const carrinho = JSON.parse(localStorage.getItem('carrinho') as string);
    const [spinner, setSpinner] = useState(false);
    const [quantidadeProd, setQuantidadeProd] = useState('')
    useEffect(() => {
        setSpinner(true)
        console.log(carrinho)
        apiFullSports.get<IProduto>(`listar-produto/${carrinho.pedido.produtoID}`).then(resposta => {
            setProduto(resposta.data);
            setSpinner(false);
        }).catch((err) => console.log(err));
        setQuantidadeProd(carrinho.pedido.quantidade)
    }, [])
    function MostraProduto() {

        const categoria = produto?.categoriaProduto;
        if (categoria?.calcado !== undefined) {
            const precoProd = parseFloat(quantidadeProd);
            const precoCategoria = parseFloat(categoria.calcado.preco);
            const quantidadeCategoria = parseFloat(quantidadeProd);
            return <tr>
                <th><img src={categoria.calcado.imagemProduto[0].url} alt="imagem do produto" width='100' /></th>
                <ThTabela>
                    <BotaoNumber onClick={() => {
                        const newquantidade = quantidadeCategoria + 1;
                        console.log(newquantidade)
                        setQuantidadeProd(newquantidade.toString());
                    }}>+</BotaoNumber>
                    <input value={precoProd} type="number" placeholder="Nº"
                        min='1' required max={categoria.calcado.quantidade}
                        onChange={evento => setQuantidadeProd(evento.target.value)}
                    />
                    <BotaoNumber onClick={() => {
                        const newquantidade = quantidadeCategoria - 1;
                        console.log(newquantidade)
                        setQuantidadeProd(newquantidade.toString());
                    }}>-</BotaoNumber>
                </ThTabela>
                <th>{precoCategoria * precoProd}</th>
            </tr>
        } else if (categoria?.equipamento !== undefined) {
            const precoProd = parseFloat(quantidadeProd);
            const precoCategoria = parseFloat(categoria.equipamento.preco);
            const quantidadeCategoria = parseFloat(quantidadeProd);
            return <tr>
                <th><img src={categoria.equipamento.imagemProduto[0].url} alt="imagem do produto" width='100' /></th>
                <ThTabela>
                    <BotaoNumber onClick={() => {
                        const newquantidade = quantidadeCategoria + 1;
                        console.log(newquantidade)
                        setQuantidadeProd(newquantidade.toString());
                    }}>+</BotaoNumber>
                    <input value={precoProd} type="number"
                        placeholder="Nº" min='1' required max={categoria.equipamento.quantidade}
                        onChange={evento => setQuantidadeProd(evento.target.value)} />
                    <BotaoNumber onClick={() => {
                        const newquantidade = quantidadeCategoria - 1;
                        console.log(newquantidade)
                        setQuantidadeProd(newquantidade.toString());
                    }}>-</BotaoNumber>
                </ThTabela>
                <th>{precoCategoria * precoProd}</th>
            </tr>
        } else if (categoria?.roupa !== undefined) {
            const precoProd = parseFloat(quantidadeProd);
            const precoCategoria = parseFloat(categoria.roupa.preco);
            const quantidadeCategoria = parseFloat(quantidadeProd);
            return <tr>
                <th><img src={categoria.roupa.imagemProduto[0].url} alt="imagem do produto" width='100' /></th>
                <ThTabela>
                    <BotaoNumber onClick={() => {
                        const newquantidade = quantidadeCategoria + 1;
                        console.log(newquantidade)
                        setQuantidadeProd(newquantidade.toString());
                    }}>+</BotaoNumber>
                    <input value={precoProd} type="number"
                        placeholder="Nº" min='1' required max={categoria.roupa.quantidade}
                        onChange={evento => setQuantidadeProd(evento.target.value)} />
                    <BotaoNumber onClick={() => {
                        const newquantidade = quantidadeCategoria - 1;
                        console.log(newquantidade)
                        setQuantidadeProd(newquantidade.toString());
                    }}>-</BotaoNumber>
                </ThTabela>
                <th>{precoCategoria * precoProd}</th>
            </tr>
        } else if (categoria?.suplemento !== undefined) {
            const precoProd = parseFloat(quantidadeProd);
            const precoCategoria = parseFloat(categoria.suplemento.preco);
            const quantidadeCategoria = parseFloat(quantidadeProd);
            return <tr>
                <th><img src={categoria.suplemento.imagemProduto[0].url} alt="imagem do produto" width='100' /></th>
                <ThTabela>
                    <BotaoNumber onClick={() => {
                        const newquantidade = quantidadeCategoria + 1;
                        console.log(newquantidade)
                        setQuantidadeProd(newquantidade.toString());
                    }}>+</BotaoNumber>
                    <input value={precoProd} type="number" placeholder="Nº"
                        min='1' required max={categoria.suplemento.quantidade}
                        onChange={evento => setQuantidadeProd(evento.target.value)} />
                </ThTabela>
                <BotaoNumber onClick={() => {
                    const newquantidade = quantidadeCategoria - 1;
                    console.log(newquantidade)
                    setQuantidadeProd(newquantidade.toString());
                }}>-</BotaoNumber>
                <th>{precoCategoria * precoProd}</th>
            </tr>
        } else {
            return <></>
        }
    }

    function cancelarPedido(){
        localStorage.removeItem("carrinho");
        window.location.href='/';
    }
    function realizarPedido(){
        apiFullSports.request({
            method:"POST",
            url:"realizar-pedido/",
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            data:{
                quantidadePedido: quantidadeProd,
                produto: carrinho.pedido.produtoID,
                cliente: carrinho.clienteID
            }
        }).then(reposta=>{
            localStorage.removeItem("carrinho");
            window.location.href='/historico-de-pedido';
        }).catch((err)=>console.log(err))
    }
    return <>
        <Cabecalho />

        <div className="table-container">
            <div className="table-title">
                <span className="consulta-titulo">Meu Carrinho</span>
                <div className="panel-table">
                    <table className="table-consulta">
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Quantidade</th>
                                <th>Total do Pedido</th>
                            </tr>
                        </thead>
                        <tbody>
                            <MostraProduto />
                        </tbody>
                    </table>
                </div>
                <Botoes>
                <button className="btn-exclui" onClick={cancelarPedido}>Cancelar Pedido</button>
                <button className="btn-edit"onClick={realizarPedido}>Realizar Pedido</button>
                
                </Botoes>
            </div>
        </div>

        <Footer />
    </>
}
export default CarrinhoDeCompra;