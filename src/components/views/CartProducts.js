const CartProducts = () => {

    return (
        <div class="container mt-2 mb-2">
            <div class="d-flex justify-content-center row">
                <div class="col-md-7">
                    <div class="row p-2 bg-dark text-white border rounded">
                        <div class="col-md-3 mt-1">
                            <img
                            class="img-fluid img-responsive rounded product-image"
                            src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg"
                            />
                        </div>
                        <div class="col-md-6 mt-1">
                            <h5>Nome da Imagem</h5>
                            <p class="text-justify text-truncate para mb-0 text-muted">
                            Categoria da imagem<br /><br />
                            </p>
                            <p class="text-justify text-truncate para mb-0">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book.<br /><br />
                            </p>
                        </div>
                        <div
                            class="align-items-center align-content-center col-md-3 border-left mt-1"
                        >
                            <div class="d-flex flex-column mt-5 text-center valor-produto">
                            <p>R$: 359,99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>

    );

};

export default CartProducts;