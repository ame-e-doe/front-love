function ResumeOrder({product}) {

    let desconto = 2.00;

    return (
        <div>
            <div className="card shadow mb-5 bg-body rounded-2">
                <div className="p-3 rounded-top header-form">Resumo do pedido</div>
                <div className="pt-2 px-2 container-conteudo">
                    <div>
                        <p className="mb-2">
                            <span>Total:</span>
                            <span style={{textAlign: "end"}}>R$: {product.value}</span> 
                        </p>
                        <p className="mb-3">
                            <span>Descontos:</span>
                            <span style={{textAlign: "end"}}>R$: {desconto.toPrecision(3)}</span>
                        </p>
                    </div>
                </div>
                <div className="p-3 container-total-pedido">
                    <span>Total Pedido:</span>
                    <span style={{textAlign: "end"}}>R$: {product.value - desconto}</span>
                </div>
            </div>
        </div>
    );

};

export default ResumeOrder;