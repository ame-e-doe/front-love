import LinkButton from "../button/LinkButton";
import '../styles/BuySuccess.css'

function BuySuccess() {

    return (
        <div className="flex-align">
                <div className="container col-md-4 col-md-offset-4">
                    <div className="card border-success mb-3">
                        <div className="p-4 rounded-top header-form">
                            <i className=""></i> Pedido Realizado</div>
                        <div className="pt-2 px-2 container-conteudo">
                            <div>
                                <p className="msg-donate p-3"> 
                                    Seu pedido está sendo processado, 
                                    você pode acompanhar o status do seu pedido no seu perfil.</p>
                            </div>
                            <div className="m-2">
                                <LinkButton to={"/"} text={"Voltar para página inicial."}/>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
    );
};

export default BuySuccess;