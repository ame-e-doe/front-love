import { useState } from "react/cjs/react.production.min";

const DigitalProduct = () => {
  
    const [productData, setProductData] = useState();

    return (
        <div class="row pb-5 mb-4">
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div class="card shadow-sm border-0 rounded">
                    <div class="card-body p-0 card bg-dark text-white">
                        <img
                            src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg"
                            alt=""
                            class="w-100 card-img-top"
                        />
                        <div class="p-2">
                            <span class="small text-muted">{productData.category}</span>
                            <span class="float-end"><span class="text-muted small">Preço</span></span>
                            <br />
                            <span>{productData.name}</span>
                            <span class="float-end"><span class="text-muted small">{productData.value}</span></span>
                            <div class="m-2 d-grid gap-2">
                                <button type="button" class="btn btn-primary">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
export default DigitalProduct;
  
