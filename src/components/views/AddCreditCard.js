const AddCreditCard = () => {

    return (
        <div class="col-3">
            <div class="card shadow mb-5 bg-body rounded">
                <div class="p-3 rounded-top header-form">Adicionar cartão de crédito</div>
                    <div class="header-form-childre p-4">
                        <form data-toggle="validator">
                            <div class="mb-3">
                                <input
                                type="number"
                                class="form-control"
                                id="card-number"
                                name="card-number"
                                placeholder="Número do cartão"
                                required/>
                            </div>
                            <div class="mb-3">
                                <input
                                type="text"
                                class="form-control"
                                id="card-name"
                                name="card-name"
                                placeholder="Nome no cartão"
                                required/>
                            </div>
                            <div class="mb-1">
                                <span class="float-start">    
                                    <input
                                    type="date"
                                    class="form-control"
                                    id="date-valid"
                                    name="date-valid"
                                    placeholder="Data de validade"
                                    required/>
                                </span>
                                <span class="float-end"><span>
                                    <input
                                    type="number"
                                    class="form-control"
                                    id="cvv"
                                    name="cvv"
                                    placeholder="CVV"
                                    required/></span></span>
                            </div>
                        </form>
                    </div>
            <div class="d-grid m-3">
                <input type="submit" class="btn-submit-form" value="Adicionar Cartão" />
            </div>
        </div>
      </div>
    );
};

export default AddCreditCard;