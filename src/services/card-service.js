import axios from 'axios';

import AuthService from '../services/auth.service';

const API_URL = 'http://localhost:8080/api/card/'

let userId = '';

const saveCard = (cardNumber, printedName, expirationTime, securityCode) => {

    userId = AuthService.getUserId();

    return axios.post(API_URL + 'create/' + userId, {
        cardNumber,
        printedName,
        expirationTime,
        securityCode,
    });
};

const CardService = {
    saveCard,
};

export default CardService;