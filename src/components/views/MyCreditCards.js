function MyCreditCards() {

    return (
        <div>
          <div className="card shadow mb-5 bg-body rounded-2">
            <div className="p-3 rounded-top header-form">Selecione o cartão</div>
            <div className="p-3 container-conteudo">
                <div>
                    <div className="d-flex justify-content-center mb-3" style={{alignItems: "center"}}>
                        <span className="px-3" style={{textAlign: "center"}}>
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        </span>
                        <span className="px-3" style={{textAlign: "center"}}>Cartão terminado em 7888</span>
                        <span className="px-3" style={{textAlign: "center"}}>Rennan S. Costa</span>
                        <span className="px-3" style={{textAlign: "center"}}>09/2029</span>
                    </div>
                </div>
            </div>
          </div>
      </div>
    );
}

export default MyCreditCards;