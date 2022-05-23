import CartProducts from "./views/CartProducts"
import ResumeOrder from "./views/ResumeOrder";
import ContainerDonate from "./views/ContainerDonate"
import MyCreditCards from "./views/MyCreditCards";
import styles from "./styles/cart-products.css"

function Cart(products) {

    const p = [
        {
            title: "Imagem 1",
            description: "descricao imagem 1",
            value: 55.78,
            category: "Cageoria imagem 1"
        },
        {
            title: "Imagem 2",
            description: "descricao imagem 2",
            value: 11.45,
            category: "Cageoria imagem 2"
        },
        {
            title: "Imagem 3",
            description: "descricao imagem 3",
            value: 99.78,
            category: "Cageoria imagem 3"
        }
    ];

    return (
        <div className="col-12 row justify-content-center">
            <div className="col-6 m-3 ">
                <div> <MyCreditCards /> </div>
                <div className="card shadow mb-5 bg-body rounded bg-dark">
                    <div className="p-3 rounded-top header-form">Itens</div>
                    <CartProducts products={p}/>
                </div>
            </div>

            <div className="col6 m-3" >
                <ResumeOrder />
                <ContainerDonate />
                <div>
                    <button type="button" className="btn btn-primary">Finalizar</button>
                </div>
            </div>

        </div>
    );

}

export default Cart;