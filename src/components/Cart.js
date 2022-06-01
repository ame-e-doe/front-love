import CartProducts from "./views/CartProducts";
import ResumeOrder from "./views/ResumeOrder";
import ContainerDonate from "./views/ContainerDonate";
import MyCreditCards from "./views/MyCreditCards";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";

function Cart() {

  const {idProduct} = useParams();
  const [product, setProduct] = useState([]);
  const [card, setCard] = useState([])
  let url = `http://localhost:8080/api/products/${idProduct}`
  let urlCard = `http://localhost:8080/api/card/list/1`

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setProduct(response.data)
      })
      .catch(error => console.log(error))
  }, [idProduct]);

  useEffect(() => {
    axios.get(urlCard)
      .then(response => {
        setCard(response.data)
      })
    .catch(error => console.log(error));
  }, []);

  return (
    <div key={product.id} className="col-12 row justify-content-center">
      <div className="col-6 m-3 ">
          <div> <MyCreditCards cardNumber={card.cardNumber} printedName={card.printedName} expirationDate={card.expirationDate} /> </div>
            <div className="card shadow mb-5 bg-body rounded bg-dark">
              <div className="p-3 rounded-top header-form">Itens</div>
               <CartProducts srcImage={product.url} title={product.title} 
               description={product.description} value={product.value} />       
          </div>
      </div>

      <div className="col6 m-3" >
        <ResumeOrder product={product} />
        <ContainerDonate />
        <div>
          <button type="button" className="btn btn-primary">Finalizar</button>
        </div>
      </div>
    </div>
  );

}

export default Cart;