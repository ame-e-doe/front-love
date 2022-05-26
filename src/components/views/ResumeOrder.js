function ResumeOrder() {

    return (
        //<section class="section-form d-flex align-items-center justify-content-center">
        <div>
            <div className="card shadow mb-5 bg-body rounded-2">
                <div className="p-3 rounded-top header-form">Resumo do pedido</div>
                <div className="pt-2 px-2 container-conteudo">
                    <div>
                        <p className="mb-2">
                            <span>Itens:</span>
                            <span style={{textAlign: "end"}}>2</span>
                        </p>
                        <p className="mb-2">
                            <span>Total:</span>
                            <span style={{textAlign: "end"}}>R$ 376,98</span> 
                        </p>
                        <p className="mb-3">
                            <span>Descontos:</span>
                            <span style={{textAlign: "end"}}>R$ 100,00</span>
                        </p>
                    </div>
                </div>
                <div className="p-3 container-total-pedido">
                    <span>Total Pedido:</span>
                    <span style={{textAlign: "end"}}>R$ 100,00</span>
                </div>
            </div>
        </div>
    //</section>
    );

};

export default ResumeOrder;