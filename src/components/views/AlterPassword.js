const AlterPassword = () => {

    return (
        <div class="col-3">
            <div class="card shadow mb-5 bg-body rounded">
                <div class="p-3 rounded-top header-form">Alterar senha</div>
                <div class="header-form-childre p-4">
                    <form data-toggle="validator">
                        <div class="mb-3 form-floating">
                            <input
                            type="password"
                            class="form-control"
                            id="password-old"
                            name="password-old"
                            placeholder="Senha antiga"
                            required/>
                            <label for="confirme-password">Senha antiga</label>
                        </div>
                        <div class="mb-3 form-floating">
                            <input
                            type="password"
                            class="form-control"
                            id="password-new"
                            name="password-new"
                            placeholder="Nova senha"
                            required/>
                            <label for="confirme-password">Nova senha</label>
                        </div>
                        <div class="mb-1 form-floating">
                            <input
                            type="password"
                            class="form-control"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="Confirmar senha"
                            required/>
                            <label for="confirme-password">Confirmar nova senha</label>
                        </div>
                    </form>
                </div>
                    <div class="d-grid m-3">
                        <input type="submit" class="btn-submit-form" value="Salvar senha" />
                    </div>
            </div>
      </div>
    );

};

export default AlterPassword;