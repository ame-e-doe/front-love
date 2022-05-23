import React, { Component } from 'react';
import Input from "react-validation/build/input";
import Form from 'react-validation/build/form';
import CheckButton from 'react-validation/build/button';

import CardService from '../../services/card-service'

const required = (value) => {
    if(!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Este campo é obrigatório.
            </div>
        );
    }
};

const vcard = (value) => {
    if(value.length < 16) {
        return (
            <div className="alert alert-danger" role="alert">
                Por favor, digite um cartão válido
            </div>
        );
    }
}

const vprintedName = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
          <div className="alert alert-danger" role="alert">
            O nome deve ter entre 3 e 20 caracteres.
          </div>
        );
      }
};

export default class AddCreditCard extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
        this.onChangeExpirationTime = this.onChangeExpirationTime.bind(this);
        this.onChangeSecurityCode = this.onChangeSecurityCode.bind(this);

        this.state = {
            cardNumber: '',
            printedName: '',
            expirationTime:'',
            securityCode: '',
            successful: false,
            message: ''
        };

    }

    onChangeCardNumber(e) {
        this.setState({
            cardNumber: e.target.value
        });
    }

    onChangePrintedName(e) {
        this.setState({
            printedName: e.target.value
        });
    }

    onChangeExpirationTime(e) {
        this.setState({
            expirationTime: e.target.value
        });
    }

    onChangeSecurityCode(e) {
        this.setState({
            securityCode: e.target.target
        });
    }

    handleRegister(e) {
        e.preventDefault();

        this.setState({
            message: '',
            successful: false
        });

        this.form.validateAll();

        if(this.checkBtn.context._errors.length === 0) {
            CardService.saveCard(
                this.state.cardNumber,
                this.state.printedName,
                this.state.expirationTime,
                this.state.securityCode
            ).then(
                response => {
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                         error.message ||
                         error.toString();
                         
                         this.setState({
                             successful: false,
                             message: resMessage
                         });
                }
            );
        }

    }

    render() {
        return (
            <div className="col-md-12">
                <div className="card shadow mb-5 bg-body rounded">
                    <div className="p-3 rounded-top header-form">Adicionar cartão de crédito</div>

                    <Form
                        onSubmit={this.handleRegister}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                        {!this.state.successful && (
                            <><div className="header-form-childre p-4">
                                <form data-toggle="validator">
                                    <div className="mb-3">
                                        <Input
                                            type="number"
                                            className="form-control"
                                            id="card-number"
                                            name="card-number"
                                            value={this.state.cardNumber}
                                            onChange={this.onChangeCardNumber}
                                            validations={[required, vcard]}
                                            placeholder="Número do cartão"
                                            required />
                                    </div>
                                    <div className="mb-3">
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="card-name"
                                            name="card-name"
                                            value={this.state.printedName}
                                            onChange={this.onChangePrintedName}
                                            validations={[required, vprintedName]}
                                            placeholder="Nome impresso no cartão"
                                            required />
                                    </div>
                                    <div className="mb-1">
                                        <span className="float-start">
                                            <Input
                                                type="date"
                                                className="form-control"
                                                id="date-valid"
                                                name="date-valid"
                                                value={this.state.expirationTime}
                                                onChange={this.onChangeExpirationTime}
                                                validations={[required]}
                                                placeholder="Data de validade"
                                                required />
                                        </span>
                                        <span className="float-end"><span>
                                            <Input
                                                type="number"
                                                className="form-control"
                                                id="cvv"
                                                name="cvv"
                                                value={this.state.securityCode}
                                                onChange={this.onChangeSecurityCode}
                                                validations={[required]}
                                                placeholder="CVV"
                                                required />
                                        </span>
                                        </span>
                                    </div>
                                </form>
                            </div><div className="d-grid m-3">
                                    <input type="submit" className="btn-submit-form" value="Adicionar Cartão" />
                                </div></>
                        )}
                        
                        {this.state.message && (
                            <div className="form-group">
                                <div
                                    className={
                                        this.state.successful
                                        ? "alert alert-success"
                                        : "alert alert-danger"
                                    }
                                    role="alert"
                                >
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                        style={{ display: "none" }}
                        ref={c => {
                            this.checkBtn = c;
                        }}
                        />
                        </Form>    
            </div>
        </div>
    );
}
};