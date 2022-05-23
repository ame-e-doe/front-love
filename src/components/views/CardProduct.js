import styles from '../styles/card-product.css'

const DigitalProduct = ({products}) => {
  
    return (
        <>
            {products.map((p) => (
                    <div className="col-md-3 mb-2 mt-2">
                        <div>
                            <div className="card shadow-sm border-0 rounded">
                                <div className="card-body p-0 card bg-dark text-white">
                                    <img
                                        src=""
                                        alt=""
                                        className="w-100 card-img-top"
                                    />
                                    <div className="p-2">
                                       <p className="small text-muted">
                                          <span >{p.category.description}</span>
                                          <span className={styles.span} style={{textAlign: "end"}} >Preço</span>
                                       </p>
                                       <p>
                                          <span>{p.title}</span>
                                          <span style={{textAlign: "end"}}>{p.value}</span>
                                       </p>
                                       <div className="m-2">
                                            <button type="button" className="btn btn-primary">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
            ))}
        </>
    );
  };
  
export default DigitalProduct;
  
