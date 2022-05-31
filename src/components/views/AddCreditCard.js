import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
export default class AddCreditCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardNumber: '',
            printedName: '',
            expirationTime:'',
            securityCode: ''
        };

    }

    render() {
        return (
            <div className="col-3">
                <div className="card shadow mb-5 bg-body rounded">
                    <div className="p-3 rounded-top header-form">Adicionar cartão de crédito</div>
                        <div className="header-form-childre p-4">
                            <form data-toggle="validator">
                                <div className="mb-3">
                                    <input
                                    type="number"
                                    className="form-control"
                                    id="card-number"
                                    name="card-number"
                                    placeholder="Número do cartão"
                                    required/>
                                </div>
                                <div className="mb-3">
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="card-name"
                                    name="card-name"
                                    placeholder="Nome no cartão"
                                    required/>
                                </div>
                                <div className="mb-1">
                                    <span className="float-start">    
                                        <input
                                        type="date"
                                        className="form-control"
                                        id="date-valid"
                                        name="date-valid"
                                        placeholder="Data de validade"
                                        required/>
                                    </span>
                                    <span className="float-end"><span>
                                        <input
                                        type="number"
                                        className="form-control"
                                        id="cvv"
                                        name="cvv"
                                        placeholder="CVV"
                                        required/></span></span>
                                </div>
                            </form>
                        </div>
                <div className="d-grid m-3">
                    <input type="submit" className="btn-submit-form" value="Adicionar Cartão" />
                </div>
            </div>
        </div>
    );
}
};