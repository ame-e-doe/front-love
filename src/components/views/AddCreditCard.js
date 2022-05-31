import React, { Component } from 'react';
import Input from "react-validation/build/input";
import Form from 'react-validation/build/form';
import CheckButton from 'react-validation/build/button';
import '../styles/AddCreditCard.css'
import CardService from '../../services/card-service'

import "../../components/styles/AddCreditCard.css";

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
        this.onChangePrintedName = this.onChangePrintedName.bind(this);
        this.onChangeExpirationTime = this.onChangeExpirationTime.bind(this);
        this.onChangeSecurityCode = this.onChangeSecurityCode.bind(this);

        this.state = {
            cardNumber: '',
            printedName: '',
            expirationTime:'',
            securityCode: '',
            successful: false,
            message: '',
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
            securityCode: e.target.value
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
      <body className='addCreditCard'>
        <div className="row align-items-center justify-content-center">
            <div className="card shadow mb-5 bg-body rounded">
                <div className="p-3 rounded-top header-form">Adicionar cartão de crédito</div>
                    <Form
                        onSubmit={this.handleRegister}
                        ref={c => {
                        this.form = c;
                        }}
                    >
                        {!this.state.successful && (
                            <div>
                                <div className="form-group">
                                    <label htmlFor="cardNumber">Número do Cartão</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="card-number"
                                            value={this.state.cardNumber}
                                            onChange={this.onChangeCardNumber}
                                            validations={[required, vcard]}
                                            placeholder="1234 5678 1234 5678"
                                        />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="printedName">Nome no cartão</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="card-name"
                                            value={this.state.printedName}
                                            onChange={this.onChangePrintedName}
                                            validations={[required, vprintedName]}
                                            placeholder="Nome impresso no cartão"
                                        />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='expirationTime'>Data de Validade</label>
                                        <Input
                                            type="text"
                                            className="form-control mb-3"
                                            name="date-valid"
                                            value={this.state.expirationTime}
                                            onChange={this.onChangeExpirationTime}
                                            validations={[required]}
                                            placeholder="MM/AA"
                                            data-mask="00/00"
                                            maxlength="5"
                                            autocomplete="off"
                                        />
                                </div>
                                <div className="form-group">  
                                    <label htmlFor='securityCode'>Código de Segurança</label>
                                        <Input
                                            type="text"
                                            className="form-control mb-3 pt-2"
                                            name="cvv"
                                            value={this.state.securityCode}
                                            onChange={this.onChangeSecurityCode}
                                            validations={[required]}
                                            placeholder="CVV"
                                        />
                                </div>

                                    <div className="form-group">
                                        <button className="btn-submit-form">Salvar cartão</button>
                                    </div>
                                </div>

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
            </body>    
        );
    }
};