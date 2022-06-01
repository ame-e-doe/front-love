function MyCreditCards({cardNumber, printedName, expirationDate}) {

  let numberFormated = cardNumber;
  if (cardNumber) {
    numberFormated = cardNumber.substring(11,15)
  }

  return (
        <div>
          <div className="card shadow mb-5 bg-body rounded-2">
            <div className="p-3 rounded-top header-form">Selecione o cartão</div>
            <div className="p-3 container-conteudo">
                <div>
                    <div className="d-flex justify-content-center" style={{textAlign: "center"}}>
                        <span className="px-2">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        </span>
                        <span className="px-2" style={{textAlign: "center"}}>Cartão terminado em {numberFormated}</span>
                        <span className="px-2" style={{textAlign: "center"}}>{printedName}</span>
                        <span className="px-2" style={{textAlign: "center"}}>{expirationDate}</span>
                    </div>
                </div>
            </div>
          </div>
      </div>
  );
}

export default MyCreditCards;