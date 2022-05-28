function CartProducts({srcImage, title, description, value}) {

  /*const p = product[0];
  let title = p.title;
  let description = p.description;
  let category = p.category.description;
  let value = p.value;
  let srcImage = p.url;*/

    return (
          <div className="container">
            <div className="d-flex justify-content-center row">
              <div className="col-md-7">
                  <div className="row p-2 bg-dark text-white border-0">
                      <div className="col-md-3 mt-1">
                            <img
                            className="img-fluid img-responsive rounded product-image"
                            src={srcImage}
                            alt=""/>
                      </div>
                      <div className="col-md-6 mt-1">
                            <h5>{title}</h5>
                            <p className="text-justify text-truncate para mb-0">
                                {description}<br/><br/>
                            </p>
                      </div>
                      <div className="align-items-center align-content-center col-md-3 mt-1">
                        <div className="d-flex flex-column mt-4 text-center valor-produto">
                          <p>{value}</p>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
    );
};

export default CartProducts;