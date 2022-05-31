import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react/cjs/react.development";
import ContainerBuyProduct from './views/ContainerBuyProduct';
import ContainerDescriptionProduct from './views/ContainerDescriptionProduct';
import ContainerPropertiesProduct from './views/ContainerPropertiesProduct';
import styles from "./styles/cart-products.css"

function DetailsProduct() {
    
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const url = `http://localhost:8080/api/products/${id}`
   
    useEffect(() => {
      axios.get(url)
        .then(response => {
          setProduct(response.data);
        })
        .catch(error => console.log(error))
    }, [id]);

    return (
        <div className="col-12 row justify-content-center">
              <div  className="col-4 m-3 mh-100">   
                <img className='img-fluid' alt={product.description} src={product.url}/>
            </div>
                        
            <div className="col-4 m-3" >
                <ContainerBuyProduct product={product}/>
                <ContainerDescriptionProduct product={product}/>
                <ContainerPropertiesProduct />
            </div>    
        </div>
    );

}
export default DetailsProduct;