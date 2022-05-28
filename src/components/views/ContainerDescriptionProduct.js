function ContainerDescriptionProduct({product}) {

    return (
            <div className="container">
                <div className="card shadow mb-5 bg-body rounded-2">
                    <div className="p-3 rounded-top header-form">
                        <i className=""></i> Descrição</div>
                    <div className="pt-2 px-2 container-conteudo">
                        <div>
                            <p className="msg-donate p-3">{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
    );

};

export default ContainerDescriptionProduct;