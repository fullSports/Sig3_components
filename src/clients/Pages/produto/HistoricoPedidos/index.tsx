import React,{useState,useEffect} from "react";
import Footer from "../../../Components/Footer";
import Cabecalho from "../../../Components/Menu/Header";
import IPedido from "../../../../utils/interfaces/IPedido";
import apiFullSports from "../../../../api/apiFullSports";

const HistoricoPedidos = () => {
    const [pedido, setPedido] = useState<IPedido[]>([]);
    const [spinner, setSpinner] = useState(false);
    const user = JSON.parse(localStorage.getItem('user') as string);
    useEffect(() => {
        setSpinner(true)
        apiFullSports.get<IPedido[]>(`listar-pedidos`).then(resposta => {
            setPedido(resposta.data);
            setSpinner(false);
        }).catch((err) => console.log(err));
    }, [])
    function cancelarPedido(){
        pedido.map(item=>{
            if(item.cliente._id === user._id){
                apiFullSports.delete(`deletar-pedido/${item._id}`)
                .then(()=>{
                    alert("Pedido cancelado com sucesso")
                    window.location.href='/'
                }).catch((err)=>console.log(err));
            }
        })
    }
    function MostraProduto() {
        return <>
        {pedido.map(item=>{
            if(item.cliente._id === user._id){
                const categoria = item.produto.categoriaProduto;
                if(categoria.calcado !== undefined){
                    return <tr>
                        <th><img src={categoria.calcado.imagemProduto[0].url} alt="iamgem do produto" width='100' /></th>
                        <th>{item.quantidadePedido}</th>
                        <th>{item.total}</th>
                    </tr>
                }else if(categoria.equipamento !==undefined){
                    return <tr>
                        <th><img src={categoria.equipamento.imagemProduto[0].url} alt="iamgem do produto" width='100' /></th>
                        <th>{item.quantidadePedido}</th>
                        <th>{item.total}</th>
                    </tr>
                }else if(categoria.roupa !== undefined){
                    return <tr>
                        <th><img src={categoria.roupa.imagemProduto[0].url} alt="iamgem do produto" width='100' /></th>
                        <th>{item.quantidadePedido}</th>
                        <th>{item.total}</th>
                    </tr>
                }else if(categoria.suplemento !== undefined){
                    return <tr>
                    <th><img src={categoria.suplemento.imagemProduto[0].url} alt="iamgem do produto" width='100' /></th>
                    <th>{item.quantidadePedido}</th>
                    <th>{item.total}</th>
                </tr>
                }
            }
        })}
        </>
    }
    return <>
        <Cabecalho />
        <div className="table-container">
            <div className="table-title">
                <span className="consulta-titulo">Histórico de pedidos</span>
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
                    <button className="btn-exclui" onClick={cancelarPedido}>Cancelar Pedido</button>
                </div>
            </div>
        </div>
        <Footer />
    </>
}
export default HistoricoPedidos;