const UpdateDetails = () => {

    return (
    <div class="section-form d-flex align-items-center justify-content-center">
        <div class="col-3">
            <div class="card shadow mb-3 bg-body rounded">
                <div class="p-3 rounded-top header-form">Atualizar detalhes da conta</div>
                <div class="header-form-childre p-4">
                    <form data-toggle="validator">
                        <div class="mb-3 form-floating">
                            <input
                            type="text"
                            class="form-control"
                            id="user-name"
                            name="user-name"
                            placeholder="User name padrão do usuario"
                            required/>
                            <label for="confirme-password">Nome de usuario</label>
                        </div>
                        <div class="mb-1">
                            <input
                            type="text"
                            class="form-control"
                            id="user-email"
                            name="user-email"
                            placeholder="emailDoUsuario@logado.com"
                            disabled/>
                        </div>
                    </form>
                </div>
                <div class="d-grid m-3">
                    <input type="submit" class="btn-submit-form" value="Salvar alterações" />
                </div>
            </div>
        </div>
    </div>
    );

};

export default UpdateDetails;