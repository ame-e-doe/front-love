function CartProducts({products}) {

    return (
        <>
         {products.map((p) => (
          <div class="container">
              <div class="d-flex justify-content-center row">
                  <div class="col-md-7">
                      <div class="row p-2 bg-dark text-white border-0">
                          <div class="col-md-3 mt-1">
                                <img
                                class="img-fluid img-responsive rounded product-image"
                                src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg"
                                alt=""
                                />
                          </div>
                          <div class="col-md-6 mt-1">
                                <h5>{p.title}</h5>
                                <p class="text-justify text-truncate para mb-0 text-muted">
                                {p.category}<br /><br />
                                </p>
                                <p class="text-justify text-truncate para mb-0"> {p.description} <br /><br />
                                </p>
                          </div>
                          <div
                                class="align-items-center align-content-center col-md-3 border-left mt-1"
                            >
                                <div class="d-flex flex-column mt-5 text-center valor-produto">
                                <p>{p.value}</p>
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

export default CartProducts;