const ResumeOrder = () => {

    return (
        <section class="section-form d-flex align-items-center justify-content-center">
        <div class="col-3">
            <div class="card shadow mb-5 bg-body rounded-2">
                <div class="p-3 rounded-top header-form">Resumo do pedido</div>
                <div class="pt-2 px-2 container-conteudo">
                    <div>
                        <div class="mb-2">
                            <span>Itens:</span><span class="float-end"><span>2</span></span> 
                        </div>
                        <div class="mb-2">
                            <span>Total:</span><span class="float-end"><span>R$ 376,98</span></span> 
                        </div>
                        <div class="mb-3">
                            <span>Descontos:</span><span class="float-end"><span>R$ 100,00</span></span> 
                        </div>
                    </div>
                </div>
                <div class="p-3 container-total-pedido">
                    <span>Total Pedido:</span><span class="float-end"><span>R$ 100,00</span></span> 
                </div>
            </div>
        </div>
    </section>
    );

};

export default ResumeOrder;