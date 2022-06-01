import axios from 'axios';

import AuthService from '../services/auth.service';

const API_URL = 'http://localhost:8080/api/card/'

const saveCard = (cardNumber, printedName, expirationTime, securityCode) => {

    const currentUser = AuthService.getCurrentUser();

    return axios.post(API_URL + 'create/' + currentUser.id, {
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