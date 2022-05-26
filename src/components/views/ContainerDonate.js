const ContainerDonate = () => {

    return (
        //<div class="section-form d-flex align-items-center justify-content-center">
            <div>
                <div class="card shadow mb-5 bg-body rounded-2">
                    <div class="p-3 rounded-top header-form">Doação</div>
                    <div class="pt-2 px-2 container-conteudo">
                        <div>
                            <p class="msg-donate">Fique a vontade para doar qualquer valor e ajudar ainda mais a instituição.</p>
                            <div class="form-group m-4">
                                <input type="number" class="form-control" id="donate" placeholder="R$ 0,00"/>
                            </div>
                            <div class="d-flex justify-content-center mb-4">
                                <span class="p-1"><button type="button" class="btn btn-primary btn-sm">R$ 1,00</button></span>
                                <span class="p-1"><button type="button" class="btn btn-primary btn-sm">R$ 2,00</button></span>
                                <span class="p-1"><button type="button" class="btn btn-primary btn-sm">R$ 5,00</button></span>
                                <span class="p-1"><button type="button" class="btn btn-primary btn-sm">R$ 10,00</button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        //</div>
    );

};

export default ContainerDonate;