import styles from '../styles/CardProduct.css'
import LinkButton from '../button/LinkButton';

const DigitalProduct = ({products}) => {
  
    return (
        <>
            {products.map((p) => (
                    <div className="col-md-3 mb-2 mt-2" key={p.id}>
                        <div>
                            <div className="card shadow-sm border-0 rounded">
                                <div className="card-body p-0 card bg-dark text-white">
                                    <img
                                        src={p.url}
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
                                            <LinkButton to={`/detailsProduct/${p.id}`} text={"Comprar"}/>
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
  
