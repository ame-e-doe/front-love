import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";

import CardProducts from "../components/views/CardProduct"

const Home = () => {

  const url = "localhost:8080/api/v1/products/list";
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    axios.get(url)
    .then(response => {

      console.log(response);
      setProducts(response);

    })
    .catch(error => console.log(error))

  }, [])


  return (
    <div className="container">
      <section className="row">
        <CardProducts products={products}/>
      </section>
    </div>
  );
};

export default Home;
