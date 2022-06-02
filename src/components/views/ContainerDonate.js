import { useState } from "react/cjs/react.development";

function ContainerDonate() {

    const [donate, setDonate] = useState("R$: 00,00");

    function donateUmReal() {
        setDonate("R$: 1,00");
    }

    function donateDoisReais() {
        setDonate("R$: 2,00");
    }

    function donateCincoReais() {
        setDonate("R$: 5,00");
    }

    function donateDezReais() {
        setDonate("R$: 10,00");
    }

    return (
            <div>
                <div className="card shadow mb-5 bg-body rounded-2">
                    <div className="p-3 rounded-top header-form">Doação</div>
                    <div className="pt-2 px-2 container-conteudo">
                        <div>
                            <p className="msg-donate">Fique a vontade para doar qualquer valor e ajudar ainda mais a instituição.</p>
                            <div className="form-group m-4">
                                <input value={donate} className="form-control" id="donate" placeholder="R$ 0,00"/>
                            </div>
                            <div className="d-flex justify-content-center mb-4">
                                <span className="p-1"><button onClick={donateUmReal} type="button" className="btn btn-primary btn-sm">R$ 1,00</button></span>
                                <span className="p-1"><button onClick={donateDoisReais} type="button" className="btn btn-primary btn-sm">R$ 2,00</button></span>
                                <span className="p-1"><button onClick={donateCincoReais} type="button" className="btn btn-primary btn-sm">R$ 5,00</button></span>
                                <span className="p-1"><button onClick={donateDezReais} type="button" className="btn btn-primary btn-sm">R$ 10,00</button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );

};

export default ContainerDonate;