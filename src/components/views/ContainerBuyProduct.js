import LinkButton from "../button/LinkButton";

function ContainerBuyProduct({product}) {

    return (
            <div className="container">
                <div className="card shadow mb-5 bg-body rounded-2">
                    <div className="p-3 rounded-top header-form">{product.title}</div>
                    <div className="pt-2 px-2 container-conteudo">
                        <div>
                            <p className="mt-2">R$: {product.value}</p>
                            <div className="mb-2 p-2 d-grid gap-2">
                                <LinkButton className="btn btn-primary btn-sm" to={`/cart/${product.id}`} text={"Comprar"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );

};

export default ContainerBuyProduct;