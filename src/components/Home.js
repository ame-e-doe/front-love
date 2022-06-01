import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";

import CardProducts from "../components/views/CardProduct"

const Home = () => {

  const url = "http://localhost:8080/api/products/list";
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    axios.get(url)
    .then(response => {
      setProducts(response.data);
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
